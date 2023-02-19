//404 . Sum Of Left Leaves

var sumOfLeftLeaves = function (root) {
  let sum = 0; // khoi tao sum = 0
  if (!root) return 0; // neu khong co root thi return 0
  if (root.left) {
    // neu root co left
    if (!root.left.left && !root.left.right) {
      // neu left khong co left va khong co right thi cong left vao sum
      sum += root.left.val;
    } else {
      // neu left co left hoac right thi cong left vao sum
      sum += sumOfLeftLeaves(root.left);
    }
  }
  sum += sumOfLeftLeaves(root.right); // cong right vao sum
  return sum;
};
