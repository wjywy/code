/**
 * 柯里化函数
 * @param {Function} fn 
 */
function curry(fn, len = fn.length) {
    return curry_.call(this, fn, len)
}

function curry_(fn, len, ...arg) {
    return function (...params) {
        let args = [...arg, ...params]
        if (args >= len) {
            fn.apply(this, args)
        } else {
            curry_.call(this, fn, len, ...args)
        }
    }
}