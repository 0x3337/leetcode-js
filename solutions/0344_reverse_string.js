/**
 * @number 344
 * @title Reverse String
 * @url https://leetcode.com/problems/reverse-string/
 * @difficulty easy
 */

const reverseString = function (s) {
  let [left, right] = [0, s.length - 1];

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};
