//697. Degree of an Array

var findShortestSubArray = function (nums) {
  const numCount = {};
  let maxCount = 0;
  let minLength = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numCount[num] === undefined) {
      numCount[num] = {
        count: 1,
        firstIndex: i,
        lastIndex: i,
      };
    } else {
      numCount[num].count++;
      numCount[num].lastIndex = i;
    }
    if (numCount[num].count > maxCount) {
      maxCount = numCount[num].count;
    }
  }
  for (const num in numCount) {
    if (numCount[num].count === maxCount) {
      const length = numCount[num].lastIndex - numCount[num].firstIndex + 1;
      if (length < minLength) {
        minLength = length;
      }
    }
  }
  return minLength;
};
