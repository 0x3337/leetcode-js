/**
 * @number 17
 * @title Letter Combinations of a Phone Number
 * @url https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @difficulty medium
 */

const KEYPAD = {
  '2': ['a','b','c'],
  '3': ['d','e','f'],
  '4': ['g','h','i'],
  '5': ['j','k','l'],
  '6': ['m','n','o'],
  '7': ['p','q','r','s'],
  '8': ['t','u','v'],
  '9': ['w','x','y','z'],
};

const letterCombinations = function (digits) {
  let res = [];
  let n = 0;

  for (let i = 0; n === 0; i++) {
    n = i;

    for (let digit of digits) {
      let letters = KEYPAD[digit];

      let j = n % letters.length;
      n = Math.floor(n / letters.length);

      res[i] = (res[i] || '') + letters[j];
    }
  }

  res.pop();

  return res;
};
