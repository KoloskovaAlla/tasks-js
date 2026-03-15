let letters = ['a', 'b', 'c', 'd', 'e']
let allowedLetters = []
Array.prototype.each = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) break;
    }
};
letters.each(function(letter, index){
  // break out of the loop if we reached a letter with the value 'd'
  if(letter == 'd') {
    return true;
  }
  allowedLetters.push(letter);   
})

// allowedLetters should equal ['a', 'b', 'c']