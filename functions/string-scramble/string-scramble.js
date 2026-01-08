const scramble = (str, arr) => {
    let resultArray = [];
    for (let i = 0; i < str.length; i++) resultArray[arr[i]] = str[i];
    
    return resultArray.join('');  
};

console.log(scramble("abcd", [0, 3, 1, 2]));