/**
 * 
 * @param {Array} arr 
 */
const findMax = (arr) => {
    const set = new Set()
    let ans = 0
    let move = 0

    for (let i = 0; i < arr.length; i++) {
        while(set.has(arr[i])) {
            set.delete(arr[move++])
        }

        set.add(arr[i])
        ans = Math.max(ans, i - move + 1)
    }
}

console.log(typeof [1,2,3,4,5])