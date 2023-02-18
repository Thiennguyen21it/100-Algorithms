// 171. Excel Sheet Column Number

var titleToNumber = function (columTitle) {
  let result = 0;
  for (let i = 0; i < columTitle.length; i++) {
    result = result * 26 + (columTitle.charCodeAt(i) - 64);
  }
  return result;
};
