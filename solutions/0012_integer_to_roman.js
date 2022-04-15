/**
 * @number 12
 * @title Integer to Roman
 * @url https://leetcode.com/problems/integer-to-roman/
 * @difficulty medium
 */

const intToRoman = function (num) {
  let alphabet = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
  };

  let res = '';

  for (let key in alphabet) {
    while (num >= alphabet[key]) {
      num -= alphabet[key];
      res += key;
    }
  }

  return res;
};
