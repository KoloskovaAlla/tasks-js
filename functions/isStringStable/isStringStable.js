
function isStable(s) {
  const uniqueLetters = [...new Set(s)];
  
  if (uniqueLetters.length > 10) {
    return false;
  }
  
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  function* permutations(arr, size) {
    if (size === 1) {
      for (let val of arr) {
        yield [val];
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        const rest = arr.slice(0, i).concat(arr.slice(i + 1));
        for (let perm of permutations(rest, size - 1)) {
          yield [val, ...perm];
        }
      }
    }
  }

    console.log("Все перестановки:");
    for (let perm of permutations([3], 1)) {
        console.log(perm);
    }
    console.log('test')
  
  const remainders = new Set();
  
  for (let perm of permutations(digits, uniqueLetters.length)) {
    const mapping = {};
    for (let i = 0; i < uniqueLetters.length; i++) {
      mapping[uniqueLetters[i]] = perm[i];
    }
    
    if (mapping[s[0]] === 0) {
      continue;
    }
    
    // Вычисляем сумму цифр
    let digitSum = 0;
    for (let char of s) {
      digitSum += mapping[char];
    }
    
    // Вычисляем остаток от деления на 9
    const remainder = digitSum % 9;
    remainders.add(remainder);
  }
  
  return remainders.size === 1;
}

function main(s) {         
    let result = isStable(s) ? '1' : '0';
    console.log(result)   
    
}

main("MTC")
// main("MTC")

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";
// process.stdin.on("data", function (input) {
//     stdin_input += input;
// });
// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function isStable(s) {
//   const uniqueLetters = [...new Set(s)];
  
//   if (uniqueLetters.length > 10) {
//     return false;
//   }
  
//   const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
//   function* permutations(arr, size) {
//     if (size === 1) {
//       for (let val of arr) {
//         yield [val];
//       }
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         const val = arr[i];
//         const rest = arr.slice(0, i).concat(arr.slice(i + 1));
//         for (let perm of permutations(rest, size - 1)) {
//           yield [val, ...perm];
//         }
//       }
//     }
//   }
  
//   const remainders = new Set();
  
//   for (let perm of permutations(digits, uniqueLetters.length)) {
//     const mapping = {};
//     for (let i = 0; i < uniqueLetters.length; i++) {
//       mapping[uniqueLetters[i]] = perm[i];
//     }
    
//     if (mapping[s[0]] === 0) {
//       continue;
//     }
    
//     // Вычисляем сумму цифр
//     let digitSum = 0;
//     for (let char of s) {
//       digitSum += mapping[char];
//     }
    
//     // Вычисляем остаток от деления на 9
//     const remainder = digitSum % 9;
//     remainders.add(remainder);
//   }
  
//   return remainders.size === 1;
// }

// function main(input) {
//     const lines = input.trim().split('\n');
//     const t = parseInt(lines[0]);
    
//     let result = [];
//     for (let i = 1; i <= t; i++) {
//       const s = lines[i].trim();
//       result.push(isStable(s) ? '1' : '0');
//     }
    
//     process.stdout.write(result.join('\n') + '\n');
// }

