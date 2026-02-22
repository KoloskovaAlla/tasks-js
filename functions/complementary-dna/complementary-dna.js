const dnaStrand = (dna) => {
    const map = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    };

    let newDNA = '';
    for (char of dna) {
        const replacement = map[char];
        newDNA += replacement;
    };

  return newDNA;
};

console.log(dnaStrand('AAAA'))
// console.log(dnaStrand('TTTT'))

// assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is")
// assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
// assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is")