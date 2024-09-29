/**
 * 
 * @param {number[]} nums 
 */
var majorityElement = function(nums) {
    if (nums.length < 2) {
        return nums[0];
    }
    let length = nums.length / 2;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
           map.set(nums[i], map.get(nums[i]) + 1)
           if (map.get(nums[i]) > length) {
            return nums[i];
           }
        } else {
            map.set(nums[i], 1);
        }
    }
};