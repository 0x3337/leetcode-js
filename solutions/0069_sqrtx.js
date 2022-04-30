/**
 * @number 69
 * @title Sqrt(x)
 * @url https://leetcode.com/problems/sqrtx/
 * @difficulty easy
 */

const mySqrt = function (x) {
  let [left, right] = [0, x];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let pow = mid * mid;

    if (pow === x) return mid;

    if (pow > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};
