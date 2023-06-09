export const detectPangram = (sentence) => {
  const letters = sentence.replace(/[^a-z]/g, '');
  const uniqueLetters = new Set();

  for (let i = 0; i < letters.length; i++) uniqueLetters.add(letters[i]);

  return uniqueLetters.size === 26;
}
