/**
 * @number 3
 * @title Longest Substring Without Repeating Characters
 * @url https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @difficulty medium
 */

const lengthOfLongestSubstring = function (s) {
  let res = 0;
  let left = 0;

  let map = {};

  for (let right = 0; right < s.length; right++) {
    while (s[right] in map) {
      delete map[s[left]];
      left++;
    }

    map[s[right]] = true;
    res = Math.max(res, right - left + 1);
  }

  return res;
};
