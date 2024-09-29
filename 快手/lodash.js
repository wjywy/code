const get = (obj, str) => {
    const strArr = str.split('.')
    let result = obj
    for (const item of strArr) {
        if (item in result && typeof result === 'object') {
            result = result[item]
        }
    }
    return result
}

/**
 * 
 * @param {*} obj 
 * @param {string} str 
 * @param {string} targetValue 
 */
const set = (obj, str, targetValue) => {
    const strArr = str.split('.')
    const lastKey = strArr.pop()
    let result = obj
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] in result) {
            // console.log(strArr[i], result)
            result = result[strArr[i]]
        }
    }
    console.log(result)
    result[lastKey] = targetValue
}
const object = {
    foo: {
        bar: {
            baz: 'hello'
        }
    }
};

console.log(get(object, 'foo.bar.baz'))