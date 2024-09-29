/**
 * 
 * @param {number} n 
 * @param {number[]} num 
 */
const findNum = (n, num) => {
    let result = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i] === n) {
            result = i
        }
    }
    return result
}
console.log(findNum(1, [1, 4, 6, 7, 1, 3, 5, 6, 1, 5, 4, 3]))