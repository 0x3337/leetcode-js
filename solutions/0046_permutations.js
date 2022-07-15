/**
 * @number 46
 * @title Permutations
 * @url https://leetcode.com/problems/permutations/
 * @difficulty medium
 */

const permute = function (nums) {
  if (nums.length === 0) {
    return [];
  }

  if (nums.length === 1) {
    return [nums];
  }

  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    let remNums = [...nums.slice(0, i), ...nums.slice(i + 1)];

    for (const p of permute(remNums)) {
      res.push([n, ...p]);
    }
  }

  return res;
};
