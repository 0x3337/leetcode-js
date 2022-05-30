/**
 * @number 557
 * @title Reverse Words in a String III
 * @url https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * @difficulty easy
 */

const reverseWords = function (s) {
  let res = s.split('');
  let [left, right] = [0, 0];

  while (left < res.length) {
    while (right < res.length && res[right] !== ' ') {
      right++;
    }
    
    reverse(res, left, right);
    left = right + 1;
    right = left;
  }

  return res.join('');
};

const reverse = function (s, start, end) {
  let [left, right] = [start, end - 1];

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};
