/**
 * @number 695
 * @title Max Area of Island
 * @url https://leetcode.com/problems/max-area-of-island/
 * @difficulty medium
 */

const maxAreaOfIsland = function (grid) {
  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        let area = dfs(grid, i, j);
        res = Math.max(res, area);
      }
    }
  }

  return res;
};

const dfs = function (grid, r, c) {
  let area = 0;
  let [m, n] = [grid.length - 1, grid[0].length - 1];

  if (r < 0 || r > m || c < 0 || c > n || grid[r][c] !== 1) {
    return area;
  }

  grid[r][c] = 2;

  area += dfs(grid, r - 1, c);
  area += dfs(grid, r, c - 1);
  area += dfs(grid, r + 1, c);
  area += dfs(grid, r, c + 1);

  return area + 1;
};
