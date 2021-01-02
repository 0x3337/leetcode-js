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
  let numColumns = Math.ceil(s.length / k);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      let idx1 = j * k + i;
      if (idx1 < s.length) {
        res += s[idx1];
      }

      let idx2 = (j + 1) * k - i;
      if (i !== 0 && i !== numRows - 1 && idx2 < s.length) {
        res += s[idx2];
      }
    }
  }

  return res;
};
