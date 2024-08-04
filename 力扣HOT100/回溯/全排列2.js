/**
 * 
 * @param {number[]} nums 
 */
const permute = (nums) => {
    const ans = []
    const recur = (res) => {
        if (res.length === nums.length) {
            ans.push(res.slice())
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (res.includes(nums[i])) {
                continue
            }
            res.push(nums[i])
            recur(res)
            res.pop()
        }
    }

    recur([])

    return ans
}
