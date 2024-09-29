// 这里假设n是一个有序数组	
const twoSplit = (n, target) => {
    let left = 0
    let right = n.length - 1
    let middle = Math.floor((right + left) / 2)
    while (left <= right) {
        if (target < n[middle]) {
            right = middle
            middle = Math.floor((right - left) / 2)
        } else if (target > n[middle]) {
            left = middle
            middle = Math.floor((right - left) / 2)
        } else if (target === n[middle]) {
            return middle
        }
    }
    return false
}
console.log(twoSplit([1, 3, 5, 7, 9, 20, 34], 3))