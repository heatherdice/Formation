/*
EXPLORE
input: arr of 5 ints
    ints are 0-9
output: bool
    if 1st arr can make largest 2 digit num

BRAINSTORM
need to iterate 2 arr's
won't simply be adding nums, but creating a new 2-digit num from 2 of the nums in the arr
  (largest num * 10) + second largest num
will need vars to hold and keep track of largest & second largest num in each arr

PLAN
Algo 1:
    sort both arr's - O(1) because arr's are small and of a fixed size
        var you = (arr[0] * 10) + arr[1]
        var friend = (arr[0] * 10) + arr[1]
    return you > friend ? true : false
    
    Overall time: O(1)
    Overall space: O(1)

 */

function didYouWin(arr1, arr2) {
    arr1.sort((a, b) => b - a);
    arr2.sort((a, b) => b - a);

    let you = (arr1[0] * 10) + arr1[1];
    let friend = (arr2[0] * 10) + arr2[1];

    return you > friend ? true : false;
}

console.log(didYouWin([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]) == false)
console.log(didYouWin([1, 1, 1, 1, 2], [1, 1, 1, 1, 2]) == false)
console.log(didYouWin([1, 1, 2, 1, 1], [1, 1, 2, 1, 1]) == false)
console.log(didYouWin([6, 7, 8, 9, 0], [1, 2, 3, 4, 5]) == true)