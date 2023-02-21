//108. Convert Sorted Array to Binary Search Tree

var sortedArrayToBST = function (nums) {
  return helper(nums, 0, nums.length - 1);
};

const helper = (nums, left, right) => {
  if (left > right) return null;
  let mid = Math.floor((left + right) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = helper(nums, left, mid - 1);
  root.right = helper(nums, mid + 1, right);
  return root;
};
