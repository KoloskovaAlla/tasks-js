const wheatFromChaff = (values) => {
 let left = 0;
 let right = values.length - 1;
 while (left < right) {
    if (values[left] < 0) left++
        else if (values[right] > 0) right--
         else {
            const temp = values[left];
            values[left] = values[right];
            values[right] = temp;
         }
 }
 return values;
};

// console.log(wheatFromChaff([2,-4,6,-6])) //[-6,-4,6,2]
console.log(wheatFromChaff([2,-6,-4,1,-8,-2])) //[-2,-6,-4,-8,1,2]

    // doTest([2,-4,6,-6], [-6,-4,6,2])
    //     doTest([7,-3,-10], [-10,-3,7])
    //     doTest([7,-8,1,-2], [-2,-8,1,7])
    //     doTest([8,10,-6,-7,9], [-7,-6,10,8,9])
    //     doTest([-3,4,-10,2,-6], [-3,-6,-10,2,4])
    //     doTest([2,-6,-4,1,-8,-2], [-2,-6,-4,-8,1,2])