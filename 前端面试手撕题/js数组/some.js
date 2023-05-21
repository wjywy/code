/**
 * 一真即真，当检测到数组中有符合条件的值的时候，直接返回，不再执行后续元素
 * item, index, arr
 * @param {Function} fn
 * @param {Array} thisArg
 */

Array.prototype.some_ = function (fn, thisArg) {
    let cur = this

    for (let i = 0; i < cur.length; i++) {
        if (fn.call(cur, cur[i], i, thisArg)) {
            return true
        }
    }
    return false
}

let test = [1, 2, 3, 4]
let res = test.some_((item, index, arr) => {
    return item > 4
})
console.log(res, 'res')