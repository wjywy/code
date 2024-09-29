/**
 * 给定一个字符串s， 请你找出其中不含有重复字符的最长子串的长度
 * s = cdchnjdskj
 * @param {string} s 
 */

const findMaxLengthString = (s) => {
    let start = 0
    let move = 0
    let map = new Map()
    let res = ''
    let compared = ''
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            start = map.get(s[i]) + 1
            move = start + 1
            i = start - 1
            map.clear()
            if (i === s.length - 1) break
            res = res.length > compared.length ? res : compared
        } else {
            map.set(s[i], i)
            compared = s.slice(start, move)
            move++

        }
    }
    return Math.max(res.length, compared.length)
}
console.log(findMaxLengthString('abcabcbb'))

/**
 * @param {string} s 
 */
const findMax = (s) => {
    let ans = 0
    let move = 1
    let set = new Set()

    for (let i = 0; i < s.length; i++) {
        let cur = s[i]
        while (set.has(cur)) {
            set.delete(s[move++]) // 这里已经删到了重复字符的第一个
        }
        set.add(cur)
        ans = Math.max(ans, i - move + 1)
    }
    return ans
}