/**
 * @number 784
 * @title Letter Case Permutation
 * @url https://leetcode.com/problems/letter-case-permutation/
 * @difficulty medium
 */

const letterCasePermutation = function (s) {
  let res = [];

  permute(res, s);

  return res;
}; 

const permute = function (accumulator, s, remS = '') {
  if (s.length === remS.length) {
    accumulator.push(remS);

    return;
  }

  let i = remS.length;

  if (s[i] >= '0' && s[i] <= '9') {
    permute(accumulator, s, remS + s[i]);
  } else {
    permute(accumulator, s, remS + s[i].toUpperCase());
    permute(accumulator, s, remS + s[i].toLowerCase());
  }
};
