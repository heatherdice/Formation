/* 
EXPLORE
input: arr, int
output: bool
    true if < int distinct vals in arr
        distinct val = unique

BRAINSTORM
set
time: O(n)
space: O(n)

PLAN
initiate new set from arr
if set.size > int, return false
*/

function fewerThanTargetDistinct(arr, target) {
    let distinctValues = new Set(arr)

    return distinctValues.size < target
}

console.log(fewerThanTargetDistinct([1,2,2,3,3], 3)) // false
console.log(fewerThanTargetDistinct([1,2,2,3,4], 3)) // false
console.log(fewerThanTargetDistinct([1,1,2,2,2], 3)) // true
console.log(fewerThanTargetDistinct([9], 1)) // false
console.log(fewerThanTargetDistinct([9], 2)) // true
console.log(fewerThanTargetDistinct([8,8,8], 1)) // false
console.log(fewerThanTargetDistinct([8,8,8], 2)) // true
console.log(fewerThanTargetDistinct([8,8,8], 3)) // true
console.log(fewerThanTargetDistinct([6,7,8,9], 1)) // false
console.log(fewerThanTargetDistinct([6,7,8,9], 2)) // false
console.log(fewerThanTargetDistinct([6,7,8,9], 3)) // false
console.log(fewerThanTargetDistinct([6,7,8,9], 4)) // false
console.log(fewerThanTargetDistinct([6,7,8,9], 5)) // true