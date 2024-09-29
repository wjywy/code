/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 */
const searchInsert = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    let middle = Math.floor((left + right) / 2)

    while(left <= right) {
        if (nums[middle] > target) {
            right = middle - 1
            middle = Math.floor((right + left) / 2)

        }

        else if (nums[middle] < target) {
            left = middle + 1
            middle = Math.floor((right + left) / 2)

        }

        else if (nums[middle] === target) {
            return middle
        }
    }

    return left
}

console.log(searchInsert([1,3,5,6], 5))