const phoneNumber = (length, phone) => {
    const lengthNumber = Number(length);
    console.log(lengthNumber);
    console.log(lengthNumber % 11 !== 0)
    if (lengthNumber % 11 !== 0) {
        return 0;
    }
    
       // Проверяем каждый блок по 11 цифр
    for (let i = 0; i < lengthNumber; i += 11) {
        const block = phone.substring(i, i + 11);
        
        // Проверяем, что блок начинается с "79"
        if (!block.startsWith("79")) {
            return 0;
        }
    }
    
    return 1; // если все блоки корректны
};

console.log(phoneNumber('22', '7916123432179999999999'));