// 左边最高的柱子和右边最高的柱子
// 如果 两者的较小值小于或等于柱子的高度，那就说明此柱子装不了水，否则此柱子的蓄水量就等于两者的较小值的柱子减去此柱子的高度
function trap(height) {
    let speed = 0
    let low = 0
    let result = 0
    for (let i = 1; i < height.length; i++) {
        if (height[i] < height[i - 1]) {
            speed = i - 1
            low = i
            let some = 0
            while (height[low] < height[speed] || height[low] > height[low - 1]) {
                console.log(height[low], height[speed])
                some = some + (height[speed] - height[low])
                low = low + 1
            }
            // console.log(low, 'low')
            if (height[low] === undefined) {
                continue
            }
            // console.log(some, 'some')
            result = result + some
            i = low - 1

        }
    }
    return result
}
console.log(trap([4, 2, 3, 1]))