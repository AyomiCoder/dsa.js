
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// Time complexity: O(n^2)
// Space complexity: O(1)
// The insertion sort algorithm is not efficient on large lists. It is most suitable for small lists with only a few elements.

// Sort the array [8, 3, 1, 6, 7, 4]

console.log(insertionSort([8, 3, 1, 6, 7, 4, 9]));

