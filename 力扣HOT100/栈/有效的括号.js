/**
 * 给定一个只包括括号的字符串s，判断字符串是否有效
 * @param {string} s 
 */
const isValid = (s) => { 
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) return false;
            if (s[i] === ')' && stack.pop() !== '(') return false;
            else if (s[i] === ']' && stack.pop() !== '[') return false;
            else if (s[i] === '}' && stack.pop() !== '{') return false;
        }
    }
    return stack.length === 0;
}
