/* 
You are given an array of tuples, representing key presses. The first element in the tuple will be a letter and the second will be a timestamp that it was pressed at. You'll return the time required to press the slowest character in the series. The time that it takes to press is equal to the timestamp it was pressed, subtracted by the time the previous character was pressed. Ignore the first character that is pressed - we do not know the time associated with that character.

EXAMPLE(S)
[['a', 0], ['b', 3], ['a', 7], ['c', 8]] returns 4
    'a' at arr[2] took 7 - 3 = 4 seconds to press

EXPLORE
input: arr of tuples
    tuple = char, int
output: int
    largest difference between adjascent timestamps
only concerning ourselves with adjacent tuples
letters can be duplicates - disregard
arr.length <= 1 returns -1
assume data is always valid
assume data is sorted

BRAINSTORM
Solution: initiate var at -Infinity, subtract tuples while iterating, replacing var w/ difference if bigger
Time: O(n) -> length of arr
Space: O(1) -> no add. DS

PLAN
if arr.length <= 1 return -1
initiate difference var to hold -Infinity
sort arr so tuples are occurring in ascending order of ints
iterate forward over arr
    initiate var to hold arr[i][1] - arr[i - 1][1]
    if var > difference
        difference = var
return difference
*/

function slowestKeyPress(keyLog) {
    if (keyLog.length <= 1) return -1

    keyLog.sort((a, b) => a[1] - b[1])
    let result = -Infinity

    for (let i = 1; i < keyLog.length - 1; i++) {
        let timeToPress = keyLog[i][1] - keyLog[i - 1][1]

        if (timeToPress > result) result = timeToPress
    }

    return result
}

