/* 
EXPLORE
- input: BT root
- output: bool representing immediately distinct tree
    - true if all nodes on each level have unique vals
    - false otherwise
assume null or empty tree returns true
assume single-val tree returns true

BRAINSTORM
BFS, compare parent to children
Time: O(n) if tree has > 1 node
Space: O(1) -> no additional data structures

PLAN
if !root return true
initialize new queue as [root]
while queue.length > 0
    set node var to first element of queue
    if node.left
        compare node.val to node.left.val
        if same, return false
        otherwise, push node.left to queue
    do same if node.right
return true

*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function treeIsImmediatelyDistinct(root) {
    if (!root) return true;

    let treeQ = [root];

    while (treeQ.length > 0) {
        let node = treeQ.shift();

        if (node.left) {
            if (node.left.val === node.val) {
                return false;
            }
            treeQ.push(node.left);
        }

        if (node.right) {
            if (node.right.val === node.val) {
                return false;
            }
            treeQ.push(node.right);
        }
    }

    return true;
}

//    6
//  8
// 4 8
// treeQ = [8,]
// node = 6


console.log(treeIsImmediatelyDistinct(null) === true)

//    1
//  1   2
// 3 4    6
let root = new TreeNode(1,
    new TreeNode(1,
        new TreeNode(3),
        new TreeNode(4)
    ),
    new TreeNode(2,
        null,
        new TreeNode(6)
    )
)
console.log(treeIsImmediatelyDistinct(root) === false)

//    1
//  2   2
// 5 9
root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(5),
        new TreeNode(9)
    ),
    new TreeNode(2)
)
console.log(treeIsImmediatelyDistinct(root) === true)

//  2
// 5 9
root = new TreeNode(2,
    new TreeNode(5),
    new TreeNode(9))
console.log(treeIsImmediatelyDistinct(root) === true)

// 2
root = new TreeNode(2)
console.log(treeIsImmediatelyDistinct(root) === true)

//  1
// 5 1
root = new TreeNode(1,
    new TreeNode(5),
    new TreeNode(1))
console.log(treeIsImmediatelyDistinct(root) === false)

//  1
// 2 2
root = new TreeNode(1,
    new TreeNode(2),
        new TreeNode(2))
console.log(treeIsImmediatelyDistinct(root) === true)

//    1
//  2
// 1
root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(1)
    )
)
console.log(treeIsImmediatelyDistinct(root) === true)

//    1
//  1
// 1 1
root = new TreeNode(1,
    new TreeNode(1,
        new TreeNode(1),
            new TreeNode(1)
    )
)
console.log(treeIsImmediatelyDistinct(root) === false)

//    6
//  8
// 4 8
root = new TreeNode(6,
    new TreeNode(8,
        new TreeNode(4),
            new TreeNode(8)
    )
)
console.log(treeIsImmediatelyDistinct(root) === false)

//    6
//   8
//  4
// 8
root = new TreeNode(6,
    new TreeNode(8,
        new TreeNode(4,
            new TreeNode(8)
        )
    )
)
console.log(treeIsImmediatelyDistinct(root) === true)

//    6
//   8
//  4
// 6
root = new TreeNode(6,
    new TreeNode(8,
        new TreeNode(4,
            new TreeNode(6)
        )
    )
)
console.log(treeIsImmediatelyDistinct(root) === true)