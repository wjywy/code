/**
 * 给定一个长度为n的整数数组height。有n条垂线，第1条线的两个端点是（i，0)和(i，height[i]).
 * 找出其中的两条线，使得它们与×轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量
 * 说明:你不能倾斜容器。
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let maxArea = 0
    let start = 0
    let end = height.length - 1
    for (let i = 0; i < height.length; i++) {
        let newArea = (end - start) * (Math.min(height[start], height[end]))
        maxArea = newArea > maxArea ? newArea : maxArea
        if (height[start] >= height[end]) end--
        else start++
    }
    return maxArea
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))