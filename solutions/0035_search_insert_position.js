/**
 * @number 35
 * @title Search Insert Position
 * @url https://leetcode.com/problems/search-insert-position/
 * @difficulty easy
 */

const searchInsert = function (nums, target) {
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
};
