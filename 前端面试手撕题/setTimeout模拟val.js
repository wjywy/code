function fakeSetInterval(callback, delay) {
    function monitor() {
        callback()
        setTimeout(monitor, delay)
    }
    setTimeout(monitor, delay)
}

function sayHello() {
    console.log('hello')
}

fakeSetInterval(sayHello, 2000)