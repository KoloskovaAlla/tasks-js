const isDivisible = (n, ...args) => {
    let result = true;
    for (let i = 0; i < args.length; i++) {   
        if (n % args[i] !== 0 ) result = false;    
        if (!result) break;
    }
    return result;
}

// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

// console.log(isDivisible([6,1,3]))
console.log(isDivisible(12, 7))
// console.log(isDivisible([3, 3, 4]))
// console.log(isDivisible([12, 3, 4]))
// console.log(isDivisible([8, 3, 4, 2, 5]))
// console.log(isDivisible([100,5,4,10,25,20]))