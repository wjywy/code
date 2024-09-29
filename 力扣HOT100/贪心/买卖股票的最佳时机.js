/**
 * 
 * @param {number[]} prices 
 * 思路：遍历数组，其利润就是Math.max(item[i] - min, price);
 */
const bsetSail = (prices) => {
    let min = Infinity;
    let result = 0;

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        result = Math.max(result, prices[i] - min);
    }

    return result;
}
