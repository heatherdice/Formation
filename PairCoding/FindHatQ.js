/*
I want my hat back

Oliver the Dog is missing his favorite hat and is asking his friends at the dog park if they've seen it. Each dog either has seen it or suggests a list of other dogs to ask. Return the name of the dog who has seen the hat. Oliver starts out by asking his best friend. This function will take two parameters. The first is a map of dogs to a list of their friends. The second is Oliver's best friend, who Oliver will ask first.

One of the most common uses of a queue is to keep a list of "work to be done". Just like doing housework, often new things get added to the to-do list while doing some other task. New jobs get added to the end of the queue, and when one is complete, the next one is taken from the top of the list.

EXAMPLE(S)
dogs = {
    'Carter': ['Fido', 'Ivy'],
    'Ivy': ["HAT"], // Ivy has seen the hat
    'Loki': ['Snoopy'],
    'Pepper': ['Carter'],
    'Snoopy': ['Pepper'],
    'Fido': []
}
[HAT]
findHat(dogs, 'Loki') == 'Ivy'

EXPLORE
input: map of str keys & arr vals, 1st key to check
    arr vals contain strs
output: key w/ value ["HAT"]
assume that 1st key's value is never empty
need a return statement for conditions where hat isn't found
assume names in arr are always associated w/ a key in the map
    if map.has(name), check value
keys in map are unique
    no repeat keys to worry about
assume names are not case sensitive and/or are always in the correct format
    set toUppercase/toLowercase

BRAINSTORM
queue
time: O(n) -> worst case, checking every key & val in map
space: O(n) -> new DS (queue)

PLAN
initiate queue w/ [bestfriend]
save queue length in var
while queue length
    set friendName to queue.shift
    if friendName in map
        map.get(friendName) to retrieve arr
            iterate arr
                if arr[i] !== "Hat"
                push values of value arr to queue
                queue.push(arr[i])
    else
        return friendName
return "Hat not found"
*/

function findHat(dogs, bestFriend) {

  const dogsQueue = [bestFriend] // [Loki]

    while (dogsQueue.length > 0) {
        // retrieve 1st element in queue
        let friendName = dogsQueue.shift()

        // if friendName in input map
        if (dogs.has(friendName)) {
            // get value arr
            let friendsArr = dogs.get(friendName)

            // iterate over value arr
            for (const friend of friendsArr) {
                // if arr element is not hat, push to queue
                if (friend !== "HAT") {
                dogsQueue.push(friend)
                } else {
                return friendName
                }
            }
        }
    }

    return "Hat not found"
}

let dogs1 = {
    'Carter': ['Fido', 'Ivy'],
    'Ivy': ["HAT"],
    'Loki': ['Snoopy'],
    'Pepper': ['Carter'],
    'Snoopy': ['Pepper'],
    'Fido': []
}
let arr1 = Object.entries(dogs1)
let dogMap1 = new Map(arr1)

console.log(findHat(dogMap1, 'Loki'))
console.log(findHat(dogMap1, 'Snoopy'))
console.log(findHat(dogMap1, 'Ivy'))
console.log(findHat(dogMap1, 'Fido'))

let dogs2 = {
    'Ariel': ['Bork'],
    'Bork': ['Cassie'],
    'Cassie': ['Drex'],
    'Drex': ['Zoe'],
    'Zoe': ["HAT"],
}
let arr2 = Object.entries(dogs2)
let dogMap2 = new Map(arr2)

console.log(findHat(dogMap2, "Ariel")) // Zoe
console.log(findHat(dogMap2, "Bork")) // Zoe
console.log(findHat(dogMap2, "Cassie")) // Zoe
console.log(findHat(dogMap2, "Drex")) // Zoe
console.log(findHat(dogMap2, "Zoe")) // Zoe