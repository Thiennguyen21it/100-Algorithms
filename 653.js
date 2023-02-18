//653. Two Sum IV - Input is a BST

var findTarget = function (root, k) {
  let set = new Set();
  return helper(root, k, set);
};

var helper = function (root, k, set) {
  if (root == null) return false;
  if (set.has(k - root.val)) return true;
  set.add(root.val);
  return helper(root.left, k, set) || helper(root.right, k, set);
};
