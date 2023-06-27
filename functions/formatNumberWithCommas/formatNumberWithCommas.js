export const formatNumberWithCommas = (number) => { 
  let str = String(number); // Convert the number to a string 
  let formattedStr = str.replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
 
  return formattedStr; 
} 

console.log(formatNumberWithCommas(6785454538537584));