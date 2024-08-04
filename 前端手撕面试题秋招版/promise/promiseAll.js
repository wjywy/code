/**
 * 
 * @param {Array} data 
 * @returns 
 */
const promiseAll = (data) => {
    return new Promise((resolve, reject) => {
        let count = 0
        let res = []
        const addData = (info, index) => {
            res[index] = info
            count = count + 1
            if (count === data.length) {
                resolve(res)
            }
        }

        data.forEach((item, index) => {
            if (item instanceof Promise) {
                item.then((res) => addData(res, index), (error) => reject(error))
            } else {
                addData(item, index)
            }
        })
    })
}