/**
 * 移动零——双指针(快指针每一次循环都移动，慢指针只有在快指针走到0的时候才移动)
 * @param {number[]} nums 
 */
const moveZero = (nums) => {
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== 0) {
            let temp = nums[slowIndex];
            nums[slowIndex] = nums[fastIndex];
            nums[fastIndex] = temp;
            slowIndex++;
        }
    }
    return nums;
}