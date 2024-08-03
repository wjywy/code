const sleep = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('sleep')
        }, delay)
    })
}

sleep(3000).then((res) => {
    console.log(res)
})

const arr = [1,2,3,4]
arr.shift()
arr.pop()
console.log(arr)