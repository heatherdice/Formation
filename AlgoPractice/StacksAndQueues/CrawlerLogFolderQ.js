/* 
EXPLORE
input: list of str
    str = file-system nav command
        '../' = move to parent folder or stay at root
        './' = remain in curr folder
        'x/' = move to child folder named x
output: int
    after execution, num of folders you would have to pass to get back to root
example: [d1/, d2/, ../, d21/, ./] -> 2
    root -> d2 -> root -> through d2 to d21? -> back to root
example: [d1/, ../, ../, ../] -> 0
    all commands say to stay in root
Q1: assume [] & ['./'] returns 0
Q2: assume there is no repeat in folder names
Q3: assume 1st folder in list is root
Q4: assume answer will never be negative
Q5: assume folder naming conventions will be the same
    d1, d2, d3, etc = 1st level of depth
    d11, d21, d31, etc = 2nd level of depth & so on

BRAINSTORM
curr folder var to keep track of where we are
count var to keep track of how far away from root
potentially don't need both of these vars, may just make for more readable code
  ** realization after planning: "count," aka return int, may just be q.length
keep q of folder names
    do check for alphanumeric characters
        this allows for differences in naming conventions, should they arise


PLAN
edge case: input.length <= 1, return 0
add logs[0] to q, set curr var to logs[0]
iterate over logs arr
    if logs[i] contains alphanumeric chars 
        add to q
        set logs[i] as curr
    else if logs[i] === '../' && q.length > 1
        curr = q.shift()
return q.length

*/

function minOperations(logs) {
    if (logs.length <= 1) return 0;

    let logsQ = [];

    for (let i = 0; i < logs.length; i++) {
        if (/^[a-z0-9]/i.test(String(logs[i]))) {
            logsQ.unshift(logs[i]);
        }
        else if (logs[i] === '../' && logsQ.length <= 1) {
            logsQ.shift();
        }
    }

    return logsQ.length !==0 ? logsQ.length - 1 : 0;
}
// ['d1/', 'd2/', '../', 'd21/', './']
//                                ^
// [d2, d21]

console.log(minOperations(['d1/', 'd2/', '../', 'd21/', './'])); // 2
console.log(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/'])); // 3
console.log(minOperations(['d1/', '../', '../', '../'])); // 0
console.log(minOperations([])); // 0