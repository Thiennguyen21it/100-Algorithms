//500 keyboard row

var findWords = function (words) {
  const row1 = new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]);
  const row2 = new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"]);
  const row3 = new Set(["z", "x", "c", "v", "b", "n", "m"]);

  function checkWord(word) {
    const letters = word.toLowerCase().split(""); // chuyen chuoi thanh mang va chuyen thanh chu thuong

    const set = row1.has(letters[0]) //
      ? row1
      : row2.has(letters[0])
      ? row2
      : row3;
    for (let i = 1; i < letters.length; i++) {
      if (!set.has(letters[i])) {
        return false;
      }
    }
    return true;
  }

  const result = [];
  for (let word of words) {
    if (checkWord(word)) {
      result.push(word);
    }
  }
  return result;
};
