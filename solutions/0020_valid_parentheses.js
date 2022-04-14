/**
 * @number 20
 * @title Valid Parentheses
 * @url https://leetcode.com/problems/valid-parentheses/
 * @difficulty easy
 */

const isValid = function (s) {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      stack.push(map[s[i]]);
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};
