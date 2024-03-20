// 思路：确定递推公式就行
// 
function coinChange(coins: number[], amount: number): number {
    // 完全背包问题
    // 确定dp数组和递推公式
    // dp[i]: 凑成金额i所需的最少硬币个数
    // dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)

    let dp: number[] = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j] && dp[i - coins[j]] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};