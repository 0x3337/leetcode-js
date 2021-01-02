/**
 * @number 2
 * @title Add Two Numbers
 * @url https://leetcode.com/problems/add-two-numbers/
 * @difficulty medium
 */

const addTwoNumbers = function (l1, l2) {
  let res, cursor;
  let decimal = 0, remainder = 0, sum = 0;

  while (l1 || l2 || decimal) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;

    sum = v1 + v2 + decimal;
    remainder = sum % 10;
    decimal = (sum - remainder) / 10;

    let l = new ListNode(remainder);

    if (res === undefined) {
      res = l;
      cursor = l;
    } else {
      cursor.next = l;
      cursor = cursor.next;
    }

    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }

  return res;
};
