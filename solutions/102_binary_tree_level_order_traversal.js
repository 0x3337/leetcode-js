/**
 * @number 102
 * @title Binary Tree Level Order Traversal
 * @url https://leetcode.com/problems/binary-tree-level-order-traversal/
 * @difficulty medium
 */

const levelOrder = function (root) {
  let res = [];
  let queue = [root];

  while (queue.length) {
    let [level, q] = [[], []];

    for (let node of queue) {
      if (node) {
        level.push(node.val);
        q.push(node.left);
        q.push(node.right);
      }
    }

    if (level.length) {
      res.push(level);
    }

    queue = q;
  }

  return res;
};
