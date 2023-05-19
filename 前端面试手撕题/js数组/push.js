/**
 * push: 向原数组中最后一项添加元素,返回新数组的长度
 * 不能用箭头函数，箭头函数没有自己的this
 */

Array.prototype.push_ = function (...arg) {
    let cur = this

    for (let i = 0; i < arg.length; i++) {
        cur[cur.length] = arg[i]
    }

    return cur.length
};

let arr = [1, 2, 3, 4]
let newArr = arr.push_({ 'kk': 'kk' })
console.log(arr, newArr)
