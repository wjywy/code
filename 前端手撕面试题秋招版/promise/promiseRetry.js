const promiseRetry = (fn, maxAttempt, delay) => {
    return new Promise((resolve, reject) => {
        const recur = (max) => {
            fn()
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                if (max < maxAttempt) {
                    setTimeout(() => {
                        recur(max + 1)
                    }, delay)
                } else {
                    reject(error)
                }
            })
        }
    })
}