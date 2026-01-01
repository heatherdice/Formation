/* 
EXPLORE
input: sorted arr, int (k)
output: bool
    whether or not arr contains pair that adds to k
assume [] & k > 0 returns false

BRAINSTORM
recursive divide and conquer
time: O(n) - slice
    dividing arr is O(log n), but using slice specifically changes time complexity
space: O(n) - recursive stack, copy arr

1 5 8 10 13 18
s
      m      

PLAN
set copyArr var to hold arr
helper function w/ argument copyArr
    set start var to copyArr[0]
    set mid var to copyArr[Math.floor([copyArr.length/2])]
    base case: if copyArr.length === 2, return copyArr[start] + copyArr[mid] === k

    check which var is < k
        if neither var < k, return false
        if mid > k, slice copyArr
        copyArr = copyArr.slice(mid)
        if mid < k, slice copyArr
        copyArr = copyArr.slice(start, mid + 1)
    recurse w/ copyArr until length is 2

**********

Realized slice was complicating things, due to the issue of keeping track of indeces vs values 
    slice requires indeces, but I need to keep track of values in order to see if they add up to k

New approach:
use left & right pointer as arguments in recursive helper function
    if left >= right, return false
    initiate sum var = arr[left] + arr[right]
    if sum === k, return true
    if sum < k, recurse w/ left + 1 & right
    otherwise, recurse w/ left & right - 1
return helper called w/ 0 & arr.length - 1
*/

function sumToK(array, k) {

    function helper(left, right) {
        if (left >= right) return false

        let sum = array[left] + array[right]

        if (sum === k) return true
        else if (sum < k) return helper(left + 1, right)
        else return helper(left, right - 1)
    }

    return helper(0, array.length - 1)
}

console.log(sumToK([1, 5, 8, 10, 13, 18], 15) === true)
console.log(sumToK([1, 5, 8, 10, 13, 18], 12) === false)
console.log(sumToK([5], 5) === false)
console.log(sumToK([4], 5) === false)
console.log(sumToK([], 15) === false)
console.log(sumToK([2, 2, 5, 8], 4) === true)
console.log(sumToK([2, 4], 5) === false)
console.log(sumToK([2, 4], 6) === true)
console.log(sumToK([4, 4], 7) === false)
console.log(sumToK([4, 4], 8) === true)
console.log(sumToK([4, 4, 4, 4], 8) === true)