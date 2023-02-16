// 852 . Peak index in a mountaint Array

var peakIndexMountainArray = function (arr) {
  let max = Math.max(...arr);
  return arr.indexOf(max);
};
