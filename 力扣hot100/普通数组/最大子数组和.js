/**
 * 给你一个整数数组nums，请你找出一个具有最大和的连续子数组(子数组最少包含一个元素)，返回其最大和
 */

/**
 * 
 * @param {number[]} nums 
 */

/**
 * 暴力法
 */
const maxChildren = (nums) => {
    if (nums.length === 1) return nums[0]
    let result = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] < nums[i - 1]) continue
        let sum = 0
        sum = nums[i]
        each = nums[i]
        for (let t = i + 1; t < nums.length; t++) {
            sum = sum + nums[t]
            each = sum > each ? sum : each
        }
        result = each > result ? each : result
    }
    return result
}
console.log(maxChildren([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

/**
 * 动态规划,经典动态规划呜呜
 */
var maxSubArray = function (nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};