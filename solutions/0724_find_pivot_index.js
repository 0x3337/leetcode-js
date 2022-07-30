/**
 * @number 724
 * @title Find Pivot Index
 * @url https://leetcode.com/problems/find-pivot-index/
 * @difficulty easy
 */

const pivotIndex = function (nums) {
  let [sum, leftSum] = [0, 0];

  for (let num of nums) {
    sum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }

  return -1;
};
