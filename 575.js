//575 Distribute Candies

var distributeCandies = function (candyType) {
  // tao set de dem so loai candy
  const set = new Set(candyType);
  // lay nua so keo de an
  const half = candyType.length / 2;
  if (set.size >= half) {
    return half;
  } else {
    return set.size;
  }
};
