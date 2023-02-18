//606. Construct String from Binary Tree

var tree2str = function (root) {
  if (root == null) return "";
  if (root.left == null && root.right == null) return root.val + "";
  if (root.right == null) return root.val + "(" + tree2str(root.left) + ")";
  return (
    root.val +
    "(" +
    tree2str(root.left) +
    ")" +
    "(" +
    tree2str(root.right) +
    ")"
  );
};
