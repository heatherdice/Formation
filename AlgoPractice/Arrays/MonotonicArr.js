/* 
EXPLORE
input: arr
output: bool
    whether or not arr is monotonic
    monotonic = all increasing or decreasing ints
[] or [x] returns true

BRAINSTORM
loop or recurse
loop:
    iterating arr = time O(n)
        n = length of arr
    space O(1)
        no added data structures
recurse:
    time O(n)
        n = length of arr
    space O(m)
        m = implicit stack
2 pointer while loop
    slow & fast
    while fast <= arr.length - 1

PLAN
initial check if arr.length <= 1
    return true
slow = 0
fast = 1
compare elements at slow & fast to determine if arr is increasing, decreasing, or same
    separate loops for each instance
return false if loops finds inconsistency
return true by default

*/

function isMonotonic(arr) {
    if (arr.length <= 1) return true;

    let slow = 0;
    let fast = 1;

    if (arr[slow] === arr[fast]) {
        while (arr[slow] === arr[fast]) {
            slow++;
            fast++;
        }
    }

    if (arr[slow] >= arr[fast]) {
        while (fast <= arr.length) {
            slow++;
            fast++;

            if (arr[slow] < arr[fast]) {
                return false;
            }
        }
    }

    if (arr[slow] <= arr[fast]) {
        while (fast <= arr.length) {
            slow++;
            fast++;

            if (arr[slow] > arr[fast]) {
                return false;
            }
        }
    }

    return true;
}

console.log(isMonotonic([]) === true)
console.log(isMonotonic([5]) === true)
console.log(isMonotonic([5,10]) === true)
console.log(isMonotonic([10,5]) === true)
console.log(isMonotonic([1,5,5,10]) === true)
console.log(isMonotonic([10,5,5,1]) === true)
console.log(isMonotonic([10,5,5]) === true)
console.log(isMonotonic([5,5,10]) === true)
console.log(isMonotonic([4,2,8]) === false)
console.log(isMonotonic([8,2,4]) === false)
console.log(isMonotonic([8,2,4,2]) === false)
console.log(isMonotonic([5,5,5]) === true)