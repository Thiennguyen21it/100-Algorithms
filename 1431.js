//kid with the greatest number of candies

var kidsWithCandies = function (candies, extraCandies) {
  //tim so keo lon nhat trong mang
  let maxCandies = Math.max(...candies);
  //duyet mang
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    //so sanh so keo lon nhat voi so keo cua tung con
    if (candies[i] + extraCandies >= maxCandies) {
      result[i] = true;
    } else {
      result[i] = false;
    }
  }
  return result;
};
