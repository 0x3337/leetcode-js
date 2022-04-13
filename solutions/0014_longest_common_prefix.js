/**
 * @number 14
 * @title Longest Common Prefix
 * @url https://leetcode.com/problems/longest-common-prefix/
 * @difficulty easy
 */

const longestCommonPrefix = function (strs) {
  let res = '';

  for (let i = 0; true; i++) {
    for (let str of strs) {
      if (i >= str.length || strs[0][i] !== str[i]) {
        return res;
      }
    }

    res += strs[0][i];
  }
};
