/**
 * @number 733
 * @title Flood Fill
 * @url https://leetcode.com/problems/flood-fill/
 * @difficulty easy
 */

const floodFill = function (image, sr, sc, newColor) {
  let color = image[sr][sc];

  if (color !== newColor) {
    dfs(image, sr, sc, color, newColor);
  }

  return image;
};

const dfs = function (image, r, c, color, newColor) {
  let [m, n] = [image.length - 1, image[0].length - 1];

  if (image[r][c] === color) {
    image[r][c] = newColor;

    if (r > 0) dfs(image, r - 1, c, color, newColor);
    if (c > 0) dfs(image, r, c - 1, color, newColor);
    if (r < m) dfs(image, r + 1, c, color, newColor);
    if (c < n) dfs(image, r, c + 1, color, newColor);
  }
};
