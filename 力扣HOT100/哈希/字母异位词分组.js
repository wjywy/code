// 思路；排序(由于异位词中包含的字母都是相同的，所以在对单词进行排序之后，所得的字符肯定是一样的)
//      计数(统计每个单词中字符出现的次数)

/**
 * 
 * @param {string[]} strs 
 */

const strGroup = (strs) => {
    let map = {};
    for (const str of strs) {
        let count = new Array(26).fill(0);
        for (const c of str) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count] ? map[count].push(str) : map[count] = [str];
    }

    return Object.values(map);
}