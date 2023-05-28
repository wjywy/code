/**
 * nnd  现在才知道call和apply的本质
 * 1. 将函数设为对象的属性
 * let foo = {
 *     value: 1
 * }
 * function bar () {
 *     console.log(this.value)
 * }
 *
 * let foo = {
 *     value: 1,
 *     bar:function () {
 *         console.log(this.value)
 *     }
 * }
 * 2. 执行该函数
 * 3. 删除该函数
 */

/**
 * 
 * @param {Object} context 
 * @param  {...any} args 
 */
Function.prototype.call_ = function (context, ...args) {
    let cur = this // Function

    let signalName = Symbol['signal']
    context[signalName] = cur // 设置一个独一的key，以免和对象内部的其它key同名
    let result = context[signalName](...args) // 执行对象内部的function
    delete context[signalName] // 执行完后删除function，使对象保持不变

    return result // 返回值
}
let foo = {
    value: 1
}
function bar(name, age) {
    console.log(this.value, 'value')
    console.log(name, 'name')
    console.log(age, 'age')
}
bar.call_(foo, 'wujiyau', 18)


/**
 * 
 * @param {Object} context 
 * @param  {...any} arg 
 */
Function.prototype.apply_ = function (context, arg) {
    let cur = this // Function

    let signalName = Symbol('apply')
    context[signalName] = cur
    let result = context[signalName](...arg)
    delete context[signalName]
    return result
}
bar.apply_(foo, ['wujiayu', 18])

/**
 * bind: bind()方法会创建一个新函数。当这个函数被调用时，bind()的第一个参数将作为它运行时的this，之后的一序列参数将会在传递的实参前传入作为它的参数
 * 
 * 返回一个函数
 * 可以传入参数
 */