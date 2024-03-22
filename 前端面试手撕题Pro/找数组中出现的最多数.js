/**
 * 
 * @param {number[]} nums 
 */
const findMax = (nums) => {
    const map = new Map();
    let maxCount = 0;
    let maxElement;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }

        const count = map.get(nums[i]);
        if (count > maxCount) {
            maxCount = count;
            maxElement = nums[i];
        }
    }

    return maxElement;
}
console.log(findMax([1, 2, 3, 2, 2, 3, 4, 5, 4, 4, 4]))
