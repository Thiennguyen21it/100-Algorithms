//107. Binary Tree Level Order Traversal II

var levelOrderBottom = function (root) {
  let result = [];
  let queue = [root];
  while (queue.length) {
    let level = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (level.length) result.unshift(level);
  }
  return result;
};
