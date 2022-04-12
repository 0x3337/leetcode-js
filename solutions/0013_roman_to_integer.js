/**
 * @number 13
 * @title Roman to Integer
 * @url https://leetcode.com/problems/roman-to-integer/
 * @difficulty easy
 */

const romanToInt = function (s) {
  let alphabet = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let value = alphabet[s[i]];
    let nextValue = alphabet[s[i + 1]];

    res += value * (value < nextValue ? -1 : 1);
  }

  return res;
};
