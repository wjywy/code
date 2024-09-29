/**
 * 
 * @param {Function} fn 
 * @param {number} delay 
 */
const debounce = (fn, delay) => {
    let timer = null;
    return (args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, ...args);
        }, delay)
    }
}

/**
 * 
 * @param {Function} fn 
 * @param {number} delay 
 */
const throttle = (fn, delay) => {
    let mark = null;

    return function(args) {
        if (!mark) {
            mark =  setTimeout(() => {
                mark = null;
                fn.call(this, ...args);
            }, delay)
        }
    }
}