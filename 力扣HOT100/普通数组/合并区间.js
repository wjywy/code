/**
 * 以数组intervals表示若干个区间的集合，其中单个区间为intervals[i] = [start, end]。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间
 * @param {number[][]} intervals 
 * 思路: 排序后, 每次取第一个区间, 然后判断是否和上一个区间有重叠, 有则合并；
 * 那么怎么判断是否有重叠呢，只要判断上一个区间的end是否大于当前区间的start即可
 */
const mergeNum = (intervals) => {
    let res = [];
    const nums = intervals.sort((a, b) => a[0] - b[0]);

    let prev = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let cur = nums[i];
        if (prev[1] >= cur[0]) {
            prev[1] = Math.max(prev[1], cur[1]);
        } else {
            res.push(prev);
            prev = cur;
        }
    }

    res.push(prev);

    return res;
}