const highAndLow = (numbers) => {
    const numbersInt = numbers.split(' ').map((number) => {
        return Number(number);
    })
    let highest = numbersInt[0];
    let lowest = numbersInt[0];
    for (let i = 1; i < numbersInt.length; i++) {
        if (numbersInt[i] > highest) highest = numbersInt[i];
        if (numbersInt[i] < lowest) lowest = numbersInt[i];
    }
    return `${highest} ${lowest}`
};

console.log(highAndLow("1 2 3 4 5")); // return "5 1"