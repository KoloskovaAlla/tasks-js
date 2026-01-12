const callDetailsRecovery = (n, calls) => {
    const sortedCalls = calls.sort((a, b) => Math.abs(a) - Math.abs(b));
    console.log(sortedCalls);
    for (index = 0; index < n; index++) {
        const isIndexEven = index % 2 === 0;
        // console.log(isIndexEven );
        let isOrderCorrect;
        if (isIndexEven) isOrderCorrect = sortedCalls[index] > 0
            else isOrderCorrect = sortedCalls[index] < 0
        if (!isOrderCorrect) return -1            

    };
    // здесь будет логика обработки, если мы вышли из цикла
    
    for (index = 0; index < n; index += 2) {
        const absBegin = Math.abs(sortedCalls[index]);
        const absEnd = Math.abs(sortedCalls[index + 1]);
        if (absBegin === absEnd) console.log('модули равны')
            else console.log('модули не равны');           
    };
    //временно
    return 5;
};


console.log(callDetailsRecovery(6, [11, 4, -6, 8, -9, -16]))

