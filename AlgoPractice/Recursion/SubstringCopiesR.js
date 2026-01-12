/* 
EXPLORE
- input: str, substr, int
- output: bool representing whether or not at least int number of copies of substr appear in str
- substr's can be overlapping
- str can be empty but not null
- any char is possible, including capital, lowercase, numbers, & special chars

BRAINSTORM
- create empty comparison str, iterate over input str pushing to comparison str & comparing to substr
- when substr matches comparison str, increment an int comparison number
- at end of iteration, compare input int & comparison int, return true if same & false if not

PLAN
Initiate helper function
    - arguments index, str, substr, subCompare="", int, intCompare=0, result=false
Base case:
- conditional: check if str.length === 0
    - return result
Recursive case:
- push str[index] to subCompare
- conditional: check if subCompare = substr
    - if yes, increment intCompare
return helper function

Outside of helper function
- return int === intCompare

*/

function strCopies(str, substr, int) {
    function helper(index, subCompare, intCompare) {
        if (index >= str.length) {
            return int === intCompare;
        }

        subCompare += str[index];
        // console.log("substring: ", subCompare);

        if (substr.length === subCompare.length && subCompare === substr) {
            intCompare++;
        // console.log("intCompare: ", intCompare);
        subCompare = "";
        } else if (substr.length === subCompare.length && subCompare != substr) {
            subCompare = "";
        }

        return helper(index + 1, subCompare, intCompare);
    }

    return helper(0, "", 0);
}

console.log(strCopies("catcowcat", "cat", 2)); // true
console.log(strCopies("catcowcat", "cow", 2)); // false
console.log(strCopies("catcowcat", "cow", 1)); // true