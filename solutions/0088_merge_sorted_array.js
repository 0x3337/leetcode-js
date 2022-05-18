/**
 * @number 88
 * @title Merge Sorted Array
 * @url https://leetcode.com/problems/merge-sorted-array/
 * @difficulty easy
 */

const merge = function (nums1, m, nums2, n) {
  let last = m + n;

  while (last > 0) {
    if (m > 0 && nums1[m - 1] > nums2[n - 1]) {
      nums1[last - 1] = nums1[m - 1];
      m--;
    } else if (n > 0) {
      nums1[last - 1] = nums2[n - 1];
      n--;
    }

    last--;
  }
};
