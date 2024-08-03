/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * @param {number[]} nums
 *
 */
const maxLength = (nums) => {
    const set = new Set()

    // 去重
    for (const num of nums) {
        set.add(num)
    }

    let res = 0
    for (const num of set) {
        if (!set.has(num - 1)) {
            let cur = 1
            let curNum = num
    
            while(set.has(curNum + 1)) {
                cur++
                curNum++
            }
            res = Math.max(res, cur)
        }
    }

    return res
}

console.log(maxLength([100,4,200,1,3,2]))