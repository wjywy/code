/**
 * 1.3.5
 * 1.3.5.1
 * 返回版本大的version，如果版本相同，返回1
 * @param {string} version1 
 * @param {string} version2 
 */
const compareVersion = (version1, version2) => {
    const arr1 = version1.split('.');
    const arr2 = version2.split('.');

    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        const num1 = arr1[i] ? arr1[i] : 0;
        const num2 = arr2[i] ? arr2[i] : 0;
        if (num1 > num2) {
            return version1;
        } else if (num1 < num2) {
            return version2;
        } else {
            continue;
        }
    }

    return 1;
}