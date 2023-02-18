//389. Find the Difference

var findTheDifference = function (s, t) {
  let result = 0; // 0 is the identity element of XOR
  for (let i = 0; i < s.length; i++) {
    // XOR all the characters in s
    result ^= s.charCodeAt(i); // XOR is commutative
  }
  for (let i = 0; i < t.length; i++) {
    result ^= t.charCodeAt(i);
  }
  return String.fromCharCode(result);
};
