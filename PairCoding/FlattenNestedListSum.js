/*
'''
Flatten nested list sum

Given a nested array where each element may be 1) an integer or 2) an array, whose elements may be integers or other arrays, compute the sum of all the integers in the nested array.

What is the shape or pattern of this nested array structure?

As a follow-up, modify this code to multiply each list sum by its depth in the nesting. [1, 2] returns 3 since (1 + 2) is only inside one array.

However, [4, [2, 3]] returns 14 because the depth of [2, 3] is 2, so (2+3) × 2 = 10.
4 is added at the end to get 10 + 4 = 14.
While [4, [2, [3]]] returns 26 because the depth of [3] is 3 so 3 × 3 = 9. 
Then the depth of [2, 9] is 2 so (2+9) × 2 = 22.
4 is added at the end to get  22 + 4 = 26.

EXAMPLE(S)
sumNestedList([1, 2, 3]) == 6
sumNestedList([1, [1, 2, 3], 3]) == 10
sumNestedList([1, [1, [1, [1, [1]]]]]) == 5

sumNestedListWithDepth([4, [2, 3]]) == 14 because 4 + (2+3)*2
sumNestedListWithDepth([4, [2, [3]]]) == 26 because 4+(2+ (3*3))*2

FUNCTION SIGNATURE
function sumNestedList(list) {
function sumNestedListWithDepth(list) {

def sumNestedList(nestedList: list[int]) -> int:
def sumNestedListWithDepth(nestedList: list[int]) -> int:
'''

EXPLORE
input: nested arr's of ints
output: sum of all ints
assume numbers can be pos or neg
if [] return 0 (treat sum as 0)

BRAINSTORM
recursion
time: O(n) -> length of arr
space: O(n) -> recursive stack

PLAN

main fn(arr, sum = 0) 
    loop arr 
        if int add to sum 
        if arr 
        fn(arr, sum)

    return sum     
*/

// [1, [2,3]]
//  ^
// s = 0
// cS = 0
// i = 0
// d = 1

function sumNestedList(arr) {
    let sum = 0

    function helper(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number") {
                sum += arr[i]
            } else {
                helper(arr[i])
            }
        }
    }

    helper(arr)

    return sum 
}

console.log(sumNestedList([1, 2, 3])) // 6
console.log(sumNestedList([1, [2, 3]])) // 6
console.log(sumNestedList([1, [2, [3]]])) // 6
console.log(sumNestedList([1, [1, 2, 3], 3]) )// 10
console.log(sumNestedList([1, [1, [1, [1, [1]]]]])) // 5
console.log(sumNestedList([1, [1, [2], [], [], [], 3], 3])) // 10
console.log(sumNestedList([1, [1, [2], [], [[[[]]]], [], 3], 3])) // 10
console.log(sumNestedList([1])) // 1
console.log(sumNestedList([[1]])) // 1
console.log(sumNestedList([[[1]]])) // 1
console.log(sumNestedList([[[[1]]]])) // 1
console.log(sumNestedList([[[[]]]])) // 0

// console.log(sumNestedListWithDepth([1, 2, 3])) // 6
// console.log(sumNestedListWithDepth([1, [2, 3]]))// == 11
// console.log(sumNestedListWithDepth([1, [2, [3]]])) // 23
// console.log(sumNestedListWithDepth([1, [1, 2, 3], 3])) // 16
// console.log(sumNestedListWithDepth([1, [1, [1, [1, [1]]]]])) // 153
// console.log(sumNestedListWithDepth([1, [1, [2], [], [], [], 3], 3]) == 24)
// console.log(sumNestedListWithDepth([1, [1, [2], [], [[[[]]]], [], 3], 3]) == 24)
// console.log(sumNestedListWithDepth([1]) == 1)
// console.log(sumNestedListWithDepth([[1]]) == 2)
// console.log(sumNestedListWithDepth([[[1]]]) == 6)
// console.log(sumNestedListWithDepth([[[[1]]]]) == 24)
// console.log(sumNestedListWithDepth([[[[]]]]) == 0)


// SOLUTION
// function sumNestedList(list) {
//     let sum = 0;
//     for (let i = 0; i < list.length; i++) {
//         if (Array.isArray(list[i])) {
//             sum += sumNestedList(list[i]);
//         } else {
//             sum += list[i];
//         }
//     }
//     return sum;
// }

// function sumNestedListWithDepth(array, depth = 1) {
//     let total = 0;

//     // iterate over all of the possible choices from here
//     for (const v of array) {
//         if (Array.isArray(v)) {
//             total += sumNestedListWithDepth(v, depth + 1);
//         } else {
//         // it's a number
//         total += v;
//         }
//     }

//   return total * depth;
// }
