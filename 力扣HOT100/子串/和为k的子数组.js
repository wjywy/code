/**
 * 给你一个整数数组和一个整数k，请你统计并返回该数组中和为k的子数组的个数
 * @param {number[]} nums 
 * @param {number} k 
 * 方法二: 前缀和——看求不懂，先不写此方法
 */
const childNum = (nums, k) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) {
                count++;
            }
        }
    }
    return count;
}