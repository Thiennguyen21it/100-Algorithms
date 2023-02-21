//202. Happy Number

var isHappy = function (n) {
  let sum = 0;
  let result = n;
  while (sum !== 1) {
    sum = 0;
    while (result > 0) {
      sum += (result % 10) ** 2;
      result = Math.floor(result / 10);
    }
    if (sum === 4) {
      return false;
    }
    result = sum;
  }
  return true;
};
