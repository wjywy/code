/**
 * 给定一个字符串s， 请你找出其中不含有重复字符的最长子串的长度
 * @param {string} s 
 */
const mostStringLength = (s) => {
    let ans = 0;
    let left = 0;
    const window = new Set(); // 维护从下标 left 到下标 right 的字符
    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        while (window.has(c)) { // 加入 c 后，窗口内会有重复元素
            console.log(c)
            console.log(window)
            window.delete(s[left++])
            console.log(window)
        }
        window.add(c);
        ans = Math.max(ans, right - left + 1); // 更新窗口长度最大值
    }
    return ans;
}
console.log(mostStringLength('abcabcbb'))
