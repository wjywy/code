/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 */
const topK = (nums, k) => {
    const map = new Map();

    for (let item of nums) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }

    const arr = [];
    for (let [key, value] of map) {
        arr.push([key, value]);
    }
    arr.sort((a, b) => {
        return b[1] - a[1];
    });
    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(arr[i][0]);
    }
}