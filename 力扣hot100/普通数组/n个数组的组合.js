function getArrayCombinations(arrays) {
    const combinations = [];

    // 递归函数，用于生成组合
    function generateCombinations(currentIndex, currentCombination) {
        if (currentIndex === arrays.length) {
            combinations.push(currentCombination);
            return;
        }

        const currentArray = arrays[currentIndex];

        for (let i = 0; i < currentArray.length; i++) {
            const newCombination = [...currentCombination, currentArray[i]];
            generateCombinations(currentIndex + 1, newCombination);
        }
    }

    generateCombinations(0, []);

    return combinations;
}

// 示例用法
const arrays = [[1, 2, 3], ['a', 'b'], ['x', 'y', 'z']];
const combinations = getArrayCombinations(arrays);
console.log(combinations);