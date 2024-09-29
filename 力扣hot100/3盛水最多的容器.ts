/**
 *
 */
namespace A {
  const maxArea = (height: number[]): number => {
    let i = 0;
    let j = height.length - 1;
    let area = 0;

    while (i < j) {
      const newArea: number = Math.min(height[i], height[j]) * (j - i);

      if (newArea > area) {
        area = newArea;
      }

      if (height[i] < height[j]) {
        i++;
      } else {
        j--;
      }
    }
    return area;
  };
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
}
