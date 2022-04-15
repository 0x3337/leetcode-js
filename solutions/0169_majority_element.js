/**
 * @number 169
 * @title Majority Element
 * @url https://leetcode.com/problems/majority-element/
 * @difficulty easy
 */

const majorityElement = function (nums) {
  let count = 0;
  let candidate = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
};
