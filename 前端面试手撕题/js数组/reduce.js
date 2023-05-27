/**
 * reduce接受两个参数，第一个参数必选，是一个函数，第二个参数可选，是传递给函数的初始值
 * 函数有以下四个参数
 * total: 必需，初始值，或者计算结束后的返回值
 * currentValue：必需，当前元素
 * currentIndex： 可选，当前元素的索引
 * arr:可选，当前元素的数组对象
 */

Array.prototype.reduce_ = function (fn, initialValue) {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw "Error in params"
    }
    let cur = this
    let initIndex  /**初始化 */
    let res /**累加器 */
    initIndex = arguments.length === 1 ? 1 : 0 /**一个参数，就从数组第一项开始，两个参数就从数组第0项开始 */
    res = arguments.length === 1 ? cur[0] : initialValue /**不传入的时候，应该为undefined */
    for (let i = initIndex; i < cur.length; i++) {
        res = fn.call(this, res, cur[i], i, cur)
    }
    return res
}
let test = [1, 2, 3, 4, 5]
let res = test.reduce_((total, num) => { return total + num })
console.log(res, 'res')