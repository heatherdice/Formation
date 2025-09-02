/* 
1. Most frequent element in array
    Follow-up: In the case of a tie-breaker, pick the largest value.
2. Least frequent element in array
    Follow-up: In the case of a tie-breaker, pick the largest value.
3. Count the number of elements with exactly 2 occurrences ([8, 9, 8, 3, 9, 4] returns 2)
4. Given an array with all number appearing 2 times and one number appearing 3 times, find the number that shows up 3 times.
    Follow-up: Use a set instead of a hashmap/dictionary
    Follow-up: Given an array with all numbers appearing 3 times and one number appearing only twice, find the number that only shows up twice. You must use hashsets.
*/

function mostFrequentElement(arr) {
    if (!arr) return null
    if (arr.length === 1) return arr[0]

    let frequencies = new Map()

    for (let i = 0; i < arr.length; i++) {
        frequencies.set(arr[i], (frequencies.get(arr[i]) || 0) + 1)
    }

    let max = 0
    let element = null
    for (const [key, value] of frequencies.entries()) {
        if (value > max || (value === max && key > element)) {
            max = value
            element = key
        }
    }

    return element
}

console.log(mostFrequentElement([1, 1, 2, 3, 3, 3, 1, 2, 5, 4, 2, 1])) // 1
console.log(mostFrequentElement([2,3,2,2,5,4,4,4,3,4,5,5,2])) // 4

// Cleaner code
function mostFrequentElementCleaner(arr) {
    if (!arr) return null
    if (arr.length === 1) return arr[0]

    let frequencies = new Map()

    // populate frequency map & track frequencies
    let max = 0
    let result = null

    for (let num of arr) {
        let count = (frequencies.get(num) || 0) + 1
        frequencies.set(num, count)

        if (count > max || (count === max && num > result)) {
        max = count
        result = num
        }
    }

    return result
}

console.log(mostFrequentElementCleaner([1, 1, 2, 3, 3, 3, 1, 2, 5, 4, 2, 1])) // 1
console.log(mostFrequentElementCleaner([2,3,2,2,5,4,4,4,3,4,5,5,2])) // 4
