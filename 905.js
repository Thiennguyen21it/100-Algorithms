//905. Sort Array By Parity

var sortArrayByParity = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.unshift(nums[i]);
    } else {
      result.push(nums[i]);
    }
  }
  return result;
};
