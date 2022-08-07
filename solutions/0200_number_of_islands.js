/**
 * @number 200
 * @title Number of Islands
 * @url https://leetcode.com/problems/number-of-islands/
 * @difficulty medium
 */

const numIslands = function (grid) {
  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        res++;
      }
    }
  }

  return res;
};

const dfs = function (grid, r, c) {
  let [m, n] = [grid.length - 1, grid[0].length - 1];

  if (grid[r][c] === '1') {
    grid[r][c] = '2';

    if (r > 0) dfs(grid, r - 1, c);
    if (c > 0) dfs(grid, r, c - 1);
    if (r < m) dfs(grid, r + 1, c);
    if (c < n) dfs(grid, r, c + 1);
  }
};
