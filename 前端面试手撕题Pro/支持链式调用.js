/**
 * 获取str中指定的键的值
 * @param {Object} obj 
 * @param {string} str 
 */
const get = (obj, str) => {
    const arr = str.split('.');

    let res = obj;

    for (const item of arr) {
        if (item in res && typeof res[item] === 'object') {
            res = res[item]
        }
    }

    return res;
}

/**
 * 私用targetValue替换str中指定的键的值
 * @param {*} obj 
 * @param {*} str 
 * @param {*} targetValue 
 */
const set = (obj, str, targetValue) => {
    const arr = str.split('.');
    const lastKey = arr.pop();
    let res = obj;

    for (let item of arr) {
        if (item in res) {
            res = res[item];
        }
    }

    res[lastKey] = targetValue;

    return obj;
}

const object = {
    foo: {
        bar: {
            baz: 'hello'
        }
    }
};

console.log(set(object, 'foo.bar.baz', 'wujiayu'));
