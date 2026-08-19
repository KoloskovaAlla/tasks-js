'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

const lines = [];
const waiters = [];

rl.on('line', (line) => {
  const resolve = waiters.shift();

  if (resolve) {
    resolve(line);
  } else {
    lines.push(line);
  }
});

rl.on('close', () => {
  while (waiters.length > 0) {
    waiters.shift()(null);
  }
});

function nextLine() {
  if (lines.length > 0) {
    return Promise.resolve(lines.shift());
  }

  return new Promise((resolve) => {
    waiters.push(resolve);
  });
}

function reply(assignments = []) {
  process.stdout.write(`${assignments.length}\n`);

  for (const assignment of assignments) {
    process.stdout.write(`${assignment}\n`);
  }
}

async function main() {
  // 1. Читаем конфигурацию системы.
  const configLine = await nextLine();
  if (configLine === null) return;

  const config = configLine.trim().split(/\s+/);
  const K = Number(config[0]);
  const numLayers = Number(config[5]);

  // 2. Читаем параметры score. Пока не используем.
  const scoreLine = await nextLine();
  if (scoreLine === null) return;

  // 3. Читаем таблицу длительностей. Пока только пропускаем.
  const N = Number(await nextLine());

  for (let i = 0; i < N; i++) {
    await nextLine();
  }

  const requests = new Map();



  // 4. Читаем event frames.
  while (true) {
    const timeLine = await nextLine();

    if (timeLine === null || timeLine === 'END') {
      return;
    }

    const time = Number(timeLine);
    const eventCount = Number(await nextLine());
    const events = [];

    for (let i = 0; i < eventCount; i++) {
      events.push(await nextLine());
    }

    for (const event of events) {
      const parts = event.trim().split(/\s+/);

      if (parts[0] !== 'ARR') {
        continue;
      }

      const id = Number(parts[1]);
      const inputLength = Number(parts[2]);

      requests.set(id, {
        id,
        inputLength,
        receivedAt: time,
        remote: null,
        state: 'ready_p_pre',
        finished: false,
      });
    }
    // Пока просто убеждаемся, что frame прочитан.
    // В stdout нельзя писать логи! Только корректные ответы интерактору.
    // console.error({ time, events });

    reply([]);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});