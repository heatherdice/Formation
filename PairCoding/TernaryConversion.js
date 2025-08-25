/*
'''
Ternary conversion

The decimal system uses the digits 0-9, the binary system uses the digits 0 and 1, and the hexadecimal system uses the digits 0-9 and the letters A-F. The ternary system is a base-3 numeral system that uses the digits 0, 1, and 2.

Given an integer, write a function that converts the number into its base-3 representation. Return the result as a string.

EXAMPLE(S)
convertToBase3(0) === "0"
convertToBase3(1) === "1"
convertToBase3(2) === "2"
convertToBase3(3) === "10"
convertToBase3(4) === "11"
convertToBase3(-5) === "-12

FUNCTION SIGNATURE
function convertToBase3(number) {
def convertToBase3(number: int) -> str:
'''

EXPLORE
input: int
output: str
    base-3 representation of input int

BRAINSTORM
recursion
time: O(n)
space: O(n)

PLAN
empty str result
if !input return str result
divide input by 3
remainder gets concat to str
recurse w/ result of division (minus remainder) gets divided by 3 again

*/

function convertToBase3(number) {
    if (number === 0) return "0"

    if (number < 0) {
        number *= -1
    } 
    
    function helper(quotient, result) {
        // base case
        if (!quotient) return result;
        
        // recursive case
        let newQuotient = Math.floor(quotient / 3);
        // console.log("New Quotient: ", newQuotient)
        let remainder = quotient % 3;
        // console.log("result + remainder: ", result + remainder)

        return helper(newQuotient, remainder + result);
    }

    return helper(number, "")
}

console.log(convertToBase3(0)) // "0"
console.log(convertToBase3(1)) // "1"
console.log(convertToBase3(2)) // "2"
console.log(convertToBase3(3)) // "10"
console.log(convertToBase3(4)) // "11"
// console.log(convertToBase3(-5)) // "-12"
console.log(convertToBase3(10)) // "101"
console.log(convertToBase3(30)) // "1010"
console.log(convertToBase3(31)) // "1011"
console.log(convertToBase3(32)) // "1012"
// console.log(convertToBase3(-33)) // "-1020"
console.log(convertToBase3(92)) // "10102"