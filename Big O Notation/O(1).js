// O(1) is constant time and it takes the same amount of time tocomplete a task regardless of the amount of data. Itis the fastest notation

// find an index
const numbers = [5, 15, 25, 35, 45];
console.log(numbers[2]);

// check is num is odd or even
function isEven(num) {
    return num % 2 === 0
}
console.log(isEven(4));
console.log(isEven(7));

// assign a value
let x = 100;
y = x;
console.log(y);

// Hash map in Js
const numsSet = new Set([2, 4, 6, 8, 10]);
console.log(numsSet.has(4)); // true
console.log(numsSet.has(5)); // false
