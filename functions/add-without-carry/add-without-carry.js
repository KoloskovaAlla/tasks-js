const add = (num1, num2) => {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    const length1 = strNum1.length;
    const length2 = strNum2.length;
    const maxLength = length1 > length2 || length1 === length2 ? length1 : length2;
    let result = '';
    for (let i = 0; i < maxLength; i++) {
        const currentIndex1 = length1 - i - 1;
        const currentIndex2 = length2 - i - 1;

        const num1 = currentIndex1 >= 0 ? Number(strNum1[currentIndex1]) : 0;
        const num2 = currentIndex2 >= 0 ? Number(strNum2[currentIndex2]) : 0;
        
        const sum = num1 + num2;
        result = sum + result;        

    }
    return Number(result);
};


console.log(add(16, 18));
console.log(add(26, 39));
console.log(add(122, 81));
// addWithoutCarry(1653454354353, 134533545358);