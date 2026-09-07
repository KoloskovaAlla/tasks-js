'use strict';

const fs = require('node:fs');

const INPUT_BUFFER_SIZE = 1 << 16;
const inputBuffer = Buffer.allocUnsafe(INPUT_BUFFER_SIZE);

let pending = '';
let inputEnded = false;

function nextLine() {
  while (true) {
    const nl = pending.indexOf('\n');

    if (nl !== -1) {
      let line = pending.slice(0, nl);
      pending = pending.slice(nl + 1);

      if (line.endsWith('\r')) {
        line = line.slice(0, -1);
      }

      return line;
    }

    if (inputEnded) {
      if (pending.length === 0) {
        return null;
      }

      let line = pending;
      pending = '';

      if (line.endsWith('\r')) {
        line = line.slice(0, -1);
      }

      return line;
    }

    const readCount = fs.readSync(0, inputBuffer, 0, INPUT_BUFFER_SIZE, null);

    if (readCount === 0) {
      inputEnded = true;
    } else {
      pending += inputBuffer.toString('utf8', 0, readCount);
    }
  }
}

function reply(assignments) {
  let output = `${assignments.length}\n`;

  if (assignments.length > 0) {
    output += `${assignments.join('\n')}\n`;
  }

  fs.writeSync(1, output);
}

function tokens(line) {
  return line.trim().split(/\s+/);
}

function main() {
  const configLine = nextLine();
  if (configLine === null) return;

  const config = tokens(configLine);

  const K = Number(config[0]);
  const numLayers = Number(config[5]);

  const scoreLine = nextLine();
  if (scoreLine === null) return;

  const nLine = nextLine();
  if (nLine === null) return;

  const N = Number(nLine.trim());

  for (let i = 0; i < N; i++) {
    if (nextLine() === null) {
      return;
    }
  }

  const requests = new Map();

  let edgeFree = true;
  const remoteFree = Array(K).fill(true);

  function markRequests(ids, oldState, newState, remote = null) {
    for (const id of ids) {
      const request = requests.get(id);

      if (!request) continue;
      if (request.state !== oldState) continue;
      if (remote !== null && request.remote !== remote) continue;

      request.state = newState;
    }
  }

  function getFirstRequestWithState(state) {
    for (const request of requests.values()) {
      if (request.state === state) {
        return request;
      }
    }

    return null;
  }

  function getFirstReadyPPreRequest() {
    for (const request of requests.values()) {
      if (request.state === 'ready_p_pre') {
        return request;
      }
    }

    return null;
  }

  function getFreeRemote() {
    for (let remote = 0; remote < K; remote++) {
      if (remoteFree[remote]) {
        return remote;
      }
    }

    return -1;
  }

  while (true) {
    const timeLine = nextLine();

    if (timeLine === null || timeLine.trim() === 'END') {
      return;
    }

    const eventCountLine = nextLine();
    if (eventCountLine === null) return;

    const eventCount = Number(eventCountLine.trim());
    const events = [];

    for (let i = 0; i < eventCount; i++) {
      const event = nextLine();
      if (event === null) return;

      events.push(event);
    }

    for (const event of events) {
      const p = tokens(event);
      const type = p[0];

      if (type === 'ARR') {
        const id = Number(p[1]);
        const inputLength = Number(p[2]);

        requests.set(id, {
          id,
          inputLength,
          remote: -1,
          state: 'ready_p_pre',
        });

        continue;
      }

      if (type === 'FIN') {
        const requestId = Number(p[1]);
        const request = requests.get(requestId);

        if (request) {
          request.state = 'finished';
        }

        continue;
      }

      if (type === 'TDN') {
        const server = p[1];

        if (server === 'E') {
          edgeFree = true;
        } else {
          const remote = Number(server.slice(1));
          remoteFree[remote] = true;
        }

        const stageType = p[2];
        const stageName = p[3];

        if (stageType === 'P' && stageName === 'POST') {
          const remote = Number(p[4]);
          const requestId = Number(p[5]);
          const request = requests.get(requestId);

          if (
            request &&
            request.state === 'p_post_running' &&
            request.remote === remote
          ) {
            request.state = 'ready_d_pre';
          }
        }

        continue;
      }

      if (type === 'XDN') {
        const direction = p[1];
        const remote = Number(p[2]);
        const transferKind = p[4];
        const count = Number(p[5]);

        const ids = [];

        for (let i = 0; i < count; i++) {
          ids.push(Number(p[6 + i]));
        }

        if (direction === 'UP' && transferKind === 'PRE') {
          markRequests(ids, 'p_pre_running', 'ready_p_proc', remote);
        } else if (direction === 'DOWN' && transferKind === 'PRE') {
          markRequests(ids, 'p_proc_running', 'ready_p_post', remote);
        } else if (direction === 'UP' && transferKind === 'DEC') {
          markRequests(ids, 'd_pre_running', 'ready_d_proc', remote);
        } else if (direction === 'DOWN' && transferKind === 'DEC') {
          markRequests(ids, 'd_proc_running', 'ready_d_post', remote);
        }
      }
    }

    const assignments = [];

    /*
      На edge можно стартовать не более одной задачи.

      Приоритет:
      1. D POST — выдаём уже вычисленный токен;
      2. D PRE  — запускаем следующий output-step;
      3. P POST — быстрее доводим input stage до ready-to-decode;
      4. P PRE  — принимаем новые запросы.
    */
    if (edgeFree) {
      let request = getFirstRequestWithState('ready_d_post');

      if (request) {
        assignments.push(`E D POST -1 1 ${request.id}`);
        request.state = 'd_post_running';
        edgeFree = false;
      } else {
        request = getFirstRequestWithState('ready_d_pre');

        if (request) {
          assignments.push(`E D PRE -1 1 ${request.id}`);
          request.state = 'd_pre_running';
          edgeFree = false;
        } else {
          request = getFirstRequestWithState('ready_p_post');

          if (request) {
            assignments.push(`E P POST ${request.remote} ${request.id}`);
            request.state = 'p_post_running';
            edgeFree = false;
          } else {
            request = getFirstReadyPPreRequest();

            if (request) {
              const remote = getFreeRemote();

              if (remote !== -1) {
                assignments.push(`E P PRE ${remote} ${request.id}`);
                request.remote = remote;
                request.state = 'p_pre_running';
                edgeFree = false;
              }
            }
          }
        }
      }
    }

    /*
      Каждый remote независим, поэтому за один ответ можно стартовать
      задачу на каждом свободном Ck.
    */
    for (let remote = 0; remote < K; remote++) {
      if (!remoteFree[remote]) continue;

      let chosen = null;

      for (const request of requests.values()) {
        if (
          request.remote === remote &&
          request.state === 'ready_d_proc'
        ) {
          chosen = request;
          break;
        }
      }

      if (chosen) {
        assignments.push(`C${remote} D PROC ${remote} 1 ${chosen.id}`);
        chosen.state = 'd_proc_running';
        remoteFree[remote] = false;
        continue;
      }

      for (const request of requests.values()) {
        if (
          request.remote === remote &&
          request.state === 'ready_p_proc'
        ) {
          chosen = request;
          break;
        }
      }

      if (chosen) {
        assignments.push(
          `C${remote} P PROC 0 ${numLayers} ${remote} ${chosen.id}`
        );

        chosen.state = 'p_proc_running';
        remoteFree[remote] = false;
      }
    }

    reply(assignments);
  }
}

main();