/**
 * 
 * @param {string} s 
 */
const lengthOfSubstring = (s) => {
    let set = new Set()
    let move = 0
    let res = 0

    for (let i = 0; i < s.length; i++) {
        const cur = s[i]
        while(set.has(cur)) {
            set.delete(s[move])
            move++
        }
        set.add(cur)
        res = Math.max(i - move + 1, res)
    }

    return res
}

console.log(lengthOfSubstring('abcabcbb'))
