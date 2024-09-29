/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * @param s 
 */

namespace A {
    function partition(s: string): string[][] {
        const judge = (str: string, startIndex: number, endIndex: number) => {
            // if (str.length === 0 || str.length === 1) return true;
    
            while(startIndex <= endIndex) {
                if (str[startIndex] !== str[endIndex]) {
                    return false;
                }
                startIndex++;
                endIndex--;
            }
            return true;
        }
    
        const result: string[][] = [];
        const path: string[] = [];
        const recur = (str: string, index: number) => {
            if (index >= str.length) {
                result.push(path.slice());
                return;
            }
    
            for (let i = index; i < str.length; i++) {
                if (!judge(str, index, i)) {
                    continue;
                }
    
                path.push(str.slice(index, i + 1));
                recur(str, i + 1);
                path.pop();
            }
        }
        recur(s, 0);
        return result;
    };
    console.log(partition("aab"));
}