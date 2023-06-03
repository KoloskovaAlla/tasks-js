export const addLineNumbers = (lines) => {
  let numberedLines = [];
  for (let i = 0; i < lines.length; i++) {
    let lineNumber = i + 1;
    let numberedLine = lineNumber + ": " + lines[i];
    numberedLines.push(numberedLine);
  } 
  console.log(numberedLines);
  console.log('test');
  return numberedLines;
};

addLineNumbers(['a', 'b', 'c']);