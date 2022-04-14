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
  let isNegative = false;

  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') break;
    index++;
  }

  for (let i = index; i < s.length; i++) {
    if (i === index && (s[i] === '-' || s[i] === '+')) {
      isNegative = (s[i] === '-');
    } else if (s[i] >= '0' && s[i] <= '9') {
      res *= 10;

      if (isNegative) {
        res -= s.charCodeAt(i) - 48;
      } else {
        res += s.charCodeAt(i) - 48;
      }

      if (res < MIN_INTEGER) return MIN_INTEGER;
      if (res > MAX_INTEGER) return MAX_INTEGER;
    } else {
      break;
    }
  }

  return res;
};
