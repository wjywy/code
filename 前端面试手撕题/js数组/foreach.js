/**
 * forEach,对数组中的每一项都执行该函数，不改变基本类型的原数组，改变引用类型的原数组
 * item,index,arr
 * @param {Function} fn 
 * @param {Array} thisArgs
 */

Array.prototype.forEach_ = function (fn, thisArgs) {
    let cur = this
    console.log(this, 'this')
    let res = []

    for (let i = 0; i < cur.length; i++) {
        res[i] = fn.call(this, cur[i], i, thisArgs)
    }
    return res
}

let test = [1, 2, 3, 4]
let res = test.forEach_((item, index, arr) => {
    console.log(item * 2)
    return item * 2
})
console.log(res, 'res')