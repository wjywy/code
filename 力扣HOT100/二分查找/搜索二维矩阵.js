/**
 * 给你一个满足下述两条属性的m * n整数矩阵
 * 1. 每行中的整数从左到右升序排列
 * 2. 每列中的整数从上到下升序排列
 * 给你一个整数target，如果target在矩阵中，返回true，否则返回false
 */
/**
 * 
 * @param {number[][]} matrix 
 * @param {number} target
 */
const searchMatrix = (matrix, target) => {
    /**
     * 
     * @param {number[]} row 
     * @param {number} target 
     */
    const search = (row, target) => {
        let left = 0;
        let right = row.length - 1;

        while(left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (row[middle] > target) {
                right = middle - 1;
            } else if (row[middle] < target) {
                left = middle + 1;
            } else {
                return true;
            }
        }

        return false;
    }

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        if (search(row, target)) {
            return true;
        }
    }

    return false;
}