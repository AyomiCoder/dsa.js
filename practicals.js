// Complete the addOne function to add 1 to every element within the array. Since we are modifying the array directly do not return it.
// Given an array of integers, add one to each element in the array.
function addOne(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] += 1;
    }
}

// Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.Modify the array directly and do not return anything from this function.

function removeNum(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            arr.splice(i, 1);
            i--;
    }
}
}

// Your Goal: Find the Shorter String
// The function shortestString takes two string arguments: str1 and str2.
// Determine which of the two strings is shorter, return that string.

function shortestString(str1, str2){
    return str1.length < str2.length ? str1 : str2;
}

// The function halfValue takes an array of numbers. It should return a new array with all the original values halved. Odd numbers should be rounded up to the nearest whole number.

function halfValue(arr){
    return arr.map(num => Math.ceil(num / 2));
}

// The function countC takes a string str as its only argument. This function should return the number of c's found in the string. It must count both lower-case c and upper-case C.

function countC(str){
    return str.split('').filter(char => char === 'c' || char === 'C').length;
}

// The function countVowels takes a string str as its only argument. This function should return the number of vowels found in the string. It must count both lower-case and upper-case vowels.

function countVowels(str){
    return str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;
}

// Reverse the letters in a given string

function reverseStringWithCommas(str) {
    return str.split(',').map(s => s.split('').reverse().join('')).join(',');
}

// Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.

// A palindrome is a word that is spelled the same forwards as it is backwards.

function isPalindrome(word){
    return word === word.split('').reverse().join('');
}

// Write a function sumTogether that takes two arrays of numbers and returns a single array with the sum of each corresponding index value.

function sumTogether(arr1, arr2){
    return arr1.map((num, idx) => num + arr2[idx]);
}

// Write a function countElements that takes in an array and returns an object a count of each element in the array.

function countElements(arr){
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}

// Write a function playerHandScore that takes an array of cards and returns the total score of the cards.
function playerHandScore(hand) {
    const points = {
        "K": 4,
        "Q": 3,
        "J": 2
    }

    let totalScore = 0;

    for (let card of hand) {
        totalScore += points[card];
    }

    return totalScore;
}

// Write a function that returns the sum of all numbers in an array.
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}