//563. Binary Tree Tilt

var findTilt = function (root) {
  let sum = 0;
  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    sum += Math.abs(left - right);
    return left + right + node.val;
  };
  dfs(root);
  return sum;
};
