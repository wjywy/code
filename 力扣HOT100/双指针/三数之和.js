/**
 * 给一个整数数组，判断是否存在三元组[nums[i], nums[j], nums[k]]满足 i != j, i != k 且 j != k，同时还满足 nums[i] + nums[j] + nums[k] == 0
 * 请返回所有满足条件的三元组
 * @param {number[]} nums 
 */
const threeNum = (nums) => {
    const result = [];
    let newNums = nums.sort((a, b) => a - b);
    if (nums === null || nums.length < 3) return result;
    for (let i = 0; i < newNums.length; i++) {
        if (newNums[i] > 0) {
            break;
        }
        if (i > 0 && newNums[i] === newNums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = newNums.length - 1;
        while(left < right) {
            let sum = newNums[i] + newNums[left] + newNums[right];
            if (sum === 0) {
                result.push([newNums[i], newNums[left], newNums[right]]);
                while (left < right && newNums[left] === newNums[left + 1]) {
                    left++;
                }
                while (left < right && newNums[right] === newNums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return result;
}