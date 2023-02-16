//762 . Prime Number of Set Bits in Binary Representation

var countPrimeSetBits = function (left, right) {
  let count = 0;
  for (let i = left; i <= right; i++) {
    if (isPrime(countBits(i))) count++;
  }
  return count;
};
//check if it number is prime
var isPrime = function (n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
//count the number of bits
var countBits = function (n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
};
