/**
 * 浅拷贝： 遍历对象，把属性和属性值放在一个新的对象上面就行了
 */

/**
 * 深拷贝: 对于对象要递归调用深拷贝函数
 */

/**
 *
 * @param target
 */
function lowCopy(target) {
  /**只拷贝对象 */
  if (typeof target !== 'object') return

  let newObj = Array.isArray(target) ? [] : new Object()

  for (let key in target) {
    console.log(key, "key");
    newObj[key] = target[key];
  }
  return newObj;
}
console.log(lowCopy([1, 2, 3, 4]));

/**
 * 
 * @param {any} target 
 */
function deepCopy(target) {
  if (target instanceof Date) return new Date(target)
  if (target instanceof RegExp) return new RegExp(target)
  if (target instanceof Error) return new Error(target)

  /**是函数就直接调用 */
  if (target instanceof Function) return function proxy(...args) {
    obj.call(this, ...args)
  }

  let newObj = Array.isArray(target) ? [] : {}

  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      if (typeof target[key] === 'object') {
        newObj[key] = deepCopy(target[key])
      } else {
        newObj[key] = target[key]
      }
    }
  }
  return newObj
}
let obj = [1, 3, 5, 7]
console.log(deepCopy(obj))