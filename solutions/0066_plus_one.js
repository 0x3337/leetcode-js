/**
 * @number 66
 * @title Plus One
 * @url https://leetcode.com/problems/plus-one/
 * @difficulty easy
 */

const plusOne = function (digits) {
  let res = [];
  let carry = 1;

  while (carry !== 0 || digits.length > 0) {
    let n = (digits.pop() || 0) + carry;
    carry = Math.floor(n / 10);
    res.unshift(n % 10);
  }

  return res;
};
