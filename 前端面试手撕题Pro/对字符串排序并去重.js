/**
 * 
 * @param {string} str 
 */
const str = 'bhjiktghbahs'
const sortAndUnique = (str) => {
    let newArr = str.split("").sort();
    let map = new Map();
    let length = newArr.length;
    for (let i = 0; i < length; i++) {
        if (map.has(newArr[i])) {
            newArr.splice(i, 1);
        } else {
            map.set(newArr[i], newArr[i]);
        }
    }
    return newArr.join('');
}

console.log(sortAndUnique(str));

