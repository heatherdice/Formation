/*
'''
Flatten nested list sum

Given a nested array where each element may be 1) an integer or 2) an array, whose elements may be integers or other arrays, compute the sum of all the integers in the nested array.

What is the shape or pattern of this nested array structure?

EXAMPLE(S)
sumNestedList([1, 2, 3]) == 6
sumNestedList([1, [1, 2, 3], 3]) == 10
sumNestedList([1, [1, [1, [1, [1]]]]]) == 5
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

/* 
As a follow-up, modify this code to multiply each list sum by its depth in the nesting. [1, 2] returns 3 since (1 + 2) is only inside one array.

However, [4, [2, 3]] returns 14 because the depth of [2, 3] is 2, so (2+3) × 2 = 10.
4 is added at the end to get 10 + 4 = 14.
While [4, [2, [3]]] returns 26 because the depth of [3] is 3 so 3 × 3 = 9. 
Then the depth of [2, 9] is 2 so (2+9) × 2 = 22.
4 is added at the end to get  22 + 4 = 26.

EXAMPLE(S)
sumNestedListWithDepth([4, [2, 3]]) == 14 because 4 + (2+3)*2
sumNestedListWithDepth([4, [2, [3]]]) == 26 because 4+(2+ (3*3))*2

EXPLORE
same input
output this time is the sum multiplied by depth of arr's
need to get to deepest arr to begin solving

BRAINSTORM
recursion
time: loop O(n), recursion O(n) -> O(n)
space: O(n) -> recursive stack

PLAN
add depth as argument, initialize to 1
initiate total var at 0
loop over arr
    check if element is int
        if yes, add to total & recurse
        if no, total += arr[i]
return total * depth


*/

function sumNestedListWithDepth(arr, depth = 1) {
    let total = 0

    for (const element of arr) {
        if (Array.isArray(element)) {
            total += sumNestedListWithDepth(element, depth + 1)
        } else {
            total += element
        }
    }

    return total * depth
}

console.log(sumNestedListWithDepth([1, 2, 3])) // 6
console.log(sumNestedListWithDepth([1, [2, 3]]))// 11
console.log(sumNestedListWithDepth([1, [2, [3]]])) // 23
console.log(sumNestedListWithDepth([1, [1, 2, 3], 3])) // 16
console.log(sumNestedListWithDepth([1, [1, [1, [1, [1]]]]])) // 153
console.log(sumNestedListWithDepth([1, [1, [2], [], [], [], 3], 3])) // 24
console.log(sumNestedListWithDepth([1, [1, [2], [], [[[[]]]], [], 3], 3])) // 24
console.log(sumNestedListWithDepth([1])) // 1
console.log(sumNestedListWithDepth([[1]])) // 2
console.log(sumNestedListWithDepth([[[1]]])) // 6
console.log(sumNestedListWithDepth([[[[1]]]])) // 24
console.log(sumNestedListWithDepth([[[[]]]])) // 0
