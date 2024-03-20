/**
 * 给你一个整数数组nums，请你找出一个具有最大和的连续子数组(子数组最少包含一个元素)，返回其最大和
 * @param {number[]} nums
 * 思路：既然是找最大和的连续子数组，那么关键就在于如何确定子数组的起点，所以我们可以将某一段的和与下一个值作比较，小于的话则以下一个值作为子数组新的起点
 */
const maxSumChild = (nums) => {
    if (nums.length === 1) return nums[0];

    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        max = Math.max(sum, max);
    }

    return max;
}