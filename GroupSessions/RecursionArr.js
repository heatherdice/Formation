/* 
Return true if an array has palindrome values 

EXAMPLE
([3, 2, 1, 2, 3] => true,  [3, 2, 1] => false)
*/

// index method -> O(n/2) which reduces to O(n) time & space; constantly reducing
function isPalindrome(arr, index = 0) {
    if (index >= arr.length / 2) return true

    if (arr[index] === arr[arr.length - 1 - index]) {
        return isPalindrome(arr, index + 1)
    }

    return false
}

console.log(isPalindrome([1])) // true
console.log(isPalindrome([1, 2])) // false
console.log(isPalindrome([1, 1])) // true
console.log(isPalindrome([1, 2, 1])) // true

// slicing method -> O(n^2) space, creates arr at every copy; O(n) time
function isPalindromeSlice(arr) {
    if (arr.length <= 1) return true

    if (arr[0] != arr[arr.length - 1]) return false

    return isPalindromeSlice(arr.slice(1, -1))
}

console.log(isPalindromeSlice([1])) // true
console.log(isPalindromeSlice([1, 2])) // false
console.log(isPalindromeSlice([1, 1])) // true
console.log(isPalindromeSlice([1, 2, 1])) // true


/* Shift the elements in an array by 1 and move the last element to the first ([1, 2, 3, 4] => [4, 1, 2, 3]) */

function shiftArr(arr) {
    if (arr.length <= 1) return arr
    
    let last = arr.pop()

    function helper(index) {
        if (index === 0) {
            arr[0] = last
            return arr
        }

        arr[index] = arr[index - 1]
        return helper(index - 1)
    }

    return helper(arr.length - 1)
}

console.log(shiftArr([1])) // [1]
console.log(shiftArr([1,2])) // [2,1]
console.log(shiftArr([1,2,3])) // [3,1,2]
console.log(shiftArr([1,2,3,4])) // [4,1,2,3]
