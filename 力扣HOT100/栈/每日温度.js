/**
 * @param {number[]} temperatures 
 * 单调栈的思路:
 * 当前元素关注的是它右边的元素
我选择从右遍历，先为最右的元素找目标元素，需要考察的右边元素由少到多

如果当前元素比栈顶大，则让小项逐个出栈，直到当前元素比栈顶小，停止出栈
此时的栈顶元素就是当前项右边的第一个比自己大的元素索引，计算距离
当前项入栈

什么时候用单调栈：通常是一维数组的时候，要寻找任一元素右边第一个比当前元素大的元素，且要求O(n)的时间复杂度

当前项向左找第一个比自己大的位置 —— 从左向右维护一个单调递减栈
当前项向左找第一个比自己小的位置 —— 从左向右维护一个单调递增栈
当前项向右找第一个比自己大的位置 —— 从右向左维护一个单调递减栈
当前项向右找第一个比自己小的位置 —— 从右向左维护一个单调递增栈
 */
const dailyTemprature = (temperatures) => {
    const res = new Array(temperatures.length).fill(0);
    const stack = [];
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while(stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }

        if (stack.length) {
            res[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return res;
}