/**
 * @number 206
 * @title Reverse Linked List
 * @url https://leetcode.com/problems/reverse-linked-list/
 * @difficulty easy
 */
 
const reverseList = function (head) {
  let [current, prev] = [head, null];

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
