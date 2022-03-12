/**
 * @number 941
 * @title Valid Mountain Array
 * @url https://leetcode.com/problems/valid-mountain-array/
 * @difficulty easy
 */

const validMountainArray = function (arr) {
  let length = arr.length - 1;
  let i = 0;

  while (i < length && arr[i] < arr[i + 1]) {
    i++;
  }
    
  if (i === 0 || i === length) {
    return false;
  }

  while (i < length && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === length;
};
