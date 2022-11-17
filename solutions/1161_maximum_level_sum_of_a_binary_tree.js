/**
 * @number 1161
 * @title Maximum Level Sum of a Binary Tree
 * @url https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
 * @difficulty medium
 */

const maxLevelSum = function (root) {
  let queue = [root];
  let [level, currentLevel] = [0, 0];
  let maxSum = Number.MIN_SAFE_INTEGER;

  while (queue.length) {
    let sum = 0;
    let q = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      sum += node.val;

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    if (maxSum < sum) {
      maxSum = sum;
      level = currentLevel;
    }

    queue = q;
    currentLevel++;
  };

  return level + 1;
};
