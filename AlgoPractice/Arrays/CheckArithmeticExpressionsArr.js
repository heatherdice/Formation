/* 
EXPLORE
input: 4 arr's
    2 lists of operands
    1 list of operators
    1 list of results
output: arr of bool's
    true if operands1[i] operators[i] operands2[i] = results[i]
operators arr will be str's
    operators are either +, -, *, or /
    may need separate conditional for each
assume all input arr's are same length

BRAINSTORM
only need 1 loop, as we are evaluating the same indeces for each arr -> time = O(n), length of arr
result will be an arr -> space = O(n), length of arr
Loop over 1st arr
    conditional checks for each operator
    run operation
    if result = results[i], return true

PLAN
initiate operationResults arr
loop over 1st arr
    conditional statements for what to do based on operand
        check if true, then return true
default return false

*/

function checkArithmeticExpressions(operands1, operators, operands2, results) {
    let operationResults = [];

    for (let i = 0; i < operands1.length; i++) {
        let evaluation;
        if (operators[i] === '+') {
            evaluation = (operands1[i] + operands2[i] === results[i]);
        } else if (operators[i] === '-') {
            evaluation = (operands1[i] - operands2[i] === results[i]);
        } else if (operators[i] === '*') {
            evaluation = (operands1[i] * operands2[i] === results[i]);
        } else {
            evaluation = (Math.round(operands1[i] / operands2[i]) === results[i]);
        }

        operationResults.push(evaluation);
    }

    return operationResults;
}

// // Test Case 1: Basic arithmetic operations
let operands1 = [3, 5, 2, 9];
let operators = ['+', '-', '*', '/'];
let operands2 = [2, 3, 4, 3];
let results = [5, 2, 8, 3];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results));  // Output: [true, true, true, true]

// // Test Case 2: Incorrect results
operands1 = [3, 5, 2, 9];
operators = ['+', '-', '*', '/'];
operands2 = [2, 3, 4, 3];
results = [6, 1, 7, 4];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results));  // Output: [false, false, false, false]

// // Test Case 3: Mixed correct and incorrect results
operands1 = [10, 15, 8, 12];
operators = ['-', '*', '+', '/'];
operands2 = [5, 3, 4, 4];
results = [5, 45, 12, 2];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results));  // Output: [true, true, true, false]

// // Test Case 4: Empty arrays
operands1 = [];
operators = [];
operands2 = [];
results = [];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results));  // Output: []

// Test Case 5: Division with rounding
operands1 = [7, 10, 15, 27];
operators = ['/', '/', '/', '/'];
operands2 = [2, 3, 4, 5];
results = [4, 3, 4, 5];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results));  // Output: [true, true, true, true]