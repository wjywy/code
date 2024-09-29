/**
 * 1. 确定dp数组及其下标含义
 * 2. 确定dp的递推公式
 * 3. dp数组的初始化
 * 4. 确定遍历顺序
 */
/** 
 * @param {number[]} num 
 */
const rob = (num) => {
    let dp = []
    dp[0] = num[0]
    dp[1] = Math.max(num[0], num[1])

    for (let i = 2; i < num.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + num[i])
    }

    return dp[num.length - 1]
}
console.log(rob([2, 1, 1, 2]))
