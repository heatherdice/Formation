/* 
Q. Given an unsorted array, perform selection sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

EXPLORE
input: unsorted arr
output: sorted arr
find smallest element & place at front of arr
find next smallest element for arr[1]
continue until arr is sorted

BRAINSTORM
selection sort
time: O(n^2) - nested loop
space: O(1) - sorting what's already there

PLAN
outer loop traverse arr as a whole
    inner loop to compare each element
        compare arr[i] & arr[j]
        if arr[i] < arr[j], swap
return sorted arr

*/

function selectionSort(arr) {
    if (arr.length <= 1) return arr

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        }
    }

    return arr
}

// Test Cases
console.log(selectionSort([])) // []
console.log(selectionSort([1])) // [1]
console.log(selectionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]