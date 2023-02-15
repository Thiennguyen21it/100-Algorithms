//824 . Goat latin
// const sentence = "I speak Goat Latin";
// let words = sentence.split(" ");
// console.log(words);
var toGoatLatin = function (sentence) {
  let words = sentence.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (isVowel(word[0])) {
      // check this char is vowel or not
      word += "ma"; // noi chuoi ma vao cuoi
    } else {
      // neu khong phai nguyen am thi xoa ky tu dau tien va noi vao cuoi
      word = word.slice(1) + word[0] + "ma";
    }
    // noi chuoi a vao cuoi theo so lan lap
    word += "a".repeat(i + 1);
    result.push(word);
  }
  return result.join(" ");
};
// function to check vowel
var isVowel = function (char) {
  return (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  );
};
