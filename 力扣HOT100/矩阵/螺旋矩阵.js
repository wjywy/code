/**
 * 给你一个m行n列的矩阵matrix，请按照顺时针螺旋的顺序，返回矩阵中的所有元素。
 * @param {number[][]} matrix 
 */
const spiralOrder = (matrix) => {
    const result = [];
    const m = matrix.length; // 多少行
    const n = matrix[0].length; // 多少列
    let top = 0;
    let bottom =  m - 1;
    let left = 0;
    let right = n - 1;

    while (top <= bottom && left <= right) {
        // 从做到右
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }

        // 从上到下
        for (let i = top + 1; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }

        if (left < right && top < bottom) {
            // 从右到左
            for (let i = right - 1; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }

            // 从下到上
            for (let i = bottom - 1; i > top; i--) {
                result.push(matrix[i][left]);
            }   
        }
        top++;
        right--;
        bottom--;
        left++; 
    }

    return result;
}