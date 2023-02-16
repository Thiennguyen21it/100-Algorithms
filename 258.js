//258. Add Digits

var addDigits = function (num) {
  // neu num < 10 thi tra ve num
  if (num < 10) return num;
  // neu num >= 10 thi tinh tong cac chu so cua num
  let sumDigit = 0;

  while (num > 0) {
    sumDigit += num % 10;
    num = Math.floor(num / 10);
  }
  // goi de quy de tinh tong cac chu so cua sumDigit
  return addDigits(sumDigit);
};
