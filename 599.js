//599. Minimum Index Sum of Two Lists
function findRestaurant(list1, list2) {
  let indexSum = Infinity;
  let result = [];

  let map = {};
  for (let i = 0; i < list1.length; i++) {
    map[list1[i]] = i;
  }

  for (let i = 0; i < list2.length; i++) {
    if (list2[i] in map) {
      let sum = i + map[list2[i]];
      if (sum < indexSum) {
        indexSum = sum;
        result = [list2[i]];
      } else if (sum === indexSum) {
        result.push(list2[i]);
      }
    }
  }

  return result;
}
