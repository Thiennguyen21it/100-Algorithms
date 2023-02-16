//884. Uncommon Words from Two Sentences

var uncommonFromSentences = function (s1, s2) {
  const words = [...s1.split(" "), ...s2.split(" ")];
  const wordCount = {};

  // Đếm số lần xuất hiện của các từ
  for (let word of words) {
    if (word in wordCount) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  // Lọc các từ chỉ xuất hiện một lần trong hai câu
  const uncommonWords = [];
  for (let word in wordCount) {
    if (wordCount[word] === 1) {
      uncommonWords.push(word);
    }
  }

  return uncommonWords;
};
