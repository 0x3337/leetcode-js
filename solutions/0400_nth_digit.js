/**
 * @number 400
 * @title Nth Digit
 * @url https://leetcode.com/problems/nth-digit/
 * @difficulty medium
 */

const findNthDigit = function (n) {
  let base = 1;
  let exponent = 1;
  let subtrahend = 9;

  while (n > subtrahend) {
    n -= subtrahend;

    base *= 10;
    subtrahend = 9 * base * ++exponent;
  }

  n--;
  let index = n % exponent;
  let number = base + Math.floor(n / exponent);

  return +(`${number}`[index]);
};
