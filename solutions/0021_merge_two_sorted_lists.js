/**
 * @number 21
 * @title Merge Two Sorted Lists
 * @url https://leetcode.com/problems/merge-two-sorted-lists/
 * @difficulty easy
 */

const mergeTwoLists = function (l1, l2) {
  let res;
  let node;

  while (l1 || l2) {
    let n1 = l1 && l1.val;
    let n2 = l2 && l2.val;
    
    let n = (n1 !== null && n2 !== null ? (Math.min(n1, n2)) : (n1 || n2 || 0));

    if (!res) {
      res = node = new ListNode(n);
    } else {
      node.next = new ListNode(n);
      node = node.next;
    }

    if (l1 && n === n1) {
      l1 = l1.next;
    } else if (l2 && n === n2) {
      l2 = l2.next;
    }
  }

  return res || null;
};