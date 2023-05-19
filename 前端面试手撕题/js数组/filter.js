/**
 * 过滤掉函数返回值为true的元素,不会改变原数组,返回的是过滤后的数组,true保留，false丢弃
 * [1,2,3,4].filter((item, index) => {return item > 2})
 * @param {Function} fn
 * @param {} thisArgs
 */

Array.prototype.filter_ = function (fn, thisArgs) {
    let cur = this

    let length = cur.length

    let res = []

    for (let i = 0; i < length; i++) {
        if (fn.call(cur, cur[i], i, thisArgs)) {
            res.push(cur[i])
        }
    }

    return res
}

let arr = [1, 2, 3, 4]
let newArr = arr.filter_((item, index, arr) => {
    return item > 2
})
console.log(newArr)
console.log(arr)