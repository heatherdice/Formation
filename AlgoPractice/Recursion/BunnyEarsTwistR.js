/* 
EXPLORE
- input: int
- output: int representing sum of 2's (odd nums) & 3's (even nums) leading up to int total
- example: input of 3
    - 1 = 2
    - 2 = 3
    - 3 = 2
    - output is 2 + 3 + 2 = 7

BRAINSTORM
Base case: int = 0
    - return 0
Recursion
    - determine if input int is odd or even
    - if odd, start by adding 2 to result count
    - if even, start by adding 3 to result count
    - from there, alternate adding 2 or 3 while simultaneously decrementing int

PLAN
- conditional: if int = 0, return 0
- helper function w/ arguments int, result
    - conditional: if int %2 === 0
        - run helper function starting result at 3, decrement int
        - else run helper function starting result at 2, decrement int

*/

function bunnyEarsTwist(int) {
    function helper(int, result = 0) {
        if (int === 0) {
            return result; // explicitly return result when base case is reached
        }

        if (int % 2 === 0) {
            result += 3;
        } else {
            result += 2;
        }

        return helper(int - 1, result);
    }

    return helper(int, 0);
}

// console.log(bunnyEarsTwist(0)); // 0
console.log(bunnyEarsTwist(2)); // 5
console.log(bunnyEarsTwist(3)); // 7
console.log(bunnyEarsTwist(5)); // 12