/*
1. Return the reverse of the array
EXPLORE
input: arr
output: same arr, reversed
reverse in place
odd number of elements = middle element stays put
no elements or 1 element returns

BRAINSTORM
Solution: iterate & swap
Time: O(n) -> length of arr
Space: O(1) -> reversing in place, no additional DS

PLAN
edge case: if length <= 1, return arr
iterate while i < arr length - 1
    swap element at i w/ element at length - 1 - i
return arr


2. Given an array of integers, return an array of elements that match their index. 
The output array should be values that exist in the first array where arr[i] == i

EXPLORE
input: arr ints
output: arr
    elements that match index
    [7,8,9] -> [-1, -1, -1, -1, -1, -1, -1, 7, 8, 9]
    replacing absent or impossible indexes w/ -1
assume [] returns []
assume return new arr
assume arr is not sorted

BRAINSTORM
Solution: find max element, set length to that + 1, arr.fill & iterate
Time: O(n) -> length output arr
Space: O(n) -> length of output arr

PLAN
edge case: return arr if length = 0
set var to hold max of -Infinity
iterate over input arr
    compare elements to max
        if element > max -> max = element
* now should have max element in input arr, can get length of output arr *
output arr = max + 1
set indexMatchArr = Array.from(length).fill(-1)
* now should have arr at correct length w/ -1's *
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
iterate through input arr
    change element in 2nd arr at indexMatchArr[arr element]
return indexMatchArr
*/

function reverseArray(arr) {
    if (arr.length <= 1) return arr

    for (let i = 0; i < arr.length - 1; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    }

    return arr
}

function indexMatch(arr) {
    if (!arr) return arr

    let max = Math.max(...arr) // risky if arr is extremely long
    // can do for (const x of arr) max = Math.max(max, x); instead

    let indexMatchArr = Array(max + 1).fill(-1)

    for (let i = 0; i < arr.length; i++) {
        indexMatchArr[arr[i]] = arr[i]
    }

    return indexMatchArr
}

