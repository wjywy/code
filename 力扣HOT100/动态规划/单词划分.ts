// 完全背包问题
// dp数组的含义：dp[i]表示长度为i的s[0, i - 1]字串是否能拆分为单词
const splitWords = (s: string, wordDict: string[]) => {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] === true && wordDict.includes(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}
