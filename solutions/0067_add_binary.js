/**
 * @number 67
 * @title Add Binary
 * @url https://leetcode.com/problems/add-binary/
 * @difficulty easy
 */

const addBinary = function (a, b) {
  let res = [];
  let aa = a.split(''), bb = b.split('');
  let accumulator = '0';

  while (aa.length > 0 || bb.length > 0 || accumulator === '1') {
    let x = aa.pop() || '0';
    let y = bb.pop() || '0';

    if (x !== y) {
      res.unshift(accumulator === '1' ? '0' : '1');
    } else {
      res.unshift(accumulator);
      accumulator = x;
    }
  }

  return res.join('');
};
