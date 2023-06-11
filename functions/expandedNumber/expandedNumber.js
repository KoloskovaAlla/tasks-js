const expandedNumber = (number) => {
 const numberArray = number.toString().split('');
 let expandedForm = [];
 for (let index = 0; index < numberArray.length; index++) {
  if (numberArray[index] !== '0') {
    let expandedNum = numberArray[index] + '0'.repeat(numberArray.length - index - 1);
    expandedForm.push(expandedNum);
  } 
 };
 console.log(expandedForm.join(' + '));
 return expandedForm.join(' + ');
};

expandedNumber(421);
expandedNumber(70304);