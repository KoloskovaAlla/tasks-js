const solve = (string) => {
    let lowerCount = 0;
    let upperCount = 0;
    for (let i = 0; i < string.length; i++) {
        const currentCh = string[i];
        if (currentCh === currentCh.toLowerCase()) lowerCount++;
            else upperCount++;
    };
    if (lowerCount >= upperCount) return string.toLowerCase();
        else return string.toUpperCase();
};

console.log(solve("coDe"));
console.log(solve("CODe"));
console.log(solve("coDE"));