/* 
EXPLORE
- input: BT node
- output: sum of all nodes w/ even-val parent node
- in order for node to be valid, it must:
    - be child
    - have parent that is even
- Q1: assume BT has all valid vals
- Q2: assume BT contains both even & odd vals
- Q3: assume result will be 0 if qual's are not met for any nodes
- root node is not considered parent of itself, will never be included in result sum
- 0 considered an even num, but will not be included in BT for simplicity's sake

BRAINSTORM
need to examine parent first: BFS
    - node->left->right
    - examines level by level
    - uses Q
will need to check every node, to at least see if val is even
    - results in O(n) time
space: O(n)

PLAN
initiate result as 0
initiate Q as [root]
while Q has nodes
    initiate var to track Q size
    iterate over Q w/ for loop
        initiate node var to track node val popped from Q
        check if node val is even
        if yes
            check if node.left
                if yes, result += node.left.val
            check if node.right
                if yes, result += node.right.val
        if node.left
            queue.unshift(node.left)
        if node.right
            queue.unshift(node.right)
return result

*/

class Node {
    constructor(val, right = null, left = null) {
        this.val = val;
        this.right = right;
        this.left = left;
    }
}

function sumNodesWithEvenParent(root) {
    if (!root) return 0;

    let resultSum = 0;
    let queue = [root];

    while (queue.length > 0) {
        let qSize = queue.length;

        for (let i = 0; i < qSize; i++) {
            let node = queue.shift();

            if (node.val % 2 === 0) {
                if (node.left) {
                resultSum += node.left.val;
                }
                if (node.right) {
                resultSum += node.right.val;
                }
            }

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return resultSum;
}

console.log(sumNodesWithEvenParent(null)); // 0

//     6
//  7     8
// 2 7   1 3
let root = new Node(6,
    new Node(7,
        new Node(2),
        new Node(7)
    ),
    new Node(8,
        new Node(1),
        new Node(3)
    )
)
console.log(sumNodesWithEvenParent(root)) // 19

//  2
// 5 9
root = new Node(2,
    new Node(5),
    new Node(9))
console.log(sumNodesWithEvenParent(root)); // 14

// 2
root = new Node(2)
console.log(sumNodesWithEvenParent(root)) // 0

// 1
root = new Node(1)
console.log(sumNodesWithEvenParent(root)) // 0

//  1
// 5 9
root = new Node(1,
    new Node(5),
    new Node(9))
console.log(sumNodesWithEvenParent(root)) // 0

//  1
// 2 2
root = new Node(1,
    new Node(2),
    new Node(2))
console.log(sumNodesWithEvenParent(root)) // 0

//    1
//  2   2
// 9   4 1
root = new Node(1,
    new Node(2,
        new Node(9)
    ),
    new Node(2,
        new Node(4),
        new Node(1)
    )
)
console.log(sumNodesWithEvenParent(root)) // 14

//    1
//  1
// 1 1
root = new Node(1,
    new Node(1,
        new Node(1),
        new Node(1)
    )
)
console.log(sumNodesWithEvenParent(root)) // 0

//    6
//  8
// 4 2
root = new Node(6,
    new Node(8,
        new Node(4),
        new Node(2)
    )
)
console.log(sumNodesWithEvenParent(root)) // 14