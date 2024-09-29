function generate(numRows: number): number[][] {
    const dp: number[][] = [];
    dp[0] = [0];
    dp[1] = [1];

    for (let i = 2; i <= numRows; i++) {
        dp[i] = [];
        dp[i].push(1);
        for (let j = 1; j < i - 1; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
        }
        dp[i].push(1);
    }
    dp.shift();
    return dp;
};