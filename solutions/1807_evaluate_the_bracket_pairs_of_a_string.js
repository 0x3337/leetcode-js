/**
 * @number 1807
 * @title Evaluate the Bracket Pairs of a String
 * @url https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/
 * @difficulty medium
 */

const evaluate = function (s, knowledge) {
  let res = '', key = '';
  let knows = {};

  for (let k of knowledge) {
    knows['(' + k[0] + ')'] = k[1];
  }

  for (let c of s) {
    if (c === '(' || c === ')' || key.length > 0) {
      key += c;
      if (c === ')') {
        res += knows[key] || '?';
        key = '';
      }
    } else {
      res += c;
    }
  }

  return res;
};
