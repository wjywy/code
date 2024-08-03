/**
 * 给定一个字符串s，请你找出其中不含有重复字符的最长子串的长度
 * 思路: 先创建一个set集合，遍历字符串，如果在遍历过程中发现set存在当前字符，那么就在set中删除之前存在的字符，并在set中添加当前字符，然后最长子串就是i - move + 1
 * @param {string} s 
 */
const noMaxString = (s) => {
    let ans = 0;
    let set = new Set();
    let move = 0;

    for (let i = 0; i < s.length; i++) {
        let cur = s[i];
        while (set.has(cur)) {
            set.delete(s[move++]);
        }
        set.add(cur);
        ans = Math.max(ans, i - move + 1);
    }

    return ans;
}
