//671. Second Minimum Node In a Binary Tree

var findSecondMinimumValue = function (root) {
  let min = root.val;
  let secondMin = Infinity;

  const traverse = (node) => {
    if (node === null) return;
    if (node.val > min && node.val < secondMin) {
      secondMin = node.val;
    }
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);

  return secondMin === Infinity ? -1 : secondMin;
};
