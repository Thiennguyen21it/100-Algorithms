//520. Detect Capital

var detectCapitalUse = function (word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      count++;
    }
  }
  return (
    count === word.length ||
    count === 0 ||
    (count === 1 && word[0] === word[0].toUpperCase())
  );
};
