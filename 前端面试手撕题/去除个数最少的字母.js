// aabbc"=>"aabb" "aaabbbce"=>"aaabbb" 去除个数最少的字母

/**
 * @param {string} s
 */
const deleteString = (s) => {
    let map = new Map()
    sArr = s.split('')
    let minCount = Infinity
    for (let i = 0; i < sArr.length; i++) {
        if (map.has(sArr[i])) {
            map.set(sArr[i], map.get(sArr[i]) + 1)
        } else {
            map.set(sArr[i], 1)
        }
        let count = map.get(sArr[i])
        if (minCount >= count) {
            minCount = count
        }
    }
    let res = sArr.filter((item) => {
        return minCount !== map.get(item)
    })
    return res.join('')
}
console.log(deleteString('aaabbbccdecc'))