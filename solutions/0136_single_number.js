/**
 * @number 136
 * @title Single Number
 * @url https://leetcode.com/problems/single-number/
 * @difficulty easy
 */

const singleNumber = function (nums) {
  let res = 0;

  for (const n of nums) {
    res ^= n;
  }

  return res;
};
