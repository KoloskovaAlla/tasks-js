const highlight = (searchFor) => {
  console.log('test');
  const searchTerm = searchFor.toLowerCase();
  const elements = document.querySelectorAll('*');

  elements.forEach(element => {
    if (element.nodeType === Node.TEXT_NODE) {
      const words = element.nodeValue.split(/\s+/);

      const highlightedWords = words.map(word => {
        if (word.toLowerCase().includes(searchTerm)) {
          return `<span class="search-results">${word}</span>`;
        } else {
          return word;
        }
      });

      const newTextNode = document.createElement('span');
      newTextNode.innerHTML = highlightedWords.join(' ');
      element.parentNode.replaceChild(newTextNode, element);
    }
  });
};

