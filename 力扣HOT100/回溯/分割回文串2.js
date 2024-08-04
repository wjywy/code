/**
 *
 * @param {string} s
 */
const partition = (s) => {
    const ans = []

    const recur = (res, startIndex) => {
        if (res.join('').length === s.length) {
            ans.push(res.slice())
            return
        }

        for (let i = startIndex; i < s.length; i++) {
            if (!isSimilar(s.slice(startIndex, i + 1))) {
                continue;
            }
            res.push(s.slice(startIndex, i + 1))
            recur(res, i + 1)
            res.pop()
        }
    }

    recur([], 0)
    return ans
};

/**
 *
 * @param {string} str
 */
const isSimilar = (str) => {
  let left = 0;
  let right = str.length - 1;
  const arr = str.split("");

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
