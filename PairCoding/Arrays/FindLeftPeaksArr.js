/* 
Find Left Peaks

Given an array of integers, return a sub-array of 'Left Peaks'. 
A Left Peak is defined as an element that is greater or equal in value to all elements to its right.

EXAMPLE(S)
find_left_peaks([1, 2, 5, 3, 1, 2]) => [5, 3, 2]
find_left_peaks([3, 2, 1]) => [3, 2, 1]

EXPLORE
input: arr of ints
output: arr of ints that qualify as "left peaks"
    left peak >= all elements to its R 
last element in arr will always be in the output
    nothing to compare it to
[] or [x] return the same
input could have pos or neg ints

BRAINSTORM
Solution: reverse iterate, comparing each element to -Infinity
Time: O(n) - single loop iteration, reverse built-in function
Space: O(n) - size of return arr

PLAM
if arr has 1 element or fewer, return arr
initiate empty leftPeaks arr
initiate maxRight var to -Infinity
iterate backwards over arr
    check if arr[i] >= maxRight
        if yes, push element to leftPeaks arr & set maxRight to arr[i]
return leftPeaks arr reversed
*/

function findLeftPeaks(arr) {
    if (arr.length <= 1) return arr

    let leftPeaks = []
    let maxRight = -Infinity

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            leftPeaks.push(arr[i])
            maxRight = arr[i]
        }
    }

    return leftPeaks.reverse()
}

console.log(findLeftPeaks([1, 2, 5, 3, 1, 2])) //[5, 3, 2]
console.log(findLeftPeaks([3, 2, 1])) // [3, 2, 1]