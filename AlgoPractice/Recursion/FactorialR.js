/* 
EXPLORE
input: int
output: int!
use recursion

BRAINSTORM
n! ex: 3! = 1 * 2 * 3 = 6

PLAN
recurse w/ n - 1

*/

function factorial(n) {
    if (n <= 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(12)) // 479001600
console.log(factorial(10)) // 3628800
console.log(factorial(5)) // 120
console.log(factorial(3)) // 6
console.log(factorial(2)) // 2
console.log(factorial(1)) // 1