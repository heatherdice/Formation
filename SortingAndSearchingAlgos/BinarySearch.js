/*

Q. Given a sorted array of unique positive integers and a target integer, check if the array contains a target using binary search and return its index.If the array does not contain the target, return -1.

Note:
• Indexes(indices) follow the zero - based numbering rule(i.e.the index of the first element of an array is 0, not 1).
• Other versions of this problem sometimes return true or false, the item being found in the array or not.

Examples:
• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 1 // returns 0
• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 200 // returns 8
• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 154 // returns -1 

EXPLORE
input: sorted arr, target int
    unique pos ints
output: index of target
    if not found, return -1
edge case: last element of arr < target
    return -1

BRAINSTORM
Solution: binary search
Time: O(log n)
Space: O(1)

PLAN
    low = 0 - (start)
    high = length of array - 1
    mid

    while low <= high
        mid = = low + Math.floor((high - low) / 2)

        if our arr[mid] == target
        return mid

        if arr[mid] < target
        low = mid + 1
        else
        high = mid - 1
    
    return -1;

*/

function binarySearch(arr, target) {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)

        if (arr[mid] === target) {
            return mid
        }

        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1
        }
    }

    return -1
}

var array = [1, 2, 3, 6, 8, 13, 113, 153, 200]
console.log(binarySearch(array, 1)) // 0
console.log(binarySearch(array, 200)) // 8
console.log(binarySearch(array, 8)) // 4
console.log(binarySearch(array, 154)) // -1