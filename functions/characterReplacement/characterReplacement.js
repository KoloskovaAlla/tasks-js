const characterReplacement = (array, letter1, letter2) => {
    for (let wordIndex = 0; wordIndex < array.length; wordIndex++) {
       return array.map(word => word.replaceAll(letter1, letter2));
    };
    return array;
};

// const array = ['test', 'string', 'example'];
// const letter1 = 't';
// const letter2 = 'd';
// const array = ['learn', 'clojure', 'be', 'happy'];
// const letter1 = 'l';
// const letter2 = 'L';
const array = ['foo', 'bar', 'frontend'];
const letter1 = 'z';
const letter2 = 'Y';

console.log(characterReplacement(array, letter1, letter2));