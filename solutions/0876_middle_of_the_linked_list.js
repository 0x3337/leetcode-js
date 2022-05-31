/**
 * @number 876
 * @title Middle of the Linked List
 * @url https://leetcode.com/problems/middle-of-the-linked-list/
 * @difficulty easy
 */

const middleNode = function (head) {
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
