/**
 * 给定一个数组nums，编写一个函数将所有0移动到数组的末尾，同时保持非零元素的相对顺序
 */

/**
 * 
 * @param {number[]} nums
 * @returns {number[]} 
 */
const moveZeros = (nums) => {
    let start = 0
    let end = nums.length - 1
    while (start < nums.length) {
        if (nums[start] === 0) {
            nums.splice(start, 1)
            console.log(nums)
            nums.push(0)
        }
        if (nums[end] === 0) {
            nums.splice(end, 1)
            nums.push(0)
        }
        start++
        end--
    }
    return nums
}
console.log(moveZeros([0, 0, 1]))