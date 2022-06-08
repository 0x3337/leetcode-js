/**
 * @number 70
 * @title Climbing Stairs
 * @url https://leetcode.com/problems/climbing-stairs/
 * @difficulty easy
 */

const climbStairs = function (n) {
  let [i, j] = [1, 1];

  while (--n > 0) {
    [i, j] = [j, i + j];
  }

  return j;
};
