/**
 * @number 26
 * @title Remove Duplicates from Sorted Array
 * @url https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @difficulty easy
 */

const removeDuplicates = function (nums) {
  let k = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      nums[++k] = nums[i];
    }
  }

  return k + 1;
};
