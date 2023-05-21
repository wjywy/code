/**
 * 遍历数组，三个参数item, index, arr;不改变原数组
 * 检测数组中的每个元素是不是都符合某个条件，如果都是，返回true，如果有一个不是，则返回false，且后面的不再执行
 * @param {Function} fn
 * @param {Array} thisArg
 */

Array.prototype.every_ = function (fn, thisArg) {
    let cur = this

    for (let i = 0; i < cur.length; i++) {
        if (!fn.call(cur, cur[i], i, thisArg)) {
            return false
        }
    }
    return true
}

let test = [1, 2, 3, 4]
let res = test.every_((item, index, arr) => { return item > 2 })
console.log(res)
console.log(test)