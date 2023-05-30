/**
 * typeof：对于引用类型，除了可以识别出function，其余的都输出为object。返回一个变量的基本类型
 * instanceOf:检测构造函数的prototype属性是否出现在某个实例对象的原型链上，返回的是一个布尔值。可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型
 * 如果要检测通用类型数据，可以使用Object.prorotype.toString,调用该方法，统一返回'[object xxx]'的字符串
 */

/**
 * 
 * @param {any} obj 
 * @param {new xxx} pro 
 * @returns 
 */
function instance_(obj, pro) {
    if (typeof obj !== 'object') return false
    if (obj === null) return false

    let proto = Object.getPrototypeOf(obj) /**拿到参数的原型对象*/
    console.log(proto, 'proto')
    console.log(Array.prototype)

    /**顺着原型链去找，直到找到相同的原型对象，返回true */
    while (true) {
        if (proto === null) return false

        if (proto === pro.prototype) return true

        proto = Object.getPrototypeOf(proto)
    }
}
console.log(instance_({ name: 'wujiayu' }, Array))
