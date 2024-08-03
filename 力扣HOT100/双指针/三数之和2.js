/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
 * 请你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * @param {number[]} nums 
 */
const threeSum = (nums) => {
    const res = []
    const newNums = nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length; i++) {
        if (newNums.length < 3) {
            return res
        }

        if (newNums[i] > 0) {
            break
        }

        if (i > 0 && newNums[i] === newNums[i - 1]) {
            continue
        }

        let left = i + 1
        let right = newNums.length - 1

        while(left < right) {
            const target = -newNums[i]

            if (newNums[left] + newNums[right] === target) {
                res.push([newNums[left], newNums[i], newNums[right]])

                while (left < right && newNums[left] === newNums[left + 1]) {
                    left++
                }

                while (left < right && newNums[right] === newNums[right - 1]) {
                    right--
                }

                left++
                right--
            } else if (newNums[left] + newNums[right] > target) {
                right--
            } else {
                left++
            }
        }
    }

    return res
}

console.log(threeSum([-1,0,1,2,-1,-4]))