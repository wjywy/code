/**
 * 实现数组的扁平化
 * @param {}
 * @param {} 无限
 */

/** 支持无限层级扁平化*/
Array.prototype.flat_ = function (count) {
    let cur = this
    const flatll = (arr, count) => {
        let newArr = []
        for (let item of arr) {
            if (Array.isArray(item) && count > 0) {
                newArr.push(...flatll(item, count - 1))
            } else {
                newArr.push(item)
            }
        }
        return newArr
    }
    return flatll(cur, count)
}

let test = [1, 2, [3, [2, [5, 5], 3], 4, [7, 8, 9]], 5, [5, 5, 5], 6]
console.log(test.flat_(2))



function myFlat(arr, count = 1) {
    let newArr = []
    for (let item of arr) {
        if (Array.isArray(item) && count > 0) {
            newArr.push(...myFlat(item, count - 1))
        } else {
            newArr.push(item)
        }
    }
    return newArr
}
let test_ = [1, 2, [3, [2, 3], 4, [7, 8, 9]], 5, [5, 5, 5], 6]
console.log(myFlat(test_, 1))