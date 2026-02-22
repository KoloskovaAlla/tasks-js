const dominator = (arr) => {
    let counts = {};
    let dominator


    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]] === undefined) {
            counts[arr[i]] = 1;
            console.log(arr[i]);
            console.log(counts[arr[i]]);
            console.log('------------');
        }
            else {
                counts[arr[i]] += 1;
                if (counts[arr[i]] > arr.length / 2) dominator = arr[i];
                console.log(arr[i]);
                console.log(counts[arr[i]]);
                console.log('------------');
            }
        };
    if (!dominator) return -1;
    return dominator;

   
};

console.log(dominator([3,4,3,2,3,1,3,3]));