/**
 * @number 28
 * @title Implement strStr()
 * @url https://leetcode.com/problems/implement-strstr/
 * @difficulty easy
 */

const strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, needle.length) === needle) {
      return i;
    }
  }

  return -1;
};
