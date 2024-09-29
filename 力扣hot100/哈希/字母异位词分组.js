/**
 * 
 * @param {string[]} strs
 * @returns {string[][]} 
 */
const groupAnagrams = (strs) => {
    /**
     * 判断两个string是否是字母异位词
     * @param {string} str1
     * @param {string} str2
     * @returns {boolean} 
     */
    const judge = (str1, str2) => {
        if (str1.length !== str2.length) return false
        const charCount = new Map()
        for (const item of str1) {
            charCount.set(item, (charCount.get(item) || 0) + 1)
        }
        for (const item of str2) {
            if (!charCount.get(item)) return false
            charCount.set(item, charCount.get(item) - 1)
        }
        return true
    }

    const result = []
    const select = []
    for (let i = 0; i < strs.length; i++) {
        if (select.includes(strs[i])) continue
        const everyResult = [strs[i]]
        for (let t = i + 1; t < strs.length; t++) {
            if (judge(strs[i], strs[t])) {
                everyResult.push(strs[t])
                select.push(strs[t])
            }
        }
        result.push(everyResult)
    }
    return result
}
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))