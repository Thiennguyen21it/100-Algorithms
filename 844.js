// 844. Backspace String Compare
var backspaceCompare = function (S, T) {
  function buildString(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#") {
        result.pop();
      } else {
        result.push(str[i]);
      }
    }
    return result.join("");
  }
  return buildString(S) === buildString(T);
};
