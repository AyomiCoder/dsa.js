// implement Bubble Sort

function bubbleSort(arr) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            swapped = true;
        }
        }
    }
    return arr;
    }

    // Time complexity: O(n^2)
    // Space complexity: O(1)
    // The bubble sort algorithm is not efficient on large lists. It is most suitable for small lists with only a few elements.