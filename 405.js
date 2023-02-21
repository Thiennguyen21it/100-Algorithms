//405. Convert a Number to Hexadecimal

var toHex = function (num) {
  if (num === 0) return "0"; // special case

  const hexDigits = "0123456789abcdef"; // hexadecimal digits

  let hex = "";
  let count = 0; // keep track of the number of digits processed

  while (num !== 0 && count < 8) {
    // process up to 8 digits
    hex = hexDigits[num & 15] + hex; // get the least significant 4 bits and append to the result
    num >>>= 4; // shift right by 4 bits
    count++;
  }

  return hex;
};
