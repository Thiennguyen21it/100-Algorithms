// 747. Largest Number At Least Twice of Others

var dominantIndex = function (nums) {
  let max = Math.max(...nums);
  let maxIndex = nums.indexOf(max);
  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex && max < 2 * nums[i]) {
      return -1;
    }
  }
  return maxIndex;
};
