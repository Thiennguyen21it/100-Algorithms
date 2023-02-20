//530. Minimum Absolute Difference in BST

var getMinimumDifference = function (root) {
  //khoi tao min bang gia tri lon nhat
  let min = Number.MAX_VALUE;
  //khoi tao prev bang null
  let prev = null;
  //tao ham traverse
  const traverse = (node) => {
    //neu node bang null thi return ve null
    if (node === null) return null;
    //neu node khong bang null thi goi lai ham traverse
    traverse(node.left); // goi lai ham traverse voi node.left
    //neu prev khong bang null thi min = min va node.val - prev
    if (prev !== null) {
      min = Math.min(min, Math.abs(node.val - prev));
    }
    prev = node.val;
    traverse(node.right); // goi lai ham traverse voi node.right
  };
  traverse(root);
  return min;
};
