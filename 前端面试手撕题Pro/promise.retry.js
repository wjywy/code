/**
 * 
 * @param {Promise} promiseFn 
 * @param {number} maxAttemps 
 * @param {number} delay 
 */
const promiseRetry = (promiseFn, maxAttemps, delay) => {
    return new Promise((resolve, reject) => {
        const retry = (attempt) => {
            promiseFn()
                .then(() => {
                    resolve();
                })
                .catch(() => {
                    if (attempt < maxAttemps) {
                        setTimeout(() => {
                            retry(attempt + 1);
                        }, delay)
                    } else {
                        reject();
                    }
                })
        }
        retry(1);
    })
}