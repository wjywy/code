/**
 * 给定n个非负整数表示每个宽度为1的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水
 * 思路就是求每个柱子左右最大值的边界，当前柱子的接水量，就是左右最大值中较小的一个减去当前柱子的高度
 * @param {number[]} height
 */
const trap = (height) => {
    let n = height.length;
    if (n === 0) return 0;
    let leftHeight = new Array(n).fill(0);
    leftHeight[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftHeight[i] = Math.max(height[i], leftHeight[i - 1]);
    }

    let rightHeight = new Array(n).fill(0);
    rightHeight[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightHeight[i] = Math.max(height[i], rightHeight[i + 1]);
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        res += Math.min(leftHeight[i], rightHeight[i]) - height[i];
    }

    return res;
}