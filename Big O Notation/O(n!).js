// O(n!) means the time required grows extremely fast as the input increases. This is because the function is recursive and calls itself multiple times. The factorial function is a common example of O(n!) time complexity. The following code snippet demonstrates a factorial function:

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120