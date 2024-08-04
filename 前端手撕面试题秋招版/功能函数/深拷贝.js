const deepClone = (obj) => {
    if (obj instanceof Date) return new Date(obj)

    if (obj instanceof Function) return function() {
        obj.call(this)
    }

    const res = Array.isArray(obj) ? [] : {}

    for (const item in obj) {
        if (obj.hasOwnProperty(item)) {
            if (typeof obj[item] === 'object') {
                res[item] = deepClone(obj[item])
            } else {
                res[item] = obj[item]
            }
        }
    }

    return res
}
