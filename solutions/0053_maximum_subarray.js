/**
 * @number 53
 * @title Maximum Subarray
 * @url https://leetcode.com/problems/maximum-subarray/
 * @difficulty medium
 */

const maxSubArray = function (nums) {
  let res = -10000;
  let sum = 0;

  for (let num of nums) {
    sum += num;
    res = Math.max(sum, res);
    sum = Math.max(sum, 0);
  }

  return res;
};
