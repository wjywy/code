// 完全背包问题
const sumSquare = (n: number) => {
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], 1 + dp[i - j * j]);
        }
    }

    return dp[n];
}
