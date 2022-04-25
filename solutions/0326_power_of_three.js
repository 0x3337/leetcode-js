/**
 * @number 326
 * @title Power of Three
 * @url https://leetcode.com/problems/power-of-three/
 * @difficulty easy
 */

const MAX_POWER_OF_THREE_INTEGER = 1162261467; // 3 ** 19

const isPowerOfThree = function (n) {
    return n > 0 && MAX_POWER_OF_THREE_INTEGER % n === 0;
};
