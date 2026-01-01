/* 
Given an array of numbers, return the minimum absolute difference between any two numbers.

Example:
[3,6,1,5] returns 1
Explanation: 5 and 6 are the closest pair at 1 apart

EXPLORE
input: arr
output: int
    smallest absolute difference
arr can include pos & neg ints
arr will always have at least 2 elements
arr will not necessarily be sorted

BRAINSTORM
Solution 1: nested loop
    Time: O(n^2)
    Space: O(1)
Solution 2: sort first, take difference of 1st pair of elements
    Time: O(n log n) at best
    Space: O(n)
        **TIP: be sure to know which sorting algo you are using & what that time & space complexity is
**TIP: general assumption is that time is always prioritized over space, but be sure to ask
    therefore, when choosing the most efficient solution, choose the one with the best time complexity

PLAN
sort input arr, store in sortedArr var
initialize absMin var set to Infinity
loop over sortedArr
    set currMin var to the absolute difference between sortedArr[i+1] & sortedArr[i]
    if currMin < absMin, replace absMin val w/ that number
return absMin
*/

function closestNumbers(arr) {
    let sortedArr = arr.sort()
    let absMin = Infinity

    for (let i = 0; i < sortedArr.length - 1; i++) {
        let currMin = Math.abs(sortedArr[i] - sortedArr[i + 1])
        if (currMin < absMin) {
            absMin = currMin
        }
    }

    return absMin
}

console.log(closestNumbers([3,6,1,5])) // 1
console.log(closestNumbers([3,1])) // 2
console.log(closestNumbers([7,9,4,4])) // 0
console.log(closestNumbers([-5,6,3])) // 3
