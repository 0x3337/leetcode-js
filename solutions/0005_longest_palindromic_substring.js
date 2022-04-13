/**
 * @number 5
 * @title Longest Palindromic Substring
 * @url https://leetcode.com/problems/longest-palindromic-substring/
 * @difficulty medium
 */

const longestPalindrome = function (s) {
  let res = '';

  for (let i = 0; i < s.length ; i++) {
    let palindrome1 = palindromeFromCenter(s, i, i);
    let palindrome2 = palindromeFromCenter(s, i, i + 1);

    if (palindrome1.length > res.length) res = palindrome1;
    if (palindrome2.length > res.length) res = palindrome2;
  }

  return res;
};

const palindromeFromCenter = function (s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }

  return s.slice(l + 1, r);
};
