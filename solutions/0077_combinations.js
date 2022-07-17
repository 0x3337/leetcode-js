/**
 * @number 77
 * @title Combinations
 * @url https://leetcode.com/problems/combinations/
 * @difficulty medium
 */

const combine = function (n, k) {
  let res = [];
  let nums = [];

  for (let i = 0; i < n; i++) {
    nums.push(i + 1);
  }

  return permute(nums, k);
};

const permute = function (nums, k) {
  if (k === 1) {
    return nums.reduce((arr, n) => {
      arr.push([n]);

      return arr;
    }, []);
  }

  let res = [];

  while (nums.length) {
    let n = nums.pop();

    for (const p of permute([...nums], k - 1)) {
      res.push([n, ...p]);
    }
  }

  return res;
};
