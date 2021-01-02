/**
 * @number 9
 * @title Palindrome Number
 * @url https://leetcode.com/problems/palindrome-number/
 * @difficulty easy
 */

const isPalindrome = function (x) {
  return x < 0 ? false : x === reverse(x);
};

const reverse = function (x) {
  let res = 0;

  while (x) {
    let diff = x % 10;

    x = (x - diff) / 10;
    res = (res * 10) + diff;
  }

  return res;
};
