function pattern(n) {
   // Happy Coding ^_^
 if (n <0 || n===0) return "";
 let result = [];

 for (let rowNumber = 1; rowNumber < n + 1; rowNumber++ ) {
    let row = rowNumber.toString();
    for (position = rowNumber + 1; position < n + 1; position++) {
        row += position;
    }
   for (position = 1; position < rowNumber; position++) {
      row += position;
   }    
   
   result.push(row)    
 }
 return result.join('\n')

}

console.log(pattern(11))