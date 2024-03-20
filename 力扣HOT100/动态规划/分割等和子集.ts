// 给你一个只包含正整数的非空数组nums。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等
// 思路：意思就是：将数组和/2;看数组内的元素是否可以相加===sum/2;是一个01背包问题;01背包第二层循环需要从后往前遍历
const splitNums = (nums: number[]) => {
    const sum: number = nums.reduce((pre, cur) => pre + cur);
    if (sum % 2 === 1) return false;
    const bagSize: number = sum / 2;
    const goodsNum: number = nums.length;
    const dp: number[] = new Array(bagSize + 1).fill(0);
    for (let i = 0; i < goodsNum; i++) {
        for (let j = bagSize; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
    }
    return dp[bagSize] === bagSize;
}