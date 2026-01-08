/* 
EXPLORE
input: arr
output: index of min & max element in arr
use recursion
write 2 functions
assume [] returns undefined

BRAINSTORM
recursion
    time: O(n) -> length of arr
    space: O(n) -> recursive stack (dependent upon arr length)
can use helper function or add argument for min or max

PLAN
find min:
    edge case: if no arr elements, return undefined
    helper function w/ minElementIndex, currIndex argument
        base case: !arr.length, return minElementIndex
        if arr[currIndex] < arr[minElementIndex]
            minElementIndex = currIndex
        recurse w/ minElementIndex, currIndex + 1
initial helper call w/ 0 & 0 as initial arguments

*/

function findMinIndex(arr) {
    if (!arr) return undefined;

    function helper(minElementIndex, currIndex) {
        if (currIndex > arr.length) return minElementIndex;

        if (arr[currIndex] < arr[minElementIndex]) {
            minElementIndex = currIndex;
        }

        return helper(minElementIndex, currIndex + 1);
    }

    return helper(0, 0);
}

console.log(findMinIndex([12, 1234, 45, 67, 1]) == 4)
console.log(findMinIndex([10, 20, 30]) == 0)
console.log(findMinIndex([30, 20, 10]) == 2)
console.log(findMinIndex([20, 10, 30]) == 1)
console.log(findMinIndex([10, 20, 30, 10]) == 0)
console.log(findMinIndex([10, 10, 10, 10]) == 0)
console.log(findMinIndex([11]) == 0)
console.log(findMinIndex([8, 6, 7, 5, 3, 7]) == 4)
console.log(findMinIndex([-10, -5, -3, -30]) == 3)
console.log(findMinIndex([15, 11]) == 1)
console.log(findMinIndex([15, 11, 12, 13, 14]) == 1)
console.log(findMinIndex([15, 17, 16, 12, 13, 14]) == 3)


function findMaxIndex(arr) {
    if (!arr) return undefined;

    function helper(maxElementIndex, currIndex) {
        if (currIndex > arr.length) return maxElementIndex;

        if (arr[currIndex] > arr[maxElementIndex]) {
            maxElementIndex = currIndex;
        }

        return helper(maxElementIndex, currIndex + 1);
    }

    return helper(0, 0);
}

console.log(findMaxIndex([12, 1234, 45, 67, 1]) == 1)
console.log(findMaxIndex([10, 20, 30]) == 2)
console.log(findMaxIndex([30, 20, 10]) == 0)
console.log(findMaxIndex([20, 10, 30]) == 2)
console.log(findMaxIndex([10, 20, 30, 10]) == 2)
console.log(findMaxIndex([10, 10, 10, 10]) == 0)
console.log(findMaxIndex([11]) == 0)
console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) == 0)
console.log(findMaxIndex([-10, -5, -3, -30]) == 2)
console.log(findMaxIndex([15, 11]) == 0)
console.log(findMaxIndex([15, 11, 12, 13, 14]) == 0)
console.log(findMaxIndex([15, 17, 16, 12, 13, 14]) == 1)