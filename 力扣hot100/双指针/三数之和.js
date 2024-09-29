/**
 * 给定一个整数数组nums，判断是否存在三元组[nums[i], nums[j], nums[k]]满足i != j, i != k且j != k，同时还满足nums[i] + nums[j] + nums[k] == 0
 * 请你返回所有和为0且不重复的三元组
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums.sort((a, b) => a - b)
    let result = []
    if (nums == null || nums.length < 3) return result;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--
                left++
                right--
            }
            else if (sum < 0) left++
            else if (sum > 0) right--
        }

    }
    return result
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))