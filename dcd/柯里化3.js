const curry = (fn, len = fn.length) => {
    return curry_.call(this, fn, len)
}

const curry_ = (fn, len, ...args) => {
    return function (...params) {
        let arg = [...args, ...params]
        if (arg.length >= len) fn.call(this, ...arg)
        else return curry_.apply(this, fn, len, arg)
    }
}