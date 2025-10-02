// O(n^2) time, due to loop + .includes()
function missingNumberIncludes(arr) {
    let index = 0

    while (index <= arr.length) {
        if (arr.includes(index)) {
            index++
        } else {
            return index
        }
    }

    return arr.length
}

// O(n) time, O(n) space
function missingNumberSet(arr) {
    let dataSet = new Set()
    let index = 0

    while(index < arr.length) {
        if (dataSet.has(index)) {
            index++
        } else {
            return index
        }
    }

    return arr.length
}

// O(n) time, O(1) space
function missingNumberBestSpaceTime(arr) {
    for (let i = 0; i < arr.length; i++) {
        const curr = Math.abs(arr[i])
        if (curr < arr.length) {
            arr[curr] *= -1
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return i
        }
    }

    return arr.length
}