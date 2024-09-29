/**
 * 给定一个字符串s，请你找出其中不含有重复字符的最长子串的长度
 */

function childrenLength(s: string) {
  let arr = s.split("");

  /**寻找是否存在重复 */
  const search = (s: string) => {
    let stringMap = new Map<string, number>();
    let sArr = s.split("");
    for (let i = 0; i < s.length; i++) {
      if (stringMap.has(sArr[i])) {
        return false;
      } else {
        stringMap.set(sArr[i], 1);
      }
    }
    return true;
  };

  let max: number = -Infinity;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (search(s.slice(0, j)) === false) {
        max = s.slice(0, j).length > max ? s.slice(0, j).length : max;
      }
    }
  }

  console.log(max);
  return max;
}
