/**
 * @number 542
 * @title 01 Matrix
 * @url https://leetcode.com/problems/01-matrix/
 * @difficulty medium
 */

const updateMatrix = function (mat) {
  let [m, n] = [mat.length, mat[0].length];
  let res = [];
  let queue = [];

  for (let i = 0; i < m; i++) {
    res[i] = [];
    for (let j = 0; j < n; j++) {
      res[i][j] = Number.MAX_SAFE_INTEGER;

      if (mat[i][j] === 0) {
        res[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  while (queue.length > 0) {
    let [r, c] = queue.shift();

    for (let [dr, dc] of directions) {
      let [row, col] = [r + dr, c + dc];

      if (row >= 0 && col >= 0 && row < m && col < n) {
        if (res[row][col] > res[r][c] + 1) {
          res[row][col] = res[r][c] + 1;
          queue.push([row, col]);
        }
      }
    }
  }

  return res;
};
