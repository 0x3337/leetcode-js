/**
 * @number 11
 * @title Container With Most Water
 * @url https://leetcode.com/problems/container-with-most-water/
 * @difficulty medium
 */

const maxArea = function (height) {
  let res = 0;
  let [x1, x2] = [0, height.length - 1];

  while (x1 < x2) {
    let minHeight = Math.min(height[x1], height[x2]);
    res = Math.max(res, minHeight * (x2 - x1));

    if (height[x1] < height[x2]) {
      x1++;
    } else {
      x2--;
    }
  }

  return res;
};
