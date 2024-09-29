/**
 * 
 * @param {Array} array 
 */
function quickSort(array) {
    if (array.length <= 1) {
        return array
    }    

    const middle = array[0]
    const left = []
    const right = []

    for (let i = 1; i < array.length; i++) {
        if (array[i] < middle) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }

    return quickSort(left).concat(middle, quickSort(right))
}

const arr = [5, 3, 8, 4, 2, 7, 1];
const sortedArr = quickSort(arr);
console.log(sortedArr);