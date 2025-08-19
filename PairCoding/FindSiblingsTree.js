/*
'''
Find Siblings

We're given a tree, and we want to find all of the nodes in the tree that have siblings (other nodes under their parent).

Return an array of nodes representing each sibling in any order. No only children can be in your result array.

EXAMPLE(S)
        1
    2      3
  _  4   _  _
should return [2, 3]

        12
    3      4
  1  _   6  _
should return [3, 4]

        12
    3       4
  1   _    6   _
9  7      _ _
should return [3, 4, 9, 7]
'''

EXPLORE
input: tree
output: arr of node vals which have the same parents
empty tree returns empty arr

BRAINSTORM
BFS - queue based
time: O(n) - traverse all nodes
space: O(n) - queue

PLAN
if !root return []
initiate empty result arr
initiate queue with root

while the queue is not empty:
    pop node & store in var
    check if node has node.left & node.right
        push node.left.value & node.right.value to result arr
        queue.unshift both left & right
    else if node.left
        unshift node.left
    else if node.right
        unshift node.right
return result arr

*/

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function findSiblingNodes(root) {
    if (!root) return []

    const siblings = []
    const queue = [root]

    while (queue.length > 0) {

        const node = queue.shift()

        if (node.left && node.right) {
            siblings.push(node.left.value, node.right.value)
        }

        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return siblings
}

const tree1 = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3))
const tree2 = new TreeNode(12, new TreeNode(3, new TreeNode(1), null), new TreeNode(4, new TreeNode(6), null))
const tree3 = new TreeNode(12, new TreeNode(3, new TreeNode(1, new TreeNode(9), new TreeNode(7)), null), new TreeNode(4, new TreeNode(6), null))
const tree4 = new TreeNode(null)

console.log(findSiblingNodes(tree1)) // [2,3]
console.log(findSiblingNodes(tree2)) // [3,4]
console.log(findSiblingNodes(tree3)) // [3,4,9,7]
console.log(findSiblingNodes(tree4)) // []