/**
 * @number 16
 * @title 3Sum Closest
 * @url https://leetcode.com/problems/3sum-closest/
 * @difficulty medium
 */

const threeSumClosest = function (nums, target) {
  let res = 0;
  let diff = 10000;

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let [j, k] = [i + 1, nums.length - 1];

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      let d = Math.abs(sum - target);

      if (sum === target) {
        return sum;
      } else if (diff > d) {
        res = sum;
        diff = d;
      }

      if (sum <= target) j++;
      if (sum >= target) k--;
    }
  }

  return res;
};
