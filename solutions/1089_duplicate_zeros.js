/**
 * @number 1089
 * @title Duplicate Zeros
 * @url https://leetcode.com/problems/duplicate-zeros/
 * @difficulty easy
 */

const duplicateZeros = function (arr) {
  let res = [];

  for (let i = 0; res.length < arr.length; i++) {
    res.push(arr[i]);
    if (arr[i] === 0) res.push(0);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = res[i];
  }
};
