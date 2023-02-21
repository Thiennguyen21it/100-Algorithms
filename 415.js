//415 . Add Strings

var addString = function (num1, num2) {
  let n1 = num1.length;
  let n2 = num2.length;
  if (n1 < n2) {
    return addStrings(num2, num1);
  }
  num2 = "0".repeat(n1 - n2) + num2;
  let carry = 0;
  let res = "";
  for (let i = n1 - 1; i >= 0; i--) {
    let s = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    carry = Math.floor(s / 10);
    res = (s % 10) + res;
  }
  if (carry) {
    res = "1" + res;
  }
  return res;
};
