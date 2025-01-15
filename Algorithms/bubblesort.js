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

    // Sort the array [8, 3, 1, 6, 7, 4]

    function anotherSort(lst){
        let swapped = true;
        while(swapped){
            swapped = false;
            for (let i = 0; i < lst.length - 1; i++){
                if (lst[i] > lst[i + 1]){
                    [lst[i], lst[i + 1]] = [lst[i + 1], lst[i]];
                    swapped = true;
                }
            }
        }
        return lst;
    }

    console.log(anotherSort([8, 3, 1, 6, 7, 4, 29, 5, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

    