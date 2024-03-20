// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警
// 思路：dp[i]为第i间房屋的最高收益
const rob = (nums: number[]) => {
    let dp: number[] = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[nums.length - 1]
}