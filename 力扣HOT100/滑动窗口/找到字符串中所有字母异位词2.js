
/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 * @returns {boolean}
 */
const isAnagrams = (str1, str2) => {
    const s1 = str1.split('').sort().join('')
    const s2 = str2.split('').sort().join('')

    return s1 === s2
}

/**
 * 
 * @param {string} s 
 * @param {string} p 
 * @returns {number[]}
 */
const findAnagrams = (s, p) => {
    const len = p.length
    const ans = []

    if (s.length < len) return []

    for (let i = 0; i < s.length; i++) {
        const cur = s.slice(i, i + len)
        
        if (isAnagrams(cur, p)) {
            ans.push(i)
        }
    }

    return ans
}

console.log(findAnagrams('abab', 'ab'))