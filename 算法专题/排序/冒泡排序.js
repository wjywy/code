function bubbleSort(arr) {
    const len = arr.length;
    
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // 交换元素
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    
    return arr;
  }
  
  // 测试
  const unsortedArray = [5, 2, 8, 1, 9];
  const sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 5, 8, 9]