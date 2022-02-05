/**
 * @number 485
 * @title Max Consecutive Ones
 * @url https://leetcode.com/problems/max-consecutive-ones/
 * @difficulty easy
 */

const findMaxConsecutiveOnes = function (nums) {
  let res = 0;
  let count = 0;

  for (let num of nums) {
    count += num;
    if (count > res) res = count;
    if (num === 0) count = 0;
  }

  return res;
};
