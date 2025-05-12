/**
 * @number 724
 * @title Find Pivot Index
 * @url https://leetcode.com/problems/find-pivot-index/
 * @difficulty easy
 */

const pivotIndex = function (nums) {
  let [leftSum, sumRight] = [0, 0];

  for (let num of nums) {
    sumRight += num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sumRight - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }

  return -1;
};
