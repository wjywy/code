/**
 * 暴力循环超时版
 */
function lengthOfLongestSubstring(s: string): number {
    if (s === '') {
      return 0
    }
  
    /**寻找是否存在重复 */
    const search = (s: string) => {
      let stringMap = new Map<string, number>();
      let sArr = s.split("");
      for (let i = 0; i < sArr.length; i++) {
        if (stringMap.get(sArr[i])) {
          return false;
        } else {
          stringMap.set(sArr[i], 1);
        }
      }
      return true;
    };
  
    let max: number = 1;
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        // console.log(s.slice(i, j))
        if (search(s.slice(i, j))) {
          console.log(s.slice(i, j));
          max = s.slice(i, j).length > max ? s.slice(i, j).length : max;
        }
      }
    }
  
    // console.log(max);
    return max;
  };