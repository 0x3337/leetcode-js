/**
 * @number 1963
 * @title Minimum Number of Swaps to Make the String Balanced
 * @url https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/
 * @difficulty medium
 */

const minSwaps = function (s) {
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      counter++;
    } else if (counter > 0) {
      counter--;
    }
  }

  return Math.ceil(counter / 2);
};
