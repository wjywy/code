const search = () => {
    const n = nums.length;
    let left = 0;
    let right = n - 1;
    let ans = n;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};
