/**
 * @number 53
 * @title Maximum Subarray
 * @url https://leetcode.com/problems/maximum-subarray/
 * @difficulty easy
 */

const maxSubArray = function (nums) {
  let res = -10000;
  let sum = 0;

  for (let num of nums) {
    sum += num;
    if (sum > res) res = sum;
    if (sum < 0) sum = 0;
  }

  return res;
};
