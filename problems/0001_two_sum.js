/**
 * @number 1
 * @title Two Sum
 * @url https://leetcode.com/problems/two-sum
 * @difficulty easy
 */

const twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (diff in map) {
      return [map[diff], i];
    }

    map[nums[i]] = i;
  }

  return [];
};