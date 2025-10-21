/*
'''
Given a binary tree of numbers, and two numbers, A and B, determine if A is an ancestor of B.

EXAMPLE(S)
  3
1   2
A=3 and B=1 returns true
A=3 and B=2 returns true
A=2 and B=3 returns false

  3
1   2
   4 5
A=3 and B=5 returns true
A=2 and B=5 returns true
A=5 and B=2 returns false
'''
Explore
null => return false
cannot find a or b return false


Brainstorm 
Traverse the tree using dfs
    at each node check if node value is === target
    if it is return node
    else
    recurse the left
    recurse the right

Plan 
ancestor_node = search(root,ancestor_target)
    if ancestor_node:
    descendant_node = search(ancestor_node, descendant_target)
    if descendant_node:
        return true
return false
*/

function validAncestor(root, ancestor, descendant) {
    if (!root) return false

    function search(node, ancestor) {
        if (!node) return null

        if (node.value === ancestor) {
        return node
        } 

        return search(node.left, ancestor) || search(node.right, ancestor)
    }

    let ancestorNode = search(root, ancestor)
    
    if (ancestorNode) {
        let descendantNode = search(ancestorNode, descendant)
        if (descendantNode) {
            return true
        }
    }
    
    return false
}

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let tree = new TreeNode(3, new TreeNode(1), new TreeNode(2))

console.log('test case 1', validAncestor(tree, 3, 1)) //true
console.log('test case 2', validAncestor(tree, 2, 3)) //false