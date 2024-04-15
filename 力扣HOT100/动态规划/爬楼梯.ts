// 动态规划——
// 1. 确定dp数组
// 2. dp数组的地推公式
// 3. 确定dp数组的初始值
// 4. 确定dp数组的遍历方向

const climb = (n: number): number => {
    const dp: number[] = []; // dp[i]为爬到第i阶的方法数
    dp[0] = 1; dp[1] = 1; for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}
