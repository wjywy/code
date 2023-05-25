/**
 * 判断一个数组中是否含有某个指定值，如果有就返回true，否则返回false
 * 可以指定开始查找的下标,如果start为负值，则按升序从array.length + start的索引开始搜索
 * 如果start大于数组长度，则直接返回false，该数组不会被搜索
 * 如果计算出的索引小于0，则整个数组都会被搜索
 * @param {number} start
 * @param {any} arg
 * @param {this} thisArgs
 */

Array.prototype.includes_ = function (arg, start = 0, thisArgs) {
    let cur = this
    let length = cur.length
    start = start < 0 ? length + start : start

    if (start > length) return false
    if (start < 0) start = 0

    for (let i = start; i < length; i++) {
        if (cur[i] === arg) {
            return true
        }
    }
    return false
}
let test = ['wujiayu', 'chengxin', 'guoxx']
let res = test.includes_('chengxin', -1)
console.log(res)

