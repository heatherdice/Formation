/* 
EXPLORE
input: BST root, target val
output: bool
    whether or not target val is in BST
Q1: assume !root returns false

BRAINSTORM
DFS - node->left->right

PLAN
base case: if !root, return false
if node.val === target, return true
return recurse left || recurse right

*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right
    }
}

function findElementInBST(root, target) {
    if (!root) return false;
    if (root.val === target) return true;

    if (target < root.val) {
        return findElementInBST(root.left, target)
    } else {
        return findElementInBST(root.right, target)
    }
}

// Test case 1: Element is present in the tree
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
console.log(findElementInBST(root, 15) === true);

// Test case 2: Element is not present in the tree
console.log(findElementInBST(root, 20) === false);

// Test case 3: Element is the root
console.log(findElementInBST(root, 10) === true);

// Test case 4: Empty tree
console.log(findElementInBST(null, 10) === false);

// Test case 5: Single element tree
let singleNode = new TreeNode(7);
console.log(findElementInBST(singleNode, 7) === true);
console.log(findElementInBST(singleNode, 8) === false);