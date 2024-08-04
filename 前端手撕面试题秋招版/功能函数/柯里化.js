const curry = (fn, length = fn.length) => {
    return curryFn.call(this, fn, length)
}

const curryFn = (fn, len, ...args) => {
    return function(...params) {
        const arr = [...args, ...params]
        if (arr.length >= len) {
            return fn.apply(this, arr)
        }

        return curryFn.call(this, fn, len, ...arr)
    }
}
