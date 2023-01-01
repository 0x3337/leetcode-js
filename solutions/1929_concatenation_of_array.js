/**
 * @number 1929
 * @title Concatenation of Array
 * @url https://leetcode.com/problems/concatenation-of-array/
 * @difficulty easy
 */

const getConcatenation = function (nums) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    res[i] = nums[i];
    res[i + nums.length] = nums[i];
  }

  return res;
};
