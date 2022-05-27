/**
 * @number 278
 * @title First Bad Version
 * @url https://leetcode.com/problems/first-bad-version/
 * @difficulty easy
 */

const solution = function (isBadVersion) {
  return function (n) {
    let res = n;
    let [left, right] = [1, n];

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) {
        res = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return res;
  };
};
