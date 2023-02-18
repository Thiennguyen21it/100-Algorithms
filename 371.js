//371 . Sum of Two Integers

var getSum = function (a, b) {
  let sum = a ^ b;
  let carry = (a & b) << 1;
  if (carry) {
    return getSum(sum, carry);
  } else {
    return sum;
  }
};

// if (b == 0) return a;
// let sum = a ^ b;
// let carry = (a & b) << 1;
// return getSum(sum, carry);
