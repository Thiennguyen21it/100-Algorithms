//401. Binary Watch

var readBinaryWatch = function (turnedOn) {
  let result = [];
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (count(i) + count(j) === turnedOn) {
        result.push(`${i}:${j < 10 ? "0" + j : j}`);
      }
    }
  }
  return result;

  function count(num) {
    let count = 0;
    while (num > 0) {
      num = num & (num - 1);
      count++;
    }
    return count;
  }
};
