const shorten = (word, maxChars = 20) => {
  if (!word) return '';
  if (word.length <= 20) return word;

  const firstHalf = word.slice(0, maxChars / 2);
  const secondHalf = word.slice(word.length - maxChars / 2);

  const result = firstHalf + '...' + secondHalf;

  return result;
};

export default shorten;
