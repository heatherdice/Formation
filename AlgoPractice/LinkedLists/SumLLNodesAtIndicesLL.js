/* 
EXPLORE
input: SLL, sorted arr of indices
output: sum of vals located at nodes of those indices
empty arr or empty list returns 0
0-indexing for LL

BRAINSTORM
Solution: sum var, iteration
    iterate arr & LL at same time?
        while loop over LL
        keep track of LL index w/ var
        if LL index = arr[0], sum += LL val
        increase LL index, arr index
        move to next node
Time: O(n) -> length of list
Space: O(1) -> only returning int, no alteration to input, no additional DS

PLAN
if !arr or !list, return 0
set LL index var to 0
set arr index var to 0
set sum var to 0
loop while node
    if LL index = arr[0]
        sum += LL.val
        arr index ++
    LL index++
    node = node.next
return sum
*/
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}

function sumLLNodesAtIndices(head, arr) {
    if (!head || !arr) return 0

    let arrIndex = 0
    let listIndex = 0
    let sum = 0

    while (head) {
        if (listIndex === arr[arrIndex]) {
            sum += head.val
            arrIndex++
        }

        listIndex++
        head = head.next
    }

    return sum
}

function createList(values) {
    if (!values.length) return null;
    const head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return head;
}

// Test 1: Basic case
let head = createList([5, 6, 7, 8, 9]);
console.log(sumLLNodesAtIndices(head, [0, 2, 4])); // 21

// Test 2: Single index
head = createList([1, 2, 3, 4, 5]);
console.log(sumLLNodesAtIndices(head, [3])); // 4

// Test 3: Empty indices array
head = createList([1, 2, 3]);
console.log(sumLLNodesAtIndices(head, [])); // 0

// Test 4: All indices
head = createList([1, 2, 3]);
console.log(sumLLNodesAtIndices(head, [0, 1, 2])); // 6

// Test 5: Empty list
console.log(sumLLNodesAtIndices(null, [0, 1])); // 0

// Test 6: Single node list
head = createList([10]);
console.log(sumLLNodesAtIndices(head, [0])); // 10

// Test 7: First and last indices only
head = createList([1, 2, 3, 4, 5]);
console.log(sumLLNodesAtIndices(head, [0, 4])); // 6