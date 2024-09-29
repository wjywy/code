/**
 * 给定一个未排序的整数数组nums,找出数字连续的最长序列的长度
 * 设计并实现时间复杂度为o(n)的算法
 * @param {number[]} nums
 * @returns {number}
 */
const mostLength = (nums) => {
    // 1.声明哈希表
    const map = new Map();
    // 2.排序数组
    nums.sort((a, b) => a - b);
    // 3.条件存储-
    for (const num of nums) {
        map.set(num, map.get(num - 1) + 1 || 1);
    }
    let ans = 0;
    // 4.取最大值
    for (const [index, value] of map) {
        ans = Math.max(ans, value)
    }
    // 5.返回
    return ans
}
console.log(mostLength([100, 4, 200, 1, 3, 2]))