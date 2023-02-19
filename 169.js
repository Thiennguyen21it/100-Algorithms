//169. Majority Element

var majorityElement = function (nums) {
  nums.sort(); // thuat toan sort de sap xep mang theo thu tu tang dan
  return nums[Math.floor(nums.length / 2)]; // tra ve phan tu o giua cua mang
};
