/* 
Write both recursive and iterative approaches to solving a fibonacci sequence, discuss both time and space
*/

// Fibonacci Recursive
// Time: O(2^n) -> every time this function runs, it has to run twice
// Space: O(2^n) -> 2 implicit stacks per function call
function fibonacciRecursive(k) {
    if (k <= 1) return k

    return fibonacciRecursive(k - 1) + fibonacciRecursive(k - 2)
}

console.log(fibonacciRecursive(6)) // 8

// Fibonacci Iterative
// Time: O(n) -> for loop runs n times
// Space: O(1) -> no additional data structures or implicit memory utilized
function fibonacciIterative(k) {
    if (k <= 1) return k

    let prev2 = 0
    let prev1 = 1
    let curr // to hold Fib(n)

    for (let i = 2; i <= k; i++) {
        curr = prev1 + prev2; // Fib(n) = Fib(n-1) + Fib(n-2)
        prev2 = prev1;        // shift values for next iteration
        prev1 = curr;
    }

    return curr;
}

console.log(fibonacciIterative(6)); // 8


/* 
Return the kth number of an alternative sequence that starts with 1, 1, 1 and each subsequent number is the sum of the previous THREE elements. (1, 1, 1, 3, 5, 9, 17...)
Come up with multiple solutions and determine time and space complexity for each
*/

// Tribonacci Recursive
// Time: O(3^n) -> every time this function runs, it has to run 3 times
// Space: O(3^n) -> 3 recursion stacks for each recursive call
function tribonacciRecursive(k) {
    if (k <= 2) return k

    return tribonacciRecursive(k - 1) + tribonacciRecursive(k - 2) + tribonacciRecursive(k - 3)
}

// Tribonacci Iterative
// Time: O(n) -> for loop runs n times
// Space: O(1) -> no additional data structures or implicit space
function tribonacciIterative(k) {
    if (k <= 2) return k

    let first = second = third = 1

    for (let i = 3; i <= k; i++) {
        let next = first + second + third

        first = second
        second = third
        third = next
    }

    return third
}
