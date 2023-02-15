// Reverse Words in a String III

var reverseWords = function (s) {
  let arr = s.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].split("").reverse().join(""));
  }
  return result.join(" ");
};
