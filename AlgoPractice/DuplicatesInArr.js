/* 
Given an unsorted array, return the number of duplicated elements.

Examples:
input: []
output: 0
explanation: no elements are duplicated

input: [3,1,1,2,3,1,1,1,4]
output: 2
explanation: both 1 & 3 are duplicated

EXPLORE
input: arr
    unsorted
output: int
    representing num of duplicate elements
elements can be duplicated more than once
[], [x] returns 0
assume no alterations to input may be made

BRAINSTORM
Solution 1: use map to track seen elements
Time: O(n) -> length of arr, map
Space: O(n) -> size of map

Solution 2: in-place arr modification, removing or altering duplicates
Time: 
Space:

PLAN
edge case: if arr.length <= 1, return 0
create map
iterate arr
    if not in map, add w/ value of 1
    if in map, increase value by 1
initiate duplicates var, set to 0
iterate map
    for each key w/ val > 1, increment duplicates var
return duplicates

*/

function countDuplicates(arr) {
    if (arr.length <= 1) return 0

    let duplicateTracker = new Map()

    for (let i = 0; i < arr.length; i++) {
        duplicateTracker.has(arr[i]) ? duplicateTracker.set(arr[i], duplicateTracker.get(arr[i]) + 1) : duplicateTracker.set(arr[i], 1)
    }

    let duplicates = 0

    for (const [key, value] of duplicateTracker) {
        if (value > 1) {
            duplicates++
        }
    }

    return duplicates
}

console.log(countDuplicates([])) // 0
console.log(countDuplicates([3,1,1,2,3,1,1,1,4])) // 2
console.log(countDuplicates([1,4,3,5,6,2,3,5,4,7,6])) // 4
