/**
 *
 * @param {number[][]} matrix
 */
var spiralOrder = function (matrix) {
  let result = [];
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;

  while (left <= right && top <= bottom) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      console.log(i);
      result.push(matrix[top][i]);
    }

    // 从上到下
    for (let i = top + 1; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }

    if (left < right && top < bottom) {
      // 从右到左
      for (let i = right - 1; i >= left + 1; i--) {
        result.push(matrix[bottom][i]);
      }

      // 从下到上
      for (let i = bottom; i >= top + 1; i--) {
        result.push(matrix[i][left]);
      }
    }

    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    console.log(left, right, top, bottom);
  }

  return result;
};
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
