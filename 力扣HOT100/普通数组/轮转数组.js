/**
 * 给定一个整数数组nums，将数组中的元素向右轮转k个位置，其中k是非负数
 * @param {number[]} nums 
 * @param {number} k
 * 思路：使用额外的数组将每个元素放至正确的位置，然后赋值给原数组
 */
const circleNums = (nums, k) => {
    let n = nums.length;
    let arr = new Array(n);

    for (let i = 0; i < n; i++) {
        arr[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = arr[i];
    }
}