/**
 * @number 19
 * @title Remove Nth Node From End of List
 * @url https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * @difficulty medium
 */

const removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let [left, right] = [dummy, head];

  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next ?? null;
  return dummy.next;
};
