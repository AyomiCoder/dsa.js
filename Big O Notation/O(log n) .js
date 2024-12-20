// This indicates that the time it takes to complete a task grows logarithmically as the input size increases.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (arr[middle] !== target && left <= right) {
        if (target < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === target ? middle : -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
console.log(binarySearch(arr, target));

console.log(process.memoryUsage());


function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const root = new TreeNode(10);
insert(root, 5);
insert(root, 15);
insert(root, 3);
insert(root, 7);
// Write a function to insert a number into a binary search tree:
function insert(node, value) {
    if (value < node.value) {
        if (node.left === null) {
            node.left = new TreeNode(value);
        } else {
            insert(node.left, value);
        }
    } else {
        if (node.right === null) {
            node.right = new TreeNode(value);
        } else {
            insert(node.right, value);
        }
    }
}

// After insertion, the tree should have the structure:
//     10
//    /  \
//   5    15
//  / \
// 3   7

