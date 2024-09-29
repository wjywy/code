/**
 * 
 * @param {number[]} num1 
 * @param {number[]} num2 
 */
const twoNum = (num1, num2) => {
    let result = []
    for (let item of num1) {
        for (let data of num2) {
            result.push([item, data])
        }
    }
    return result
}


/**
 * @param {number[][]} args
 * n个数组的组合
 */
const nNum = (args) => {
    const result = []

    const generateNum = (startIndex, eachResult) => {
        if (eachResult.length === args.length) {
            result.push((eachResult.slice()))
            return
        }

        const startNum = args[startIndex]

        for (let i = 0; i < startNum.length; i++) {
            eachResult.push(startNum[i])
            generateNum(startIndex + 1, eachResult)
            eachResult.pop()
        }
    }
    generateNum(0, [])
    return result
}
console.log(nNum([[1, 2, 3], ['a', 'b'], ['x', 'y', 'z']]))