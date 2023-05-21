/**
 * find， 返回通过测试函数的数组中的第一个值，不会改变原数组,对于空数组，不会执行
 * @param {Function} fn
 * @param {Array} thisArgs
 */

Array.prototype.find_ = function (fn, thisArgs) {
    let cur = this

    for (let i = 0; i < cur.length; i++) {
        if (fn.call(cur, cur[i], i, thisArgs)) {
            return cur[i]
        }
    }
    return undefined
}

let test = [1, 2, 3, 4]
let res = test.find_((item, index, arr) => { return item > 2 })
console.log(res, 'res')