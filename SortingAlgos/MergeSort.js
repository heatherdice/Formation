function merge(left, right) {
    // create results arr (need to learn to do this w/ input arr)
    const results = []

    // iterate through left & right subarr's, compare elements, & sort into results arr
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    // add leftover number of left or right arr's if it exists
    return results.concat(left, right)
}

function mergeSort(array) {
    // base case
    if (array.length <= 1) return array

    let middle = Math.floor(array.length / 2) // find middle index of arr
    const left = array.slice(0, middle) // contains 1st 1/2 of arr
    const right = array.slice(middle) // contains 2nd 1/2 of arr

    // recursively call mergeSort on left & right subarr's, store in var's
    let sortedLeft = mergeSort(left)
    let sortedRight = mergeSort(right)

    // run merge function to merge sorted left & right arrays
    return merge(sortedLeft, sortedRight)
}

// Test Cases
console.log(mergeSort([])) // []
console.log(mergeSort([1])) // [1]
console.log(mergeSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]