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