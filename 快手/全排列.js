/**
 * @param {number[]} num
 */
const all = (num) => {
    let result = []
    let hasUse = new Set()
    const recur = (res) => {
        if (res.length === num.length) {
            result.push(res.slice())
            return
        }

        for (let i = 0; i < num.length; i++) {
            if (hasUse.has(num[i])) continue
            res.push(num[i])
            hasUse.add(num[i])
            recur(res)
            res.pop()
            hasUse.delete(num[i])
        }
    }

    recur([])

    return result
}
console.log(all([1, 2, 3]))