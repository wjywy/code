/**
 * 
 * @param {string} s 
 */
var partition = function(s) {
    let ans = [];
    const recur = (res, startIndex) => {
        if (res.join('').length === s.length) {
            ans.push(res.slice());
            return;
        }

        for (let i = startIndex; i < s.length; i++) {
            if (!isCircle(s.slice(startIndex, i + 1))) {
                continue;
            }
            res.push(s.slice(startIndex, i + 1));
            recur(res, i + 1);
            res.pop();
        }
    }
    recur([], 0);

    return ans;
};
    const isCircle = (str) => {
        let left = 0;
        let right = str.length - 1;
        const newArr = str.split('');
        while(left < right) {
            if (newArr[left] !== newArr[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }