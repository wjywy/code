/**
 * 给定一个m * n的矩阵，如果一个元素为0，则将其所在行和列的所有元素都设为0，请使用原地算法
 * @param {number[][]} matrix 
 */
const setZeros = (matrix) => {
    let m = matrix.length; // 多少行
    let n = matrix[0].length; // 多少列

    let rowArray = Array.from(m).fill(false);
    let colArray = Array.from(n).fill(false);

    for (let i = 0; i < m; i++){
        for(let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rowArray[i] = true;
                colArray[j] = true;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rowArray[i] || colArray[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}