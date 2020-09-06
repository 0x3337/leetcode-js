/**
 * @number 50
 * @title Pow(x, n)
 * @url https://leetcode.com/problems/powx-n/
 * @difficulty medium
 */

const myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1.0 / myPow(x, -n);

  let half = myPow(x, (n / 2) | 0);

  if (n % 2 === 0) return half * half;
  if (n % 2 === 1) return x * half * half;
};
