/**
 * 1. 因为new的结果是一个新对象，所以在模拟实现的时候，也需要建立一个新对象
 * 2. 实例的_proto_属性会指向构造函数的prototype，因此实例可以访问原型上的属性
 * 3. 如果构造函数有返回值：需要判断返回的值是不是一个对象，如果是一个对象，就需要返回这个对象，如果没有，就该返回什么就返回什么 
 */

/**
 * 
 * @param {Function} fn 
 * @param  {...any} args 
 * step 1. 创建一个空对象
 * step 2. 将obj的_proto_属性指向实例的prototype
 * step 3. 吧构造函数的this执行obj，并执行构造函数fn把结果赋值给result
 * 
 * object.create():创建一个新对象，使用现有的对象来提供新创建的对象的_proto_
 */
function new_(fn, ...args) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw 'error in params'
    }

    let obj = new Object() // 创建一个空对象
    obj._proto_ = fn.prototype // 这样可以访问fn原型上的属性
    let res = fn.call(obj, ...args) // 将构造函数fn的this指向obj,并执行构造函数

    return typeof res === 'object' ? res : obj // new的特性： 如果构造函数的返回值是一个对象，那么就需要返回这个对象，如果不是对象，则该返回什么就返回什么
}

/**
 * test
 */
function test(name, age) {
    console.log(name, age)
    this.length = age
    return {
        name: name,
        age: age
    }
    // return this.length
}
let res = new test('wujiyau', 19)
console.log(res, 'res')
console.log(res.length, 'res.length') // undefined

