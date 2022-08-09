/**
 * @number 1588
 * @title Sum of All Odd Length Subarrays
 * @url https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 * @difficulty easy
 */

const sumOddLengthSubarrays = function (arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    let totalCount = (i + 1) * (arr.length - i);
    let oddCount = Math.floor(totalCount / 2) + totalCount % 2;

    res += arr[i] * oddCount;
  }

  return res;
};
