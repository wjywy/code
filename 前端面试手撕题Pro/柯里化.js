/**
 * 
 * @param {Function} fn 
 * @param {number} length 
 * @returns 
 */
const curry = (fn, length = fn.length) => {
    return _curry.call(this, fn, length);
}

/**
 * 
 * @param {Function} fn 
 * @param {*} len 
 * @param  {...any} args 
 */
const _curry = (fn, len, ...args) => {
    return function (...params) {
        const _arr = [...args, ...params];
        if (_arr.length >= len) {
            return fn.apply(this, _arr);
        }

        return _curry.call(this, fn, len, ..._arr);
    }
}

const add = curry((a, b, c) => {
    console.log(a + b + c);
})
const fn = add(1, 2);
fn(3); // console.log(6);