const detectPangram = (sentence) => {
  const letters = sentence.replace(/[^a-z]/g, '');
  const uniqueLetters = new Set();

  for (let i = 0; i < letters.length; i++) uniqueLetters.add(letters[i]);  
  console.log(uniqueLetters.size === 26)
  return uniqueLetters.size === 26;
}

detectPangram('The quick brown fox jumps over the lazy dog')
detectPangram('The quick bee jumps over the lazy dog')
