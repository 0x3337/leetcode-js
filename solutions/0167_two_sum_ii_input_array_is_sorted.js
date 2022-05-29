/**
 * @number 167
 * @title Two Sum II - Input Array Is Sorted
 * @url https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @difficulty medium
 */

const twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1];

  while (left <= right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};
