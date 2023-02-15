//476. Number Complement
var findComplement = function (num) {
  let temp = num; // 5
  let mask = 1; // 1
  while (temp != 0) {
    // 5 != 0
    mask = mask << 1; // 2
    temp = temp >> 1; // 2
  }
  return num ^ (mask - 1); // 5 ^ (2 - 1) = 5 ^ 1 = 4
};
