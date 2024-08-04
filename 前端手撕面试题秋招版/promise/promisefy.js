const promisefy = (fn) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, (error, res) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(res)
                }
            })
        })
    }
}