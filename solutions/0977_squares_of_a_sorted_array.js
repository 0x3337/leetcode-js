/**
 * @number 977
 * @title Squares of a Sorted Array
 * @url https://leetcode.com/problems/squares-of-a-sorted-array/
 * @difficulty easy
 */

const sortedSquares = function (nums) {
  let res = [];
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    let squareLeft = nums[left] ** 2;
    let squareRight = nums[right] ** 2;

    if (squareLeft > squareRight) {
      res.push(squareLeft);
      left++;
    } else {
      res.push(squareRight);
      right--;
    }
  }

  return res.reverse();
};
