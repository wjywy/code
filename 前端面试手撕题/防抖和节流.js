/**
 * 防抖: 一定时间内多次点击只执行最后一次
 * @param {Function} fn
 * @param {number} delay
 * 节流: 不管触发频率多高，只在单位时间内执行一次
 */

// 防抖
function debounce(fn, delay) {
    let mark = null
    function debounce_() {
        clearTimeout(mark)
        mark = setTimeout(() => {
            console.log('防抖')
            console.log(this, 'this') // this指的是全局对象
            fn.call(this, arg)
        }, delay)
    }
    return debounce_()
}
debounce(() => { console.log('wuwuwu') }, 1000)

// 节流,两种形式(时间戳和定时器)
function throttle(fn, delay) {
    let timer = null
    return function (...arg) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                console.log('throttle')
                console.log(this, 'this') // this指的是全局对象
                fn.apply(this)
            }, delay)
        }
    }()
}
// throttle(() => { console.log('hhh') }, 1000)
