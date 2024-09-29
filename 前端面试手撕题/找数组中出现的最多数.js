/**
 * 
 * @param {number[]} num 
 */
const findMax = (num) => {
    let map = new Map()
    let maxCount = 0
    let maxElement
    for (let i = 0; i < num.length; i++) {
        if (map.has(num[i])) {
            map.set(num[i], map.get(num[i]) + 1)
        } else {
            map.set(num[i], 1)
        }

        const count = map.get(num[i])
        if (count > maxCount) {
            maxCount = count
            maxElement = num[i]
        }
    }
    return maxElement
}
console.log(findMax([1, 2, 3, 2, 2, 3, 4, 5, 4, 4, 4]))