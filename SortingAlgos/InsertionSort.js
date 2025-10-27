/* 
Q. Given an unsorted array, perform insertion sort in ascending order.
Insertion sort iterates through an array and grows a sorted section. At each iteration, it removes one element from the remaining unsorted section, finds the location it belongs within the sorted section and inserts it there. It repeats until no input elements remain.

Sorting is typically done in place, by iterating up the array and growing the sorted section behind it. At each array position, it checks the value against the largest value in the sorted list. If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.

Examples:

Given an array: [3, 1, 2, 4] return [1, 2, 3, 4]
Given an array: [12, 11, 13, 5, 6] return [5, 6, 11, 12, 13]
Given an array: [1] return [1]
*/

function insertionSort(arr) {
    // iteratively insert each element into its correct position, splitting arr into 2 groups: sorted elements & unsorted elements
    // start w/ 2nd element of arr
    for (let i = 1; i < arr.length; i++) {
        // initiate var to hold arr[i], assign var j to be element before i
        let current = arr[i]
        let j = i - 1

        // compare 2nd element w/ 1st element; if 2nd element is smaller, swap them; repeat until entire arr is sorted
        while (j >= 0 && arr[j] > current) {
            // move element at position j one place to the right, move leftward through sorted portion of arr to compare
            arr[j + 1] = arr[j]
            j--
        }

        // insert current element into its correct position
        arr[j + 1] = current
    }

    return arr
}