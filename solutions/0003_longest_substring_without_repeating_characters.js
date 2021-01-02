/**
 * @number 3
 * @title Longest Substring Without Repeating Characters
 * @url https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @difficulty medium
 */

const lengthOfLongestSubstring = function (s) {
  let res = 0;
  let prev = 0;
  
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) in map) {
      prev = Math.max(prev, map[s.charAt(i)] + 1);
    }

    map[s.charAt(i)] = i;
    res = Math.max(res, i + 1 - prev);
  }

  return res;
};
