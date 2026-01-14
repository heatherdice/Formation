/* 
You are given an array of tuples, representing key presses. The first element in the tuple will be a letter and the second will be a timestamp that it was pressed at. You'll return the time required to press the slowest character in the series. The time that it takes to press is equal to the timestamp it was pressed, subtracted by the time the previous character was pressed. Ignore the first character that is pressed - we do not know the time associated with that character.

EXAMPLE(S)
[['a', 0], ['b', 3], ['a', 7], ['c', 8]] returns 4
    'a' at arr[2] took 7 - 3 = 4 seconds to press

EXPLORE
input: arr of tuples
    tuple = char, int
output: int
    largest difference between adjascent timestamps
only concerning ourselves with adjacent tuples
letters can be duplicates - disregard
arr.length <= 1 returns -1
assume data is always valid
assume data is sorted

BRAINSTORM
Solution: initiate var at -Infinity, subtract tuples while iterating, replacing var w/ difference if bigger
Time: O(n) -> length of arr
Space: O(1) -> no add. DS

PLAN
if arr.length <= 1 return -1
initiate difference var to hold -Infinity
sort arr so tuples are occurring in ascending order of ints
iterate forward over arr
    initiate var to hold arr[i][1] - arr[i - 1][1]
    if var > difference
        difference = var
return difference
*/

function slowestKeyPress(keyLog) {
    if (keyLog.length <= 1) return -1

    keyLog.sort((a, b) => a[1] - b[1])
    let result = -Infinity

    for (let i = 1; i < keyLog.length - 1; i++) {
        let timeToPress = keyLog[i][1] - keyLog[i - 1][1]

        if (timeToPress > result) result = timeToPress
    }

    return result
}

/* 
Follow-up: return 5 longest lengths between key presses 

Same process as above, but now need to return 5 of them

min heap vs max heap
    aka priority queues
    top elements are the min & max
    when you remove that element, it takes O(logn) time

can use heap to always maintain 5 elements
    use opposite type of heap to the problem you're trying to solve
    if trying to collect largest element, keep min heap
        5 smallest possible
    when heap grows beyond 5, remove smallest element
        by discarding smallest element at every point, this leaves you with 5 largest elements

EXAMPLE
[['a', 0], ['b', 3], ['a', 7], ['c', 8], ['d', 10], ['d', 12], ['f', 15], ['b', 16]]

[3, 4, 1, 2, 2, 3, 1] -> all differences
would want to return [2, 2, 3, 3, 4]
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    // swap 2 elements
    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    // return 1st element
    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0]; // Smallest element is at the root
    }

    // add new element to heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // move new element up
    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            this.getParentIndex(index) >= 0 && 
            this.heap[this.getParentIndex(index)] > this.heap[index]
        ) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    
    // remove & return smallest element
    extractMin() {
        if (this.heap.length === 0 ) return null
        if (this.heap.length === 1) return this.heap.pop()

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()

        return min
    }

    // restore heap property after deletion by moving new element down
    heapifyDown() {
        let index = 0
        const length = this.heap.length

        while (this.getLeftChildIndex(index) < length) {
            let smallerChildIndex = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)

            if (
                rightChildIndex < length && 
                this.heap[rightChildIndex] < this.heap[smallerChildIndex]
            ) {
                smallerChildIndex = rightChildIndex
            }

            if (this.heap[index] <= this.heap[smallerChildIndex]) {
                break
            }

            this.swap(index, smallerChildIndex)
            index = smallerChildIndex
        }
    }
}


function fiveSlowestPresses(arr) {
    if (arr.length <= 1) return -1

    const topDiffs = new MinHeap()

    for (let i = 1; i < arr.length; i++) {
        let difference = arr[i][1] - arr[i - 1][1]

        if (topDiffs.heap.length < 5) {
            topDiffs.insert(difference)
        } else if (difference > topDiffs.peek()) {
            topDiffs.extractMin()
            topDiffs.insert(difference)
        }
    }

    return topDiffs.heap.sort((a,b) => a - b)
}