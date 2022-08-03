/**
 * @number 142
 * @title Linked List Cycle II
 * @url https://leetcode.com/problems/linked-list-cycle-ii/
 * @difficulty medium
 */

const detectCycle = function (head) {
  if (head === null || head.next === null) {
    return null;
  }

  let [start, intersect] = [head, intersection(head)];
    
  if (intersect === null) {
      return null;
  }

  while (start !== intersect) {
    start = start.next;
    intersect = intersect.next;
  }

  return start;
};

const intersection = function (head) {
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return slow;
    }
  }

  return null;
};
