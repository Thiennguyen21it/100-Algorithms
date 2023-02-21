//594. Longest Harmonious Subsequence

var findLHS = function (nums) {
  let map = {};
  let max = 0;
  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }
  for (let key in map) {
    if (map[Number(key) + 1]) {
      max = Math.max(max, map[key] + map[Number(key) + 1]);
    }
  }
  return max;
};
