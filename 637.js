// 637. Average of Levels in Binary Tree

var averageOfLevels = function (root) {
  let result = []; //mang rong de luu ket qua
  let queue = [root]; // queue rong de luu cac node
  while (queue.length) {
    let sum = 0;
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift(); // lay ra phan tu dau tien cua queue
      sum += node.val; // cong gia tri cua node vao sum
      if (node.left) queue.push(node.left); // neu node co node con ben trai thi them vao queue
      if (node.right) queue.push(node.right); // neu node co node con ben phai thi them vao queue
    }
    result.push(sum / length); // tinh trung binh cong cua cac node trong queue
  }
  return result; // tra ve ket qua 1 mang cac trung binh cong cua cac node
};

// cach 2 dung de quy
var averageOfLevels = function (root) {
  let result = [];
  let queue = [root];
  let sum = 0;
  let length = queue.length;
  let node = queue.shift();
  sum += node.val;
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  result.push(sum / length);
  averageOfLevels(root);
  return result;
};
