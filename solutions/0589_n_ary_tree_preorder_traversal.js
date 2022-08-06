/**
 * @number 589
 * @title N-ary Tree Preorder Traversal
 * @url https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 * @difficulty easy
 */

const preorder = function (root) {
  let res = [];
  let queue = [root];

  while (node = queue.pop()) {
    res.push(node.val);

    let children = node.children.reverse();
    
    for (let child of children) {
      queue.push(child);
    }
  }

  return res;
};
