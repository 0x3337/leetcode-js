/**
 * @number 283
 * @title Move Zeroes
 * @url https://leetcode.com/problems/move-zeroes/
 * @difficulty easy
 */

const moveZeroes = function (nums) {
  let [left, right] = [0, 0];

  while (right < nums.length) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    
    right++;
  }
};
