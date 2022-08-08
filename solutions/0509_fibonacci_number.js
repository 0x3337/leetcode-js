/**
 * @number 509
 * @title Fibonacci Number
 * @url https://leetcode.com/problems/fibonacci-number/
 * @difficulty easy
 */

const fib = function (n) {
  let [a, b] = [0, 1];

  while (n--) {
    [a, b] = [b, a + b];
  }

  return a;
};
