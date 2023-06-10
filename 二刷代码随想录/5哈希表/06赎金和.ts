/**
 * 赎金信：给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，
 * 判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。
 * 如果可以构成，返回 true ；否则返回 false.
 */

const judgeStr = (ransomNote: string, magazine: string): boolean => {
  if (ransomNote.length > magazine.length) return false;
  let newRansom = ransomNote.split("");
  let newMagazine = magazine.split("");
  for (let i = 0; i < newRansom.length; i++) {
    if (newMagazine.indexOf(newRansom[i]) !== -1) {
      newMagazine.splice(magazine.indexOf(newRansom[i]), 1);
    } else {
      return false;
    }
  }
  return true;
};
console.log(judgeStr("aab", "ahjsnndab"));
