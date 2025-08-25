function merge(left, right) {
    const results = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    // concatenate results to account for left or right having remaining elements in them
    return results.concat(left, right)
}

function mergeSort(array) {
    // base case
    if (array.length <= 1) return array

    // establish left & right arrays based off of defined middle index
    let middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    // create var to store sorted left & right arrays, created through recursion
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