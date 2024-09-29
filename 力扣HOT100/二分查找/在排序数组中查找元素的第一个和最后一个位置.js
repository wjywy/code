/**
 * 给你一个按照非递减顺序排列的整数数组nums和一个目标值target。请你找出给定目标值在数组中的开始位置和结束位置
 * 如果数组中不存在目标值target，返回[-1,-1]
 */
/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * 思路：二分查找可能导致target左右两边都是target，所以需要判断。这时我们就可以通过移动left和right指针来逐渐缩小范围，直到找到第一个target和最后一个target
 */
const binarySearchLeft = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right && (nums[left] !== target || nums[right] !== target)) {
        
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            if (nums[left] !== target) {
                left++;
            }
            if (nums[right] !== target) {
                right--;
            }
        }
    }

    if (nums[left] === target && nums[right] === target) {
        return [left, right];
    }

    return [-1, -1];
}
