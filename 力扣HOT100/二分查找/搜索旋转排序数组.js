/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * 第一步：基于二分法的思路，先找mid
 * 第二步：判断mid 和 first element的大小关系，确立mid所在的区间
 * 第三步：分两部分讨论：
 *      在左侧升序区间中，若target >= left 同时 target < mid, 说明target在mid的左侧，应该在[left, mid]之间找，此时执行right = mid - 1；
 * 否则target在mid的右侧，在[mid, right]之间找， 此时left = mid + 1;
 *      在右侧升序区间中，若target > mid 同时 target <= right , 说明target在mid的右侧，应该在[mid, right]之间找，此时执行left = mid + 1；
 * 否则target在mid的左侧，应该在[left, mid]之间找，此时right = mid -1
 * 
 * 终止条件是，mid element === target，结束
 */
const search = (nums, target) => {
    if (!nums.length) return -1
    let left = 0, right = nums.length - 1, mid
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
}