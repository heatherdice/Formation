/* 
While building a game, we need a grab bag: essentially a set with mechanism for randomly choosing an item. the sets can change over time, so we need to be able to add and remove items as well as make a random selection. Build a class to make this possible.

The goal is for these operations to be as efficient as possible: constant time insertions, removals, and random selections

Create a class that supports the following three methods:
    - insert(val) adds a new item to the set
        - return true if the item is added
        - return false if the item was already there
    - remove(val) removes an item from the set
        - return true if the removal is successful
        - false if the item was not in the set to begin with
    - getRandom() returns an item from the set
        - there must be even probability of any one item from the set being returned
        - if the set is empty when this is called, return none or undefined

*/

class GrabBag {
    constructor() {
        this.items = [] // arr of all items, including dupes
        this.indexes = new Map() // set of arr indexes
    }

    insert(item) {
        // add item to list
        this.items.push(item)
        // keep track of final index
        const lastItemIndex = this.items.length - 1

        // add index to map if not already there
        if (!this.indexes.has(item)) {
            this.indexes.set(item, new Set())
            this.indexes.get(item).add(lastItemIndex)
        } else {
            return false
        }

        return true
    }

    remove(item) {
        // if both map and list are empty, item cannot be in bag
        if (!this.indexes.has(item) || this.indexes.get(item).size === 0) {
            return false
        }

        // get an arbitrary index of this item
        const indexSet = this.indexes.get(item)
        const removeIndex = indexSet.values().next().values

        // get last item in list
        const lastIndex = this.items.length - 1
        const lastItem = this.items[lastIndex]

        // swap w/ last
        this.items[removeIndex] = lastItem

        // update lastItem's indexes
        const lastSet = this.indexes.get(lastItem)
        lastSet.delete(lastIndex)

        if (removeIndex !== lastIndex) {
            lastSet.add(removeIndex)
        }

        // remove last element
        this.items.pop()

        // clean empty index sets
        if (indexSet.size === 0) {
            this.indexes.delete(item)
        }

        return true
    }

    getRandom() {
        
    }
}