/*

"Reduce"(also known as "fold") is a function that takes in an array, a combining function, and an initial value and builds up a result by calling the combining function on each element of the array, left to right.

This should call add on the initial value with the first element of the array, and then the result of that with the second element of the array, and so on until we reach the end, when we return the sum of the array.

Implement reduce.

---

If you have time for more problems, you can implement additional array functions:

* map: map([1, 2, 3], x => x + 1) -> [2, 3, 4]
* filter: filter([1, 2, 3], x => x % 2 === 0) -> [2]
* every: every([1, 2, 3], x => x < 3) -> false
* some: some([1, 2, 3], x => x < 3) -> true 

EXAMPLE(S)
reduce(
  [1, 2, 3], // array
  (a, b) => a + b, // combine : (a, b) => a - b; (a, b) => a / b
  (a, b) => a * b
  0, // initial
) == 6


reduce(
  [1, 2, 3], // array
  (a, b) => [...a, b * 2]
  [], // initial
) == [2, 4, 6]


FUNCTION SIGNATURE
function reduce(array, combine, initialValue) {

// MDN docs for the accumlator function function (acc, val, arr?, index?)
acc + val 
acc * val

## Exploration

the passed in function could sum, multiply, or do any action on the items in the array

the combine function is defined by whoever is calling reduce
combine can be anything, as long as it returns a value

the third parameter is the initial value and can be any type. It should typically be the type that you want the end result to be

## Approach

function reduce(array, combine, initialValue) {
    combinedValue = initialValue
    loop through all the elemnts in the array
        combinedValue = combine(combinedValue, curr)

    return combinedValue

*/

const reduce = (array, combine, initialValue) => {
    let combinedValue = initialValue;

    for (const el of array) {
        combinedValue = combine(combinedValue, el)
    }

    return combinedValue
}



// reduce(
//   [1, 2, 3], // array
//   (a, b) => a + b, // combine : (a, b) => a - b; (a, b) => a / b
//   (a, b) => a * b
//   0, // initial
// ) == 6


// Sum(mariela)
function combine(total, el) {
    return total + el
}
// const arr = [1, 2, 3]
console.log(reduce([1,2,3], combine, 0), 6)
// console.log(arr, 'arr')

// Multiplication (heather)
function multiply(resultSoFar, arrEl) {
    return resultSoFar *= arrEl
}
console.log(reduce([1,2,3], multiply, 2), 12) // 12

// Double every number (Florence)
function double(arr, val) { 
    // return arr.append(2*val)
    return [...arr, val*2] // (JS uses 'push' instead of append)
    // alternative: return [...arr, val*2] which uses the the spread operator
}
console.log("double every number")
console.log(reduce([1, 2, 3], double, []), [2, 4, 6])
console.log(reduce([1,2,3], (arr, val) => [...arr, 2*val], []))

// Empty Array (sherry)'
function empty(initial, accu) {
    initial.push(accu)
    return initial 
}
console.log(reduce([], empty, []), [])

/*
  * map: map([1, 2, 3], x => x + 1) -> [2, 3, 4] // Map transforms every item in an array and returns a new array (the orignal array is unmodified)

    reduce([1,2,3], (arr, val) => [...arr, 2*val]), []
    map([1,2,3], (val) => val*2))

  * filter: filter([1, 2, 3], x => x % 2 === 0) -> [2]
  * every: every([1, 2, 3], x => x < 3) -> false
  * some: some([1, 2, 3], x => x < 3) -> true 


    ## Map Approach

    Option 1:

    iterate through the array and push each modified value into a new array

    Option 2:

    We can use reduce to implement map
*/

function mapOption1(arr, callback) {
    let result = [];
    for (let element of arr) {
        result.push(callback(element))
    }
    return result
}

console.log("MAP")

console.log(mapOption1([1, 2, 3], x => x + 1), [2, 3, 4])

function map(arr, callback) {
    return reduce(arr, (arr, val) => [...arr, callback(val)], [])
}

console.log(map([1, 2, 3], x => x + 1), [2, 3, 4])