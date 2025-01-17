// 

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// Time complexity: O(n^2)
// Space complexity: O(1)
// The selection sort algorithm is not efficient on large lists. It is most suitable for small lists with only a few elements.

// Sort the array [8, 3, 1, 6, 7, 4]

console.log(selectionSort([8, 3, 1, 6, 7, 4, 9]));