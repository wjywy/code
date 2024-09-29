const debounce = (fn, delay) => {
    let timer = null

    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this)
        }, delay)
    }
}

const throttle = (fn, delay) => {
    let timer = null

    return function() {
        if (timer === null) {
            timer = setTimeout(() => {
                fn.call(this)
                timer = null
            }, delay)
        }
    }
}