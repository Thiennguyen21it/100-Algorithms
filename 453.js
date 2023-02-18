//453 . Minimum Moves to Equal Array Elements

var minMoves = function (nums) {
  const minNum = Math.min(...nums);
  let moves = 0;
  for (let i = 0; i < nums.length; i++) {
    moves += nums[i] - minNum;
  }
  return moves;
};
