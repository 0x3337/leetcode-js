/**
 * @number 2221
 * @title Find Triangular Sum of an Array
 * @url https://leetcode.com/problems/find-triangular-sum-of-an-array/
 * @difficulty medium
 */

const triangularSum = function (nums) {
  while (nums.length !== 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }

    nums.pop();
  }

  return nums[0];
};
