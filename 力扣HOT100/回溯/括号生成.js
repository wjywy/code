/**
 * 数字n代表生成括号的对数，请你设计一个函数，用于能够生成所有可能得并且有效的括号组合
 * @param {number} n
 * @returns {string[]} 
 * 思路：括号对数氛围左括号和右括号的数量，左括号数量为n，右括号数量为n，且左右括号数量应该相等，那么就先将左括号全部生成，然后再生成右括号
 */
const generateParenthesis = (n) => {
    let res = [];

    const recur = (str, left, right) => {
        if (str.length === 2 * n) {
            res.push(str);
            return;
        }

        if (left < n) {
            recur(str + '(', left + 1, right);
        }

        if (right < left) {
            recur(str + ')', left, right + 1);
        }

    }
    recur('', 0, 0);

    return res;
}