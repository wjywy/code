// var longestPalindrome = function(s) {
//     let str = s.split("");
//     const isReverse = (str) => {
//         // console.log(str);
//         let start = 0;
//         let end = str.length - 1;
//         while(start <= end) {
//             if (str[start] !== str[end]) {
//                 return false;
//             }
//             start++;
//             end--;
//         }

//         return true;
//     }

//     // base case: 全都为1
//     // 确定dp数组：dp[i]——长度为i的字符串的最长回文子串
//     // 确定递推公式：

//     let dp = Array(str.length).fill('');
//     console.log(dp);
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (isReverse(str.slice(j, i + 1))) {
//                 console.log(str.slice(j, i + 1));
//                 dp[i] = dp[i].length > dp[j].length ? dp[i] : str.slice(j ,i + 1).join("");
//             }
//         }
//     }

//     console.log(dp);
//     let compareArr = dp.map((item) => item.length);
//     return Math.max(...compareArr);
// };

// console.log(longestPalindrome('babad'));
