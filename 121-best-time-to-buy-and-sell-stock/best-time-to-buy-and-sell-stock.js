/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > buy) {
            profit = Math.max(profit, prices[i] - buy)
        } else {
            buy = prices[i]
        }
    }
    return profit
};