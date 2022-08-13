/**
 * @number 844
 * @title Backspace String Compare
 * @url https://leetcode.com/problems/backspace-string-compare/
 * @difficulty easy
 */

const backspaceCompare = function (s, t) {
  return build(s) === build(t);
};

const build = function (s) {
  let res = [];

  for (let c of s) {
    if (c === '#') {
      res.pop();
    } else {
      res.push(c);
    }
  }

  return res.join('');
};
