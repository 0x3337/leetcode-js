/**
 * @number 704
 * @title Binary Search
 * @url https://leetcode.com/problems/binary-search/
 * @difficulty easy
 */

const search = function (nums, target) {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};
