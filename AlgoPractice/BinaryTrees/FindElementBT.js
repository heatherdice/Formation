/*
EXPLORE
input: BT, int
    int = target element val
output: bool
    whether or not BT contains val
Q1: !root returns null

BRAINSTORM
DFS
don't think it matters what type of DFS we do
may need to go through entire tree if target is found
    will go through entire tree if target is not found
assume worst time complexity is O(n)
space complexity = O(n) (implicit recursive stack)
node -> left -> right
probably won't need helper function
    no additional var's to keep track of

PLAN
base case: if !root, return
if root.val === target, return true

recurse left
recurse right

 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right
    }
}

function DFSTree(root, target) {
    if (!root) return false;
    if (root.val === target) return true;

    return DFSTree(root.left, target) || DFSTree(root.right, target);
}

var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))

console.log(DFSTree(null, 1)) // false
console.log(DFSTree(tree1, 9)) // true
console.log(DFSTree(tree1, 1)) // false
console.log(DFSTree(tree1, 2)) // true
console.log(DFSTree(new TreeNode(1), 2)) // false