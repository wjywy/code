// 给你一个整数数组nums，找到其中最长严格递增子序列的长度
// dp[i]: 数组nums.slice(0, i + 1)的最长递增子序列的长度
// dp[i] = Math.max(dp[i], dp[i - 1])
// 最重要的还是确定递推公式以及含义，递推的时候需要仔细思考
function lengthOfLIS(nums: number[]): number {
    const dp = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
            // i与i前面的元素比较
        for (let j = 0; j < i; j++) {
            // 找比i小的元素，找到一个，就让当前序列的最长子序列长度加1
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }
    // 找出最大的子序列
    return Math.max(...dp);
};
