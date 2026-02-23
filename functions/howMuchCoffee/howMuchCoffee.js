const howMuchCoffee = (events) => {
    let counter = 0;
    const valid = ['cw', 'dog', 'cat', 'movie'];

    for (const event of events) {
        if (valid.includes(event.toLowerCase())) {
            if (event === event.toLowerCase()) counter++;    
                else counter+=2;   
        };     
    };
    if (counter > 3) return 'You need extra sleep';
    return counter; 
};

console.log(howMuchCoffee([]))
console.log(howMuchCoffee(['cw']))
console.log(howMuchCoffee(['CW']))
console.log(howMuchCoffee(['cw','CAT']))
console.log(howMuchCoffee(['cw','CAT','DOG']))