/* 
You are given a string made of `x`s, underscores, and newlines. Underscores represent an empty space, and an x represents a filled-in square. Imagine that this string represents a histogram. Return an array representing the heights of each bar in the histogram. 

EXAMPLE(S)

input: "___x\n_x_x\n_xxx\nxxxx"
visualized for ease
___x
_x_x
_xxx
xxxx

returns [1, 3, 2, 4]

input: "____x\n____x\n____x\n__x_x\nxxxxx"
visualized for ease
        __X_x height: 5
        ____x height: 4
        ____x height: 3
        __x_x height: 2
        xxxxx height: 1

returns [1, 1, 2, 1, 5]

initiate result arr
str.split input -> time/space O(n), n = arr.length
iterate forward over each str -> time/space O(n), n = str.length
    if x, +1 to associated index in result arr
return result arr

*/

function heights(hist) {
    if (!hist) return []

    let columns = hist.split("\n") // ["___x", "_x_x", "_xxx", "xxxx"]
                            // length of final str in columns
    let heights = new Array(columns[columns.length - 1].length).fill(0) // [0,0,0,0]

    for (const str of columns) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "x") {
                heights[i]++
            }
        }

    }

    return heights
}

console.log(heights("___x\n_x_x\n_xxx\nxxxx")) // [1, 3, 2, 4]
console.log(heights("____x\n____x\n____x\n__x_x\nxxxxx")) // [1, 1, 2, 1, 5]