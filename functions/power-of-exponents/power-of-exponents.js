const power = (base, exponent) => {
    let result;
    if (exponent > 0) {  
        result = base;   
        for (let i = 0; i < exponent - 1; i++) {
            result*=base;
        }
    }
    if (exponent < 0) {    
        let resultDenominator = base;   
        for (let i = 0; i < -1*exponent - 1; i++) {            
            resultDenominator*=base;
        }
        result = 1 / resultDenominator;
    }
    if (exponent === 0) return 1;
    return result;
}

// console.log(power(2, 3))
// console.log(power(5, 2))
console.log(power(4, -2))