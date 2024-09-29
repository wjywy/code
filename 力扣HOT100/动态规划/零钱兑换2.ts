/**
 * 思路：这是一道完全背包问题，主要区别在于循环方式的不同
 */
const coinChange2 = (coins: number[], amount: number) => {
    const dp: number[] = new Array(amount + 1).fill(Infinity) // 凑成金额i所需的最少得硬币个数
    dp[0] = 0

    for (let i = 0; i < amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i > coins[j] && dp[i - coins[j]] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i] - coins[j] + 1)
            }
        }
    }

    return dp[amount] === Infinity ? null : dp[amount]
}