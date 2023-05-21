/**
 * 防抖: 一定时间内多次点击只执行最后一次
 * @param {Function} fn
 * @param {number} delay
 * 节流: 在一段时间内只执行一次，重复触发只有一次生效
 */

// 防抖
function debounce(fn, delay) {
    let mark = null
    function debounce_() {
        clearTimeout(mark)
        mark = setTimeout(() => {
            console.log('防抖')
            console.log(this, 'this') // this指的是全局对象
            fn.call(this)
        }, delay)
    }
    return debounce_()
}
debounce(() => { console.log('wuwuwu') }, 1000)

// 节流,两种形式(时间戳和定时器)
function throttle(fn, delay) {
    let timer = null
    return function () {
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
