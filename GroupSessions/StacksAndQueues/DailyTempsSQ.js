/* 
You are given a list of daily temperatures, T, where each element represents the temperature of a single day. Your task is to return a list such that, for each day in the input, it tells you how many days you would have to wait until you reach a day with a warmer temperature. If there is no future day for which this is possible, put a 0 instaed.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72], your output should be [1, 1, 0, 2, 1, 0]

EXPLORE
input: arr of ints
output: new arr of ints
    each int in new arr = how many days you would wait to reach a day w/ warmer temp
assume data is valid
arr.length <= 1 returns 0

BRAINSTORM
monotonically increasing/decreasing
build list of indices in a stack
once condition is hit that violates increase, fix output
Time: O(n) -> length of arr
Space: O(n) -> size of stack, size of return arr

PLAN
edge case: if arr.length <= 1, return 0
initiate empty stack
initiate result arr of 0's that is same length as input arr
iterate over input arr
    while stack && arr[i] > last index of arr
        initiate var to hold popped stack element
        set element at that popped index in result arr to i - popped stack index
    push i to stack
return result arr

*/

function dailyTemps(arr) {
    if (arr.length <= 1) return [0]

    let stack = []
    // create result arr of all 0's
    let result = new Array(arr.length).fill(0)

    for (let i = 0; i < arr.length; i++) {
        // resolve previous days that are colder than today
        while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }

        stack.push(i)
    }

    return result
}

console.log(dailyTemps([73, 74, 75, 71, 69, 72])) // [1, 1, 0, 2, 1, 0]