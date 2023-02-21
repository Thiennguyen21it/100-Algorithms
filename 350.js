//350. Intersection of Two Arrays II

var intersect = function (nums1, nums2) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]]) {
      map[nums1[i]]++;
    } else {
      map[nums1[i]] = 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] > 0) {
      result.push(nums2[i]);
      map[nums2[i]]--;
    }
  }
  return result;
};
