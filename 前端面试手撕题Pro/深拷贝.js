const deepClone = (target) => {
    if (target instanceof Date) return new Date(target);
    if (target instanceof RegExp) return new RegExp(target);
    if (target instanceof Error) return new Error(target);

    if (target instanceof Function) return (...args) => {
        target.call(this, ...args);
    }

    let newObj = Array.isArray(target) ? [] : {};

    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            if (typeof target[key] === 'object') {
                newObj[key] = deepClone(target[key]);
            } else {
                newObj[key] = target[key];
            }
        }
    }

    return newObj;
}