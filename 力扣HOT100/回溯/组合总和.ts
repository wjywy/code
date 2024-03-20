/**
 * 
 * @param {number[]} candidates 
 * @param {number} target 
 * 一个集合求组合，需要startIndex，避免重复;多个集合求组合，各个集合之间互不影响，那么就不用startIndex
 */
const combinationSum = (candidates: number[], target: number) => {
    let resArr: number[][] = [];

    const blockTracking = (
      tempArr: number[],
      sum: number,
      startIndex: number
    ) => {
      if (sum > target) return;
      if (sum === target) {
        resArr.push(tempArr.slice());
        return;
      }

      for (let i = startIndex; i < candidates.length; i++) {
        tempArr.push(candidates[i]);
        sum += candidates[i];
        blockTracking(tempArr, sum, i);
        sum -= candidates[i];
        tempArr.pop();
      }
    };

    blockTracking([], 0, 0);
    return resArr;
}
