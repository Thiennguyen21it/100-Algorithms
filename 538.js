// 538. Convert BST to Greater Tree

var convertBST = function (root) {
  let sum = 0;
  const convert = function (node) {
    if (!node) {
      return;
    }
    convert(node.right);
    sum += node.val;
    node.val = sum;
    convert(node.left);
  };
  convert(root);
  return root;
};
