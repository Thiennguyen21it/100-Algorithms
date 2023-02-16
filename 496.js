//496 . Next Greater Element I

var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    // duyet mang nums1
    let index = nums2.indexOf(nums1[i]); // tim vi tri cua phan tu trong mang nums2
    let j = index + 1; // tim phan tu tiep theo
    while (j < nums2.length) {
      // duyet mang nums2
      if (nums2[j] > nums1[i]) {
        // neu phan tu tiep theo lon hon phan tu trong mang nums1
        result.push(nums2[j]);
        break;
      }
      j++;
    }
    if (j == nums2.length) {
      result.push(-1);
    }
  }
  return result;
};
