// 728. Self Dividing Numbers

var selfDividingNumbers = function (left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i);
    }
  }
  return result;
};

var isSelfDividing = function (num) {
  let temp = num;
  while (temp != 0) {
    let digit = temp % 10;
    if (digit == 0 || num % digit != 0) {
      // 0 is not a valid digit
      return false;
    }
    temp = Math.floor(temp / 10);
  }
  return true;
};
