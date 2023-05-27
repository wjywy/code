/**
 * 防抖: 一定时间内多次点击只执行最后一次
 * 思路：根据防抖的字面意思，所以我们应该知道当用户每一次点击执行事件的按钮时，都需要清除之前的定时器，然后重新设置定时器
 * @param {Function} fn
 * @param {number} delay
 * 节流: 不管触发频率多高，只在单位时间内执行一次
 * 思路：根据节流的字面意思，所以我们应该知道当用户每一次点击执行事件的按钮时，都不能进入节流函数之中，直至delay时间过去
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
                fn.apply(this, arg)
            }, delay)
        }
    }()
}
