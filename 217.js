//217 . Contains Duplicate

var containsDuplicate = function (nums) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numMap[num] === undefined) {
      numMap[num] = 1;
    } else {
      return true;
    }
  }
  return false;
};
