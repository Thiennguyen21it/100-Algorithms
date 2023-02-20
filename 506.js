//506. Relative Ranks

var findRelativeRanks = function (score) {
  const rankMap = {};
  const sortedNums = score.slice().sort((a, b) => b - a);
  for (let i = 0; i < sortedNums.length; i++) {
    const num = sortedNums[i];
    if (i === 0) {
      rankMap[num] = "Gold Medal";
    } else if (i === 1) {
      rankMap[num] = "Silver Medal";
    } else if (i === 2) {
      rankMap[num] = "Bronze Medal";
    } else {
      rankMap[num] = (i + 1).toString();
    }
  }
  const result = [];
  for (let i = 0; i < score.length; i++) {
    result.push(rankMap[score[i]]);
  }
  return result;
};
