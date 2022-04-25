/**
 * @number 58
 * @title Length of Last Word
 * @url https://leetcode.com/problems/length-of-last-word/
 * @difficulty easy
 */

const lengthOfLastWord = function (s) {
  let res = 0;
  let i = s.length - 1;

  while (s[i] === ' ') {
    i--;
  }

  while (i >= 0 && s[i] !== ' ') {
    res++;
    i--;
  }

  return res;
};
