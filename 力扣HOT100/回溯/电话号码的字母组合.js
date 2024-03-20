/**
 * 
 * @param {string[]} digists 
 */
const letterCombination = (digists) => {
    if (digits.length === 0) {
        return [];
    }
     const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    const ans = [];
    
    const recur = (res) => {
        if (res.length === digits.length) {
            console.log(res);
            ans.push(res.join(''));
            return;
        }

        let tempArr = map[digits[res.length]];
        for (let i = 0; i < tempArr.length; i++) {
            res.push(tempArr[i]);
            recur(res);
            res.pop();
        }
    }

    recur([]);

    return ans;
}
