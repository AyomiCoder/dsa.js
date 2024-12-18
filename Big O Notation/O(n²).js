// O(n²) means that the time it takes to complete a task grows quadratically (or exponentially) as the input size increases. 


// Write a function to print all unique pairs in an array:
function printAllPairs(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            console.log(`(${numbers[i]}, ${numbers[j]})`);
        }
    }
}

const numbers = [1, 2, 3, 4];
printAllPairs(numbers);


// Find Duplicates
function hasDuplicates(items) {
    for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
            if (items[i] === items[j]) {
                return true; 
            }
        }
    }
    return false;
}

const items = [4, 2, 3, 4, 5];
console.log(hasDuplicates(items));


// Bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    // Outer loop to traverse the entire array
    for (let i = 0; i < n - 1; i++) {
        // Inner loop to compare adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const unsorted = [29, 10, 14, 37, 13];
console.log(bubbleSort(unsorted)); 


console.log(process.memoryUsage());


