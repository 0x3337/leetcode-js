/**
 * @number 27
 * @title Remove Element
 * @url https://leetcode.com/problems/remove-element/
 * @difficulty easy
 */

const removeElement = function (nums, val) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i++] = nums[j];
    }
  }

  return i;
};
