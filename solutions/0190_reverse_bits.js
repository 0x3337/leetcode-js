/**
 * @number 190
 * @title Reverse Bits
 * @url https://leetcode.com/problems/reverse-bits/
 * @difficulty easy
 */

const reverseBits = function (n) {
  let res = 0;

  for (let i = 0; i < 32; i++) {
    res <<= 1;
    res |= (n >> i) & 1;
  }

  return res >>> 0;
};
