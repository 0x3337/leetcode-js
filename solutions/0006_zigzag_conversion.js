/**
 * @number 6
 * @title ZigZag Conversion
 * @url https://leetcode.com/problems/zigzag-conversion/
 * @difficulty medium
 */

const convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let res = '';
  let k = 2 * numRows - 2;

  for (let i = 0; i < numRows; i++) {
    for (let idx1 = i; idx1 < s.length; idx1 += k) {
      res += s[idx1];

      let idx2 = idx1 + k - 2 * i;
      if (i !== 0 && i !== numRows - 1 && idx2 < s.length) {
        res += s[idx2];
      }
    }
  }

  return res;
};
