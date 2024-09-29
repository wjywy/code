/**
 * 给定两个字符串s和p，找到s中所有p的异位词的子串，返回这些子串的起始索引。
 */

/**
 * 
 * @param {string} s 
 * @param {string} p 
 */
const findString = (s, p) => {
    const judge = (str1, str2) => {
        if (str1.length !== str2.length) return false
        let charCount = new Map()
        for (let i = 0; i < str1.length; i++) {
            charCount.set(str1[i], (charCount.get(str1[i]) || 0) + 1)
        }
        for (let t = 0; t < str2.length; t++) {
            if (!charCount.get(str2[t])) return false
            charCount.set(str2[t], charCount.get(str2[t]) - 1)
        }
        return true
    }
    let start = 0
    let n = p.length
    let result = []
    while (start < s.length - n + 1) {
        let str = s.substring(start, start + n)
        if (judge(str, p)) {
            result.push(start)
        }
        start++
    }
    return result
}
console.log(findString('cbaebabacd', 'abc'))