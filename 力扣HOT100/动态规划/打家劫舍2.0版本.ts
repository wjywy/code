/**
 * 思路：
 */
const robPlus = (nums: number[]) => {
    const n = nums.length

    if (n === 0) {
        return 0
    }

    if (n === 1) {
        return nums[0]
    }

    const result1 = robRange(nums, 0, n - 2)
    const result2 = robRange(nums, 1, n - 1)

    return Math.max(result1, result2)
}

const robRange = (nums: number[], start: number, end: number) => {
    if (end === start) return nums[start]
    const dp: number[] = []
    dp[start] = nums[start]
    dp[start + 1] = Math.max(nums[start], nums[start + 1])

    for (let i = start + 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }

    return dp[end]
}