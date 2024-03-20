/**
 * 
 * @param {number[]} height 
 */
const maxWater = (height) => {
    let left = 0;
    let right = height.length - 1;
    let s = 0;

    while(left < right) {
        let curS = (right - left) * Math.min(height[left], height[right]);
        s = Math.max(s, curS);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return s;
}