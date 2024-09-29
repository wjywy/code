const reversei = (num) => {
    let start = 0
    let end = num.length - 1
    while (start <= end) {
        let temp = num[end]
        num[end] = num[start]
        num[start] = temp
        start++
        end--
    }
    return num
}
console.log(reversei([1, 2, 3, 4, 5, 6]))