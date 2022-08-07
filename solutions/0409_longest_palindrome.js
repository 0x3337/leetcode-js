/**
 * @number 409
 * @title Longest Palindrome
 * @url https://leetcode.com/problems/longest-palindrome/
 * @difficulty easy
 */

const longestPalindrome = function (s) {
  let res = 0;
  let map = {};

  for (let c of s) {
    map[c] = map[c] ?? 0;
    map[c]++;
  }

  for (let c in map) {
    res += Math.floor(map[c] / 2) * 2;

    if (res % 2 === 0 && map[c] % 2 === 1) {
      res++;
    }
  }

  return res;
};
