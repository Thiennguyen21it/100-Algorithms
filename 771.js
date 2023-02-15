var numJewelsInStones = function (J, S) {
  const set = new Set(J.split("")); //split space
  let count = 0;
  lengthOfStone = S.length;
  for (let i = 0; i < lengthOfStone; i++) {
    if (set.has(S[i])) {
      count++;
    }
  }
  return count;
};
