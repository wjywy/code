/**
 * 柯里化
 * 柯里化是一种使用将多个参数的一个函数转换成一系列使用一个参数的函数的技术
 * 举例来说 一个接收三个参数的普通函数，在进行柯里化之后，柯里化版本的函数接收一个参数并返回接收下一个参数的函数，该函数返回一个接收第三个参数的函数。
 * 最后一个函数在接收第三个参数之后，将之前接收的三个参数应用与原普通函数中，并返回最终结果
 *
 * 总的来说，就是接收一部分参数，返回一个函数接收剩余参数，接收足够参数后，执行原函数
 */

/**
 * 我们已经知道，当柯里化函数接收到足够参数后，就会执行原函数，那么我们如何去确定何时达到足够的参数呢？
 * 有两种思路:
 * 1. 通过函数的length属性，获取函数的形参个数，形参的个数就是所需的参数个数
 * 2. 在调用柯里化工具函数时，手动指定所需的参数个数
 */

/**
 * 将函数柯里化
 * @param fn 待柯里化的函数
 * @param len 所需的参数个数，默认为原函数的形参个数
 */
function curry_(fn, len = fn.length) {
  return _curry.call(this, fn, len);
}

/**
 *
 * @param fn 待柯里化的原函数
 * @param len 所需的参数个数
 * @param args 已接收的参数列表
 */
function _curry(fn, len, ...args) {
  return function (...params) {
    let _args = [...args, ...params]; /**合并参数 */
    if (_args.length >= len) {
      return fn.apply(this, _args); /**参数长度满足，则直接执行 */
    } else {
      /**否则就递归返回柯里化函数，等待参数的传入 */
      return _curry.call(this, fn, len, ..._args);
    }
  };
}

let _fn = curry_(function (a, b, c, d, e) {
  console.log(a, b, c, d, e);
});

let cur = _fn(1, 2, 3, 4);
cur(5)  // print: 1,2,3,4,5
