/**
 * @number 116
 * @title Populating Next Right Pointers in Each Node
 * @url https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 * @difficulty medium
 */

const connect = function (root) {
  let [current, next] = [root, root && root.left];

  while (next) {
    current.left.next = current.right;

    if (current.next) {
      current.right.next = current.next.left;
      current = current.next;
    } else {
      current = next;
      next = current.left;
    }
  }

  return root;
};
