/**
 * 最长连续序列
 * 排序然后统计连续的个数
 * @param {number[]} nums 
 */
const maxLength = (nums) => {
    let newNums = nums.sort((a, b) => a - b);
    let map = new Map();

    for (const num of newNums) {
        map.set(num, map.get(num - 1) + 1 || 1);
    }

    let ans = 0;

    for (const [key, value] of map) {
        console.log(key, value);
        ans = Math.max(ans, value);
    }

    return ans;
}