/* 
EXPLORE
input: arr of ints
output: same arr, but move all odd ints to beginning of arr
    maintain same relative order
use bubble sort
    repeatedly compare adjacent elements
    swap when necessary
assume arr is not sorted

BRAINSTORM
Solution: bubble sort
Time: O(n^2) -> if arr is in reverse sorted order
Space: O(1) -> sorting in place

PLAN
if !arr, return arr
iterate over arr
    nested loop
        check if element is even & next element is odd
            swap elements
return arr
*/

function bubbleSortOdds(arr) {
    if (arr.length <= 1) return arr

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] %2 === 0 && arr[j + 1] %2 !== 0) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

// Test 1: Basic mixed array
console.log(bubbleSortOdds([3, 1, 4, 11, 2, 5])); // [3, 1, 11, 5, 4, 2]

// Test 2: Empty array
console.log(bubbleSortOdds([])); // []

// Test 3: Single element - odd
console.log(bubbleSortOdds([7])); // [7]

// Test 4: Single element - even
console.log(bubbleSortOdds([8])); // [8]

// Test 5: All odds
console.log(bubbleSortOdds([1, 3, 5, 7])); // [1, 3, 5, 7]

// Test 6: All evens
console.log(bubbleSortOdds([2, 4, 6, 8])); // [2, 4, 6, 8]

// Test 7: Odds already on left
console.log(bubbleSortOdds([1, 3, 2, 4])); // [1, 3, 2, 4]

// Test 8: Evens first, odds last
console.log(bubbleSortOdds([2, 4, 1, 3])); // [1, 3, 2, 4]

// Test 9: Negative numbers
console.log(bubbleSortOdds([-3, 2, -1, 4])); // [-3, -1, 2, 4]

// Test 10: Zero included (zero is even)
console.log(bubbleSortOdds([0, 1, 2, 3])); // [1, 3, 0, 2]