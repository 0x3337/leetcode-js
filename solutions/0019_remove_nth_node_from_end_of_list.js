/**
 * @number 19
 * @title Remove Nth Node From End of List
 * @url https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * @difficulty medium
 */

const removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let [slow, fast] = [dummy, head];

  while (n > 0 && fast) {
    fast = fast.next;
    n--;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next ?? null;
  return dummy.next;
};
