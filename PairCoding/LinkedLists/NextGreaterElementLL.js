/*
'''
Next Greater Element

Given a list of positive and distinct integers, find the next greater element for each element. The next greater element (NGE) of an element is the next element which is greater than the current element's value. Formally, the NGE of element A[i] is A[j] where A[j] > A[i], j > i, and j is the lowest possible index that meets this criterion.

For example in the array [1, 3, 2, 5, 4, 8], the NGE of 3 is 5 since 5 is greater than 3 and the index of element 5 is the lowest among all elements to the right of 3 which satisfies the 'greater than' relation.

EXAMPLE(S)
next_greater_element([2, 7, 3, 5, 4, 6, 8]) == [7, 8, 5, 6, 6, 8, -1]
next_greater_element([5, 4, 3, 2, 1]) == [-1, -1, -1, -1, -1]

FUNCTION SIGNATURE
def findNextGreaterElements(input: List[int]) -> List[int]
'''

EXPLORE
input: arr of pos ints
output: arr of NGE's
    NGE = next greatest element from current element
    if no NGE, add -1 to arr
    arr w/ no NGE's would consist of all -1's
returning new arr or changing values in place?
    assume that we're altering the input arr

BRAINSTORM
brute force: nested loop, returning new arr
time: O(n * n) -> nested loop where each loop runs n times
space: O(n) if counting output as space

stack, changing values in place
time:
space: 

stack = 8, 6, 5
[2, 7, 3, 6, 8, -1]

initiate stack
looping backward
    let curr = arr[i]
    let lastEl = stack[stack.length - 1]
    if !stack.length 
        arr[i] = -1
    else if stack has length 
        is lastEl > curr
        yes - arr[i] = last el of stack
        no - while(lastEl < curr)
                stack.pop()
            stack.length ? lastEl : -1
    stack.push(curr)

initialize stack arr
initialize result arr
loop backward over arr
    curr = arr[i]
    lastEl = stack[stack.length - 1]
    while stack.length
        check if arr[i] < lastEl
        yes - arr[i] = lastEl, 
        no - stack.pop
        stack.push(curr)
    if !stack.length
        arr[i] = -1
return arr

*/

// one loop, but not DRY
function findNextGreaterElements(arr) {
    let stack = []
    let i = arr.length - 1 
    while (i >= 0) {
        let curr = arr[i]
        let lastEl = stack[stack.length - 1]
        if (stack.length) {
            if (lastEl > curr) {
                arr[i] = lastEl 
                i--
                stack.push(curr)
            } else {
                stack.pop()
            }
            
        } else {
            arr[i] = -1 
            i--
            stack.push(curr)
        }
    }

    return arr
}

console.log(findNextGreaterElements([2, 7, 3, 5, 4, 6, 8]))//[7, 8, 5, 6, 6, 8, -1]
console.log(findNextGreaterElements([5, 4, 3, 2, 1]))

/* 
Formation solution (in Pyton):

from collections import deque

def findNextGreaterElements(input):

    # base case
    if not input:
        return

    n = len(input)
    result = [-1] * n

    # create an empty stack
    s = deque()

    # process each element from right to left
    for i in reversed(range(n)):
        # loop till we have a greater element on top or stack becomes empty.
        while s:
            # pop elements that aren't greater than the current element
            if s[-1] <= input[i]:
                s.pop()
            # the next greater element is now on the top of the stack
            else:
                result[i] = s[-1]
                break
        # push current element into the stack
        s.append(input[i])

    return result

*/
