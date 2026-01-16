/* 
Coding drill : Map/Reduce Variations on Linked Lists 

What are Map/Reduce functions ? 
    What are Map functions ?
    - Takes a list → applies a function to each element → returns a new list.

    Example : 

    const nums = [1, 2, 3, 4];
    const squares = nums.map(n => n * n);
    console.log(squares);  
    // [1, 4, 9, 16]

    What are reduce functions ? 
    - Takes a list → combines all values into a single result

    - Used for:
        - sum
        - product
        - min/max

const product = nums.reduce((acc, n) => acc * n, 1);
product = reduce(lambda acc, n: acc * n, nums, 1)

Implement these: 

- function reduce(head, accumulator, initialVal) returns single value

Edge cases/Assumptions/Observations : 
    - we can assume accumulator function to be already present, same for initialVal 

Example : 
def accumulator(totalSoFar, nodeVal){
    totalSoFar += nodeVal
    return totalSoFar
}

def accumulator(totalSoFar, nodeVal){
    totalSoFar *= nodeVal
    return totalSoFar
}


Brainstorm/Approach/Plan :
- initialise totalSoFar = initialVal, curr = head
- while curr is not null , we loop over the linked list
    - totalSoFar value is updated with the totalSoFar = accumulator(totalSoFar,curr.value)
    - increment the curr to the next node
-return the totalSoFar

*/

class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

function maxAccumulator(resultSoFar, nodeVal) {
    if (nodeVal > resultSoFar) resultSoFar = nodeVal
    return resultSoFar
}

function minAccumulator(resultSoFar, nodeVal) {
    if (nodeVal < resultSoFar) resultSoFar = nodeVal
    return resultSoFar
}

function productAccumulator(resultSoFar, nodeVal) {
    resultSoFar *= nodeVal
    return resultSoFar
}

function sumAccumulator(resultSoFar, nodeVal) {
    resultSoFar += nodeVal
    return resultSoFar
}

function reduce(head, accumulator, initialVal) {
    let totalSoFar = initialVal
    let curr = head

    while (curr) {
        totalSoFar = accumulator(totalSoFar, curr.val)
        curr = curr.next
    }

    return totalSoFar
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))

console.log(reduce(list1, minAccumulator, Infinity))
console.log(reduce(list1, maxAccumulator, -Infinity))
console.log(reduce(list1, productAccumulator, 1))
console.log(reduce(list1, sumAccumulator, 0))

/* 
Q : function map(head, mapper) - returns new list

Example of mapper function : 
function mapper(nodeVal){
    return nodeVal*nodeVal;
}

Edge cases/Assumptions/Observations : 
- the list remains of same length
- it will be a new list always

Brainstorming/Approach/Plan : 
- we create a sentinel node
- we create curr node = sentinel
- while head node is not null,
    - we call the mapper function with head.val,        newNode =  new ListNode(mapper(head.value))
    - curr.next = newNode
    - curr = curr.next
    - head = head.next
- we can return next of sentinel

*/

function map(head, mapper) {
    let sentinel = new ListNode(0)
    let curr = sentinel

    while(head.next) {
        let newNode = new ListNode(mapper(head.val))
        curr.next = newNode
        curr = curr.next
        head = head.next
    }

    return sentinel.next
}