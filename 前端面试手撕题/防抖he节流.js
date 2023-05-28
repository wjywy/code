/**
 * 防抖：多次点击只执行最后一次，因此根据定义，我们可以在每一次点击的时候清空定时器，并再重新加载定时器
 * 节流：一段时间内只执行一次，因此根据定义，我们可以设置在一段时间内，只能执行一次定时器
 */

/**
 * 
 * @param {Function} fn 
 * @param {number} delay 
 */
function _debounce(fn, delay) {
    let mark = null

    return function () {
        clearTimeout(mark)
        mark = setTimeout(() => {
            fn.call(this)
        }, delay)
    }
}

/**
 * 
 * @param {Function} fn 
 * @param {number} delay 
 */
function throttle(fn, delay) {
    let mark = null
    return function (...args) {
        if (!mark) {
            mark = setTimeout(() => {
                mark = null
                fn.call(this, args)
            }, delay)
        }
    }
}