/**
 * @number 121
 * @title Best Time to Buy and Sell Stock
 * @url https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @difficulty easy
 */

const maxProfit = function (prices) {
  let [sum, max] = [0, 0];

  for (let i = 0; i < prices.length - 1; i++) {
    let diff = prices[i + 1] - prices[i];

    sum = Math.max(sum + diff, diff);
    max = Math.max(sum, max);
  }

  return max;
};
