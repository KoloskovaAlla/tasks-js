function restoreTheBankNumber(number) {
    const variations = ['0', '1', '2', '-'];

    const isTratbank = (num) => {
        const blocks = num.split("-");
        return blocks.every((block, index) =>
            (index === 0 || (block.length >= 3 && block.length <= 7)) &&
            (index === blocks.length - 1 || !block.startsWith("0")) &&
            block.indexOf("1") === block.lastIndexOf("1") &&
            /^[0-2]+$/.test(block) &&
            !block.includes("00") &&
            !block.includes("22")
        );
    };

const isOmegabank = (num) => {
    const blocks = num.split("-");
    return (
        blocks.some((block) => block.length === 5 || block.length === 7) && // есть как минимум один блок длины 5 или 7
        blocks.some((block) => parseInt(block) < 20000) && // есть блок, значение которого строго меньше 20000
        blocks.length >= 2 && // как минимум два блока
        blocks[1].length === 6 && // второй с начала блок длины 6
        !blocks.slice(1).some((block) => /(00|22)/.test(block)) // в блоках 0 и 2 не идут два раза подряд
    );
};

    for (let i = 0; i < variations.length; i++) {
        let tempNumber = number.replace('.', variations[i]);
        if (isTratbank(tempNumber)) {
          // console.log(tempNumber)
          return tempNumber}
          ;
          if (isOmegabank(tempNumber)) {
            
          // console.log(tempNumber)
          return tempNumber;
        }
       
    }
}
// restoreTheBankNumber('111111-.11111-2102102');
module.exports = restoreTheBankNumber;