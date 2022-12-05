/**
 * @number 1710
 * @title Maximum Units on a Truck
 * @url https://leetcode.com/problems/maximum-units-on-a-truck/
 * @difficulty easy
 */

const maximumUnits = function (boxTypes, truckSize) {
  let sum = 0;

  boxTypes.sort((a, b) => {
    return a[1] - b[1];
  });

  while (truckSize > 0 && boxTypes.length) {
    let [numberOfBoxes, numberOfUnitsPerBox] = boxTypes.pop();

    sum += Math.min(numberOfBoxes, truckSize) * numberOfUnitsPerBox;
    truckSize -= numberOfBoxes;
  }

  return sum;
};
