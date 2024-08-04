/**
 * @param {string} s
 */
const isValid = (s) => {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else {
            const cur = stack.shift()
            if (s[i] === ')' && cur !== '(') return false

            if (s[i] === ']' && cur !== ']') return false

            if (s[i] === '}' && cur !== '}') return false
        }
    }

    return true
}