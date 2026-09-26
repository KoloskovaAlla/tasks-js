const fs = require('fs');

const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let pos = 0;

const t = Number(data[pos++]);

const countSchools = (n, k, arr) => {
  const countFarms = n / k;
  let numberOfFarm = 0;
  let numberOfFileds = 0;
  let payedFields = 0;
  for (let farmsIdex = 0; farmsIdex < countFarms; farmsIdex++) {
    // console.log(`считаем для фермы ${numberOfFarm}`)


    let johnFields = []
    for (let fieldIndexInFarm = 0; fieldIndexInFarm < k; fieldIndexInFarm++) {
      johnFields.push(arr[numberOfFileds])

      numberOfFileds++
    }
    // let isPayed = 1;
    let isPayed = johnFields.includes(0) ? 0 : 1;
    if (isPayed === 1) payedFields++

    numberOfFarm++

  }
  // console.log('---------')

  return payedFields;
};

for (let i = 0; i < t; i++) {
  const n = Number(data[pos++]);
  const k = Number(data[pos++]);
  const s = data[pos++];

  const arr = [...s].map(Number);


  const res = countSchools(n, k, arr);
  console.log(res)
}





