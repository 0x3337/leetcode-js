/**
 * @number 35
 * @title Search Insert Position
 * @url https://leetcode.com/problems/search-insert-position/
 * @difficulty easy
 */

const searchInsert = function (nums, target) {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
