/**
 * @number 8
 * @title String to Integer (atoi)
 * @url https://leetcode.com/problems/string-to-integer-atoi/
 * @difficulty medium
 */

const MIN_INTEGER = -(2 ** 31);
const MAX_INTEGER = 2 ** 31 - 1;

const myAtoi = function (s) {
  let res = 0;
  let negative = 1;

  let i = 0;
  while (s[i] === ' ') {
    i++;
  }

  if (i < s.length && (s[i] === '-' || s[i] === '+')) {
    negative = (s[i] === '-' ? -1 : 1);
    i++;
  }

  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    res *= 10;
    res += (s.charCodeAt(i) - 48) * negative;
    i++;

    if (res < MIN_INTEGER) return MIN_INTEGER;
    if (res > MAX_INTEGER) return MAX_INTEGER;
  }

  return res;
};
