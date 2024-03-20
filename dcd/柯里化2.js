/**
 * 
 * @param {Function} fn 
 * @param {number} length 
 * @returns 
 */
function Curry(fn, length = fn.length) {
    return curry___.call(this, fn, length)
}

function curry___(fn, length, ...args) {
    return function (...params) {
        let argMany = [...args, ...params]

        if (argMany.length > length) {
            fn.call(this, ...argMany)
        } else {
            return curry___.call(this, fn, length, ...argMany)
        }
    }
}