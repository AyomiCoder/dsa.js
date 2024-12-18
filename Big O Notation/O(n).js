// O(n) means that the time it takes to complete a task grows linearly with the size of the input.

// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

const array = [5, 10, 15, 20, 25];
const target = 15;
const index = linearSearch(array, target);
console.log(index);


// Write a function to find if 9 exists in the list.
function containsNine(numbers) {
    return numbers.includes(9);
}
const numbers = [3, 7, 1, 9, 4, 6];
console.log(containsNine(numbers));



// Write a function to find the total sum.
function calculateTotal(cart) {
    let total = 0;
    for (let item of cart) {
        total += item.price;
    }
    return total;
}

const cart = [
              { price: 5 },
              { price: 15 },
              { price: 19 },
              { price: 24 }
            ];
console.log(calculateTotal(cart))



// Write a function to find the highest grade.
function findHighestGrade(grades) {
    return Math.max(...grades); 
}

const grades = [72, 85, 91, 78, 95, 88];
console.log(findHighestGrade(grades)); 
