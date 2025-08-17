/* 
    PROMPT
    Imagine you possess a time machine and have an array of years called 'years.' You begin your journey at year 'years[0]' and sequentially travel to years[1], years[2], and so on. Your objective is to determine the total time needed to visit each year in the list in the given order.
    The time taken to travel from year A to year B is computed as follows:
        0 hours if A = B
        1 hour if A < B (traveling forward in time)
        2 hours if A > B (traveling backward in time)
    EXPLORE
    input: arr
    output: int
        number of "hours" to go from year1 to year2
        0 hrs if A = B
        1 hr if A < B
        2 hrs if A > B
    assume all valid elements in arr
        all positive, all B.C.
    [] returns 0
    assume arr is unsorted

    BRAINSTORM
    counter var is returned result
    iteration through looping, comparison of curr & next
    time: O(n) - iteration
    space: O(1) - no add. DS

    PLAN
    edge case: if !arr, return 0
    initiate hours var at 0
    iterate forward over arr
        initiate curr var = arr[i]
        initiate next var = arr[i + 1]
        if curr < next
            hours += 1
        if curr > next
            hours += 2
    return hours
*/

function timeMachine(years) {
    if (years.length <= 1) return 0

    let hours = 0

    for (let i = 0; i < years.length; i++) {
        let curr = years[i]
        let next = years[i + 1]

        if (curr < next) {
            hours += 1
        } else if (curr > next) {
            hours += 2
        }
    }

    return hours
}

// Test Case 1: Array of length 1 (no travel)
let years1 = [2000]
console.log(timeMachine(years1) === 0);

// Test Case 2: Array of length 2 (going forward)
let years2 = [2000, 2020]
console.log(timeMachine(years2) === 1);

// Test Case 3: Array of length 2 (going backward)
let years3 = [2020, 2000]
console.log(timeMachine(years3) === 2);

// Test Case 4: Array of length 3 (going forward)
let years4 = [2000, 2010, 2020]
console.log(timeMachine(years4) === 2);

// Test Case 5: Array of length 3 (going forward and backward)
let years5 = [2000, 2020, 2010]
console.log(timeMachine(years5) === 3);

// Test Case 6: Array of length 5 (combination of going forward, backward, and staying in the same year)
let years6 = [2000, 2010, 2010, 2005, 2020]
console.log(timeMachine(years6) === 4);