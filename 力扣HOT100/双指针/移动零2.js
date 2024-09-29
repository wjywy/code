/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作
 * @param {number[]} nums
 *
 */
const moveZeros = (nums) => {
    let slow = 0

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            let temp = nums[fast]
            nums[fast] = nums[slow]
            nums[slow] = temp
            slow++
        }
    }

    return nums
}

console.log(moveZeros([1,3,12,0,0]))