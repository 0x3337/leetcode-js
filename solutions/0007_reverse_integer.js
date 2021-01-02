/**
 * @number 7
 * @title Reverse Integer
 * @url https://leetcode.com/problems/reverse-integer/
 * @difficulty easy
 */

const reverse = function (x) {
  let res = 0;

  while (x) {
    let diff = x % 10;
    x = (x - diff) / 10;

    res *= 10;
    res += diff;
  }

  return Math.abs(res) > 0x7FFFFFFF ? 0 : res;
};
