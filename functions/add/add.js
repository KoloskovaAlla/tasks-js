const add = (n) => {   
    return (a) => {return a + n};
};

var addOne = add(1);
console.log(addOne(3)); // 4