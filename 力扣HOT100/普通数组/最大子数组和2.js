/**
 * 
 * @param {number[]} nums 
 */
const maxArray = (nums) => {
    let ans = nums[0]
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i])
        ans = Math.max(sum, ans)
    }

    return ans
}

console.log(maxArray([-2,1,-3,4,-1,2,1,-5,4]))