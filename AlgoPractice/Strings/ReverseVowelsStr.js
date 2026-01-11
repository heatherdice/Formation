/* 
EXPLORE
input: str
output: str
    new str w/ vowels reversed
    consonants & white space stay the same
aim for O(n) time & O(1) extra space
    "extra space" = no other data structures besides return str
non-alphabetic chars remain as they are
'' returns ''

BRAINSTORM
cannot use recursion, stack, q, etc.
pointer, counter, or index var is fine
will have to loop str
    maybe 2 pointer, one at beginning and one at end?
    temp var can hold 1st pointer str vowel, swap when 2nd pointer is a vowel

PLAN
initiate result var as ""
initate pointers
    start = 0
    end = arr.length - 1
initiate temp vowels
    temp = ""
loop ending when start = end
    check if end is vowel
        if yes
        set temp var to arr[end]
    check if start is vowel && temp
        if yes
            result += temp
        if no
            result += arr[start]
    start++
    end--
return result

*/

function reverseVowels(str) {
    let result = "";
    let start = 0;
    let end = str.length - 1;
    let temp = "";

    while (end >= 0 && start <= str.length) {
        if ("aeiouAEIOU".includes(str[end])) {
            temp = str[end];
        }

        if ("aeiouAEIOU".includes(str[start]) && temp) {
            result += temp
        } else {
            result += str[start];
        }

        start++;
        end--;
    }

    return result;
}

const tests = [
    ['hello', 'holle'],
    ['leetcode', 'leotcede'],
    ['aA', 'Aa'],
    ['', ''],
    ['abcd', 'abcd'],
    ['aeiou', 'uoiea'],
    ['Why?', 'Why?']
];

tests.forEach(([input, expected]) => {
    const output = reverseVowels(input);
    console.assert(output === expected, `For ${input} expected ${expected} got ${output}`);
});

console.log('All JavaScript tests passed.');