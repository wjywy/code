/**
 * 给你一个整数数组nums，返回数组answer，其中answer[i]等于nums中除nums[i]之外其余各元素的乘积。
 * @param {number[]} nums
 * 思路：从左到右，从右到左
 */
const product = (nums) => {
    if (nums.length === 1) return nums;
    const length = nums.length;
    let ans = Array.from(nums.length);
    ans[0] = 1;
    let R = 1;
    for (let i = 1; i < length; i++) {
        ans[i] = ans[i - 1] * nums[i];
    }

    for (let i = length - 1; i >= 0; i--) {
        ans[i] = ans[i - 1] * R;
        R *= nums[i];
    }

    return ans;
}