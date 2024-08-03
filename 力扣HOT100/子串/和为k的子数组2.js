/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 */

const subarray = (nums, k) => {
    let ans = 0

    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i]
        if (sum === k) {
            ans += 1
        }

        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j]

            if (sum === k) {
                ans += 1
            }
        }
    }

    return ans
}

console.log(subarray([1, 2, 3], 3))

