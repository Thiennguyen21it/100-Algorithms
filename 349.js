//349. Intersection of Two Arrays

var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const res = [];
  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      res.push(nums2[i]);
      set1.delete(nums2[i]);
    }
  }
  return res;
};
