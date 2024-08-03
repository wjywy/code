/**
 * 
 * @param {number[]} nums 
 */
const fast = (nums) => {
    if (nums.length <= 1) {
        return nums
    }
    const pre = nums[0]
    const left = []
    const right = []

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > pre) {
            right.push(nums[i])
        } else {
            left.push(nums[i])
        }
    }

    return fast(left).concat(pre, fast(right))
}

console.log(fast([5, 3, 8, 4, 2, 7, 1]))