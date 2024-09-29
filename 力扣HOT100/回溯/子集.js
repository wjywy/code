/**
 * 给你一个整数数组nums，数组中的元素互不相同。返回该数组所有可能得子集(幂集)
 * 解集不能包含重复的子集。
 * @param {number[]} nums 
 */
const subset = (nums) => {
    const ans = [];
    const recur = (res, startIndex) => {
        ans.push(res.slice());

        for (let i = startIndex; i < nums.length; i++) {
            res.push(nums[i]);
            recur(res, i + 1);
            res.pop();
        }
    }

    recur([], 0);

    return ans;
}