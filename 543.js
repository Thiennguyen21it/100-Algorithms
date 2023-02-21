//543. Diameter of Binary Tree

var diameterOfBinaryTree = function (root) {
  let max = 0;
  function dfs(node) {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return max;
};
