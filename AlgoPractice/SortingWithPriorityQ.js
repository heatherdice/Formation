/* 
PRIORITY QUEUE
    min priority: removes smallest val's 1st
    max priority: removes largest val's 1st
    typically O(log n)

EXPLORE
    input: unsorted arr
    output: sorted arr
        use priority queue to sort
    keep O(1) space
        no recursion
    place all val's into queue, remove one at a time to sort arr

BRAINSTORM
Algo: priority queue
Time: O(log n)
Space: O(1)

PLAN
if arr.length <= 1, return arr
create new priority queue
loop over arr
    push elements to queue
iterate over arr backwards
    set arr[i] = popped element from queue
return arr

*/

class PriorityQueue {
    // By default sorts in increasing order, so largest values are returned first (max-priority queue)
    // But, we can pass a custom comparator.
    constructor(comparator = (a, b) => a - b) {
        this.comparator = comparator;
        this.data = [];
        this.length = 0;
    }

    push(v) { // O(n log n) but with a real priority queue will be O(log n)
        this.data.push(v);
        this.data.sort(this.comparator);
        this.length = this.data.length;
    }

    pop() { // O(1) but with a real priority queue will be O(log n)
        const v = this.data.pop();
        this.length = this.data.length;
        return v;
    }

    peek() { // O(1)
        return this.data[this.data.length - 1];
    }
}

// Example usage
const pq = new PriorityQueue();
pq.push(2);
pq.push(1);
console.log(pq.pop()); // prints 2
pq.push(3);
console.log(pq.pop()); // prints 3


function priorityQueueSort(arr) {
    const priorityQueue = new PriorityQueue()

    // add each arr element to the queue, which will be sorted per the class push function
    for (const element of arr) {
        priorityQueue.push(element)
    }

    // iterate backwards because queue's pop function pops last element off queue, which is the smallest number
    for (let i = arr.length - 1; i >= 0; i--) {
        // add smallest number in queue one at at a time to arr
        arr[i] = priorityQueue.pop()
    }

    return arr
}

console.log(priorityQueueSort([4, 2, 9, 1]))
console.log(priorityQueueSort([-1, -4, 10, 3, 2]))