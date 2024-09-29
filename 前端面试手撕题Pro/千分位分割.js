/**
 * 34682348723
 */
const ThounsSplit = (num) => {
    const arr = num.split('');
    const len = arr.length;
    let count = 0;
    for (let i = len; i >= 0; i--) {
        if (count % 3 === 0 && count !== 0) {
            arr.splice(i, 0, ',');
        }
        count++;
    }

    return arr.join('');
}

console.log(ThounsSplit('34682348723'))