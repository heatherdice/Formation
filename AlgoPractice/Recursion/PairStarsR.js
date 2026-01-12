/* 
EXPLORE
- input: str
- output: str w/ a * separating adjacent characters which are the same
- example: "hello" becomes "hel*lo"

BRAINSTORM
Use recursion to loop & check if chars are the same as the one before them

PLAN
- conditional: if char is at end of str
    - return result
- initiate helper function w/ arguments index=0, str, & result=""
    - conditional: check if char is same as next
        - if yes, add char+* to result str
        - if no, add char to result str
    return helper w/ arguments index+=1, str, & result
- return helper w/ arguments 0, str, & ""

*/

function pairStars(str) {
    function helper(index, str, result = "") {
        if (index === str.length) {
            return result;
        }

        if (str[index] === str[index + 1]) {
            result += str[index] + "*";
        } else {
            result += str[index];
        }

        return helper(index += 1, str, result);
    }

    return helper(0, str, "");
}


console.log(pairStars("hello")); // "hel*lo"
console.log(pairStars("xxyy")); // "x*x*y*y"
console.log(pairStars("aaaa")); // "a*a*a*a"