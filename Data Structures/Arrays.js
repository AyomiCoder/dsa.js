function rotateArray(arr, steps) {
    steps %= arr.length;
    return [...arr.slice(-steps), ...arr.slice(0, -steps)];
}

let arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, 2));  // Output: [4, 5, 1, 2, 3]


function removeDuplicates(arr2){
    let result = [];
    arr2.forEach((item) => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
}

let arr2 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr2));  // Output: [1, 2, 3, 4, 5]

// Given an array of integers, find the two numbers whose product is the largest and return their product.

// Example:
// Input: [1, 10, 3, -4, 7, 2]
// Output: 70 (from 10 * 7)

function maxProduct(arr3) {
    let max1 = Math.max(...arr3);
    arr3.splice(arr3.indexOf(max1), 1);
    let max2 = Math.max(...arr3);
    return max1 * max2;
}
let arr3 = [1, 10, 3, -4, 7, 2];
console.log(maxProduct(arr3));  // Output: 70