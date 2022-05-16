/**
 * @number 83
 * @title Remove Duplicates from Sorted List
 * @url https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * @difficulty easy
 */

const deleteDuplicates = function (head) {
  let current = head;

  while (current) {
    while (current.next && current.next.val === current.val) {
      current.next = current.next.next;
    }

    current = current.next;
  }

  return head;
};
