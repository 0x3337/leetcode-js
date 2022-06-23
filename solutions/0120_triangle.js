/**
 * @number 120
 * @title Triangle
 * @url https://leetcode.com/problems/triangle/
 * @difficulty medium
 */

const minimumTotal = function (triangle) {
  let res = [];

  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      let n = triangle[i][j];
      res[j] = Math.min(n + (res[j] || 0), n + (res[j + 1] || 0));
    }
  }

  return res[0];
};
