/**
 * @number 994
 * @title Rotting Oranges
 * @url https://leetcode.com/problems/rotting-oranges/
 * @difficulty medium
 */

const orangesRotting = function (grid) {
  let [m, n] = [grid.length, grid[0].length];
  let [time, fresh] = [0, 0];
  let queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        fresh++;
      }

      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  while (queue.length > 0 && fresh > 0) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let [r, c] = queue.shift();

      for (let [dr, dc] of directions) {
        let [row, col] = [r + dr, c + dc];

        if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] !== 1) {
          continue;
        }

        queue.push([row, col]);
        grid[row][col] = 2;
        fresh--;
      }
    }

    time++;
  }

  return fresh === 0 ? time : -1;
};
