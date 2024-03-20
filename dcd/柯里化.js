function curry__(fn, len = fn.length) {
    return __curry.call(this, fn, len)
}
function __curry(fn, len, ...args) {
    return function (...params) {
        let newArgs = [...args, ...params]
        if (newArgs.length >= len) {
            fn.call(this, ...newArgs)
        } else {
            __curry.call(this, fn, len, ...newArgs)
        }
    }
}
