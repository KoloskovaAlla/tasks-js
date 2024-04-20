const readline = require('readline');

const findMaxFives = (n, grades) => {
  let maxFives = 0;  
  for (let right = 6; right < n; right++) { 
    let currentFives = 0;
    
    for (let currentGrade = right - 6; currentGrade <= right; currentGrade++ ) {     
      if (grades[currentGrade] === 2 || grades[currentGrade] === 3) {      
        currentFives = 0;
        break;
      }     
      if (grades[currentGrade] === 5) {     
        currentFives++;
      }   
    }   
    if (currentFives > maxFives) maxFives = currentFives;   
}


    if (maxFives === 0) {
        return -1;
    } else {
        return maxFives;
    }      
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

reader.on('line', (line) => {
    inputLines.push(line);

    if (inputLines.length === 2) {
        n = parseInt(inputLines[0]);
        grades = inputLines[1].split(' ').map(Number);
        console.log(findMaxFives(n, grades));
        reader.close();
    }
});
