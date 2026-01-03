
/* 
Array Reduce Sum Recursively

Given an array of length n, consolidate the sum created by recursively adding index pairs until there's only a single index.

EXAMPLE(S)
[1, 2, 3, 4, 5] => 48

Explanation:
* The next array would be [3, 5, 7, 9] because [1+2, 2+3, 3+4, 4+5]
* The next array would be [8, 12, 16] because [3+5, 5+7, 7+9]
* The next array would be [20, 28] because [8+12, 12+16]
* The final answer would be [48] because [20+28] and there are not enough operands to add

FUNCTION SIGNATURE
function reduceSum(array) {
def reduceSum(array: list[int]) -> int:

this looks like a recursive solution that applies the sliding window approach
base case:
when there is 1 element left in the array

EXPLORE
input: arr
output: arr of 1 element
    recursively adding elements until 1 remains
arr of 1 element returns that arr
[] returns []

BRAINSTORM
recursion
Time: O(n^2) -> each pass, n gets reduced by 1
first pass: n-1
second pass: n-2
third pass: n-3
...
last pass: 1
(n-1)+(n-2)+(n-1) ... + 1 = n(n-1) / 2 => O(n^2)

Space: O(n) -> recursion stack

PLAN
base case: 1 or 0 elements left in the arr, return arr
helper function w/ output arr as argument:
    base case: when you reach the end of the array
        return the latest array
    sliding window technqie - add i and i+1, and append to new array
    
*/

function reduceSum(arr) {
    if (!arr) return []

    function helper(newArr) {
        if (newArr.length === 1) return newArr[0]

        let arr2 = []
        for (let i = 0; i < newArr.length - 1; i++) {
            arr2.push(newArr[i] + newArr[i + 1])
        }

        return helper(arr2)
    }

    return helper(arr)
}

console.log(reduceSum([1,2,3,4,5])) // 48