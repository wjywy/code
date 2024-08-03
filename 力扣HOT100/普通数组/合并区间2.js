/**
 * 
 * @param {number[][]} intervals 
 */
const merge = (intervals) => {
    let res = [];
    const nums = intervals.sort((a, b) => a[0] - b[0]);

    let prev = nums[0];

    for (let i = 1; i < nums.length; i++)  {
        let cur = nums[i]

        if (prev[1] >= cur[0]) {
            prev[1] = Math.max(prev[1], cur[1])
        } else {
            res.push(prev)
            prev = cur
        }
    }

    res.push(prev)

    return res
}

console.log(merge([[1,4],[4,5]]))
