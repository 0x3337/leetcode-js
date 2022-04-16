/**
 * @number 15
 * @title 3Sum
 * @url https://leetcode.com/problems/3sum/
 * @difficulty medium
 */

const threeSum = function (nums) {
  let res = [];

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let [j, k] = [i + 1, nums.length - 1];

    while (j < k) {
      if (nums[k] === nums[k + 1]) { k--; continue; }

      let sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) res.push([nums[i], nums[j], nums[k]]);
      if (sum <= 0) j++;
      if (sum >= 0) k--;
    }
  }

  return res;
};
