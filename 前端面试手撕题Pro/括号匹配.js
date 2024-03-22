/**
 * 给出所有可能的括号组合
 * @param {number} n 
 */
const search = (n) => {
    const ans = [];
    const recur = (res, left, right) => {
        if (n * 2 === res.length) {
            ans.push(res);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (left > 0) {
                recur(res + '(', left - 1, right);
            }

            if (right > left) {
                recur(res + ')', left, right - 1);
            }
        }
    }

    recur('', n, n);
}