/* 
EXPLORE
input: 2 arr of = length
output: arr
    2 input arr's summed
    2nd arr traversed in reverse
[] -> []
assume neg nums possible
assume valid inputs

BRAINSTORM
iteration, creation of result arr
time: O(n) -> iteration
space: O(n) -> length of return arr

PLAN
edge cases: return arr if length = 0
initiate new empty arr
initiate var to hold last element of arr2
iterate over 1st arr
    push arr[i]+arr2 var
    arr2 var = arr2 var[-1]
return result arr

*/

function sumInReverse(arr1, arr2) {
    if (arr1.length === 0) return []

    let result = []
    let arr2Element = arr2.length - 1

    for (let i = 0; i < arr1.length; i++) {
        let pushedElement = arr1[i] + arr2[arr2Element]
        result.push(pushedElement)
        arr2Element-- 
    }

    return result
}

console.log(JSON.stringify(sumInReverse([], [])) === "[]")
console.log(JSON.stringify(sumInReverse([5], [7])) === "[12]")
console.log(JSON.stringify(sumInReverse([1, 2, 3], [10, 20, 30])) === "[31,22,13]")
console.log(JSON.stringify(sumInReverse([1, 2, 3, 4], [40, 30, 20, 10])) === "[11,22,33,44]")