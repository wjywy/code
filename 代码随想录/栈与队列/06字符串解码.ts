/**
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数
 * 输入：s = "3[a2[c]]"
* 输出："accaccacc"
 * @param s 
 */

const decodeString = (s: string) => {
    let numStack: number[] = []; // 存倍数的栈
    let strStack: string[] = []; // 存 待拼接的str 的栈
    let num = 0;   // 倍数的
    let result = '';  // 字符串

    for (let char of s) {
        if (!isNaN(Number(char))) {
            num = num * 10 + Number(char);
        } else if (char === '[') {
            strStack.push(result);
            result = '';
            numStack.push(num);
            num = 0;
        } else if (char === ']') {
            let repeatTimes = numStack.pop()!;
            result = strStack.pop() + result.repeat(repeatTimes);
        } else {
            result = result + char;
        }
    }

    return result;
};