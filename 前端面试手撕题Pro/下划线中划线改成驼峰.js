/**
 * wu_jia_yu
 */

const change = (str) => {
    const arr = str.split('_');
    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i][0]);
        arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
    }

    return arr.join('');
}

console.log(change('wu_jia_yu'));