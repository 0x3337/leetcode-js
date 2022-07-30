/**
 * @number 1480
 * @title Running Sum of 1d Array
 * @url https://leetcode.com/problems/running-sum-of-1d-array/
 * @difficulty easy
 */

const runningSum = function (nums) {
  let res = [];

  for (let num of nums) {
    let sum = res[res.length - 1] ?? 0;

    res.push(sum + num);
  }

  return res;
};
