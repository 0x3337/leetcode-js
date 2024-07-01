/**
 * @number 268
 * @title Missing Number
 * @url https://leetcode.com/problems/missing-number/
 * @difficulty easy
 */

const missingNumber = function (nums) {
  let res = nums.length;

  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }

  return res;
};
