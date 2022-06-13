/**
 * @number 231
 * @title Power of Two
 * @url https://leetcode.com/problems/power-of-two/
 * @difficulty easy
 */

const isPowerOfTwo = function (n) {
  if (n <= 0) return false;

  return !(n & (n - 1));
};
