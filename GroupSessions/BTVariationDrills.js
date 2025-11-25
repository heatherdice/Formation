/* 
1. Count the number of times a target value is in a binary tree
    function count(root, target)
2. Count the number of items in the tree that satisfy a predicate function
    function count(root, predicate)
    function match(value) -> predicate signature, return true or false
3. Find the most frequent value in a binary tree
    function findMostFrequent(root)
4. Find the most frequent value in a binary tree that matches a predicate
    function findMostFrequent(root, predicate)
    function match(value) -> predicate signature, returns true or false
5. Find the smallest positive value in a binary tree
    function smallestPositive(root)
6. Find the smallest positive value but move the best answer logic to a predicate
    function findBest(root, predicate)
    function isValueBetter(previousBest, value) -> predicate signature, new best answer
*/
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

// 1. Count the number of times a target value is in a binary tree
function count(root, target) {
    if (!root) return 0
    return (root.value === target ? 1 : 0)
        + count(root.left, target)
        + count(root.right, target)
}

// 2. Count the number of items in the tree that satisfy a predicate function
function countPredicate(root, predicate) {
    if (!root) return 0

    return (predicate(root.value) ? 1 : 0)
        + countPredicate(root.left, predicate)
        + countPredicate(root.right, predicate)
}

function match(value) {
    return true
}

// 3. Find the most frequent value in a binary tree
function mostFrequentNode(root) {
    
}