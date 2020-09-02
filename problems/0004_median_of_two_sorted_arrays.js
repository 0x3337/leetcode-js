/**
 * @number 4
 * @title Median of Two Sorted Arrays
 * @url https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @difficulty hard
 */

const findMedianSortedArrays = function (nums1, nums2) {
  let arr = [];
  let arrSize = nums1.length + nums2.length;

  let [idx1, idx2] = [0, 0];
  let median = 0;

  for (let i = 0; i < arrSize; i++) {
    if (idx1 < nums1.length && idx2 < nums2.length) {
      if (nums1[idx1] < nums2[idx2]) {
        arr[i] = nums1[idx1++];
      } else {
        arr[i] = nums2[idx2++];
      }
    } else if (idx1 < nums1.length && idx2 + 1 < nums2.length) {
      if (nums1[idx1] < nums2[idx2 + 1]) {
        arr[i] = nums1[idx1++];
      } else {
        arr[i] = nums2[idx2++];
      }
    } else if (idx1 + 1 < nums1.length && idx2 < nums2.length) {
      if (nums1[idx1 + 1] < nums2[idx2]) {
        arr[i] = nums1[idx1++];
      } else {
        arr[i] = nums2[idx2++];
      }
    } else if (idx1 < nums1.length) {
      arr[i] = nums1[idx1++];
    } else if (idx2 < nums2.length) {
      arr[i] = nums2[idx2++];
    }
  }

  let mid = (arrSize / 2) | 0;
  if (arrSize % 2 == 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
};