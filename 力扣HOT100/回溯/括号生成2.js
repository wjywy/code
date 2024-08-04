/**
 * 
 * @param {number} n 
 */
const generate = (n) => {
    const ans = []

    const recur = (str, left, right) => {
        if (str.length === n * 2) {
            ans.push(str.slice())
            return
        }

        if (left < n) {
            recur(str + '(', left++, right)
        }

        if (right < left) {
            recur(str + ')', left, right++)
        }
    }

    recur('', 0, 0)

    return ans
}