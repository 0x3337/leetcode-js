/**
 * @number 191
 * @title Number of 1 Bits
 * @url https://leetcode.com/problems/number-of-1-bits/
 * @difficulty easy
 */

const hammingWeight = function(n) {
  let res = 0;
  
  while (n !== 0) {
    res += n & 1;
    n >>>= 1;
  }

  return res;
};
