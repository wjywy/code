/**
 * 将一个异步函数包装成promise
 * @param {Function} func 
 * @returns 
 */
// 1. 返回一个promise
// 2. 调用func函数，传入参数和回调函数
// 3. 判断是否出错，如果出错则reject，否则resolve
const promisfy = (func) => {
    return function (...args) {
        return new Promise((resolve, reject) => {
            func(...args, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }
}