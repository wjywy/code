/**
 * test.map((item, index) => {return item + 1})
 * map有三个参数：item ,index, 数组本身
 * 特点: 不改变原数组
 * @param {Function} fn
 * @param {Array} arr
 * @returns {number}
 */
Array.prototype.map_ = function (fn, arr) {
  let cur = this; /** 绑定this */
  let res = [];
  console.log(cur, "cur");
  let length = cur.length;
  for (let i = 0; i < length; i++) {
    /**遍历数组 */
    res[i] = fn.call(arr, cur[i], i, cur); /**绑定数组后传入三个参数 */
  }
  return res; /** 不改变原数组 */
};

let test = [1, 2, 3, 4];
test.map_((item, index, arr) => {
  console.log(item + 1, "arr");
});
