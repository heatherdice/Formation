/* 
EXPLORE
input: str, map
    str includes quantities, ingredients of recipe
    map includes ingredients, quantities of ingredients at home
output: map
    ingredients, quantities of what to buy
words in str are not of uniform capitalized/lowercase letters, while grocery list should be returned w/ lowercase letters
    will need to lowercase all
will have to convert str to map
    split into arr, then convert to map
built-in functions:
    split -> makes arr
        O(n) time & space
    toLowercase -> all letters in str lowercase
        O(n) time & space
at home ingredient may not be in recipe
    don't add to output
recipe ingredient may not be at home
    add to output

BRAINSTORM
Solution 1: split input str, iterate to place in new map, compare w/ input map
Time: O(n)
Space: O(n)

PLAN
initiate new arr w/ recipe.split(" ")
initiate new recipe map
iterate arr until str
    if str, make all lowercase & add str as key w/ arr[0] as val
now have map of recipe w/ all lowercase keys
* will need to lowercase all keys of at home map
    iterate at home map w/ forEach
initiate empty grocery list map
iterate recipe map, compare against at home map
    check if recipe key at home
        if no
        add recipe key/value pair to map
        if yes
        check if recipe value > at home value
            if yes:
            add key to map
            value = recipeValue - atHomeValue    
return grocery list map

*/

function getGroceryList(brosRecipe, ingredientsAtHome) {
    if (!brosRecipe) return {}

    // create arr from brosRecipe str, initiate empty map
    let recipeArr = brosRecipe.split(" ")
    let groceryList = new Map()

    // find middle of list, store in var
    let mid = recipeArr.length / 2
    let start = 0

    // set all ingredientsAtHome keys to lowercase
    let lowercasedMap = new Map()
    for (const [key, value] of Object.entries(ingredientsAtHome)) {
        lowercasedMap.set(key.toLowerCase(), value)
    }

    while (mid <= recipeArr.length - 1) {
        // set str to lowercase
        recipeArr[mid] = recipeArr[mid].toLowerCase()

        // amount of an ingredient that is needed for recipe
        let amtOfRecipeIngredient = Number(recipeArr[start])

        // if recipe contains ingredient not at home, add to grocery list
        if (!lowercasedMap.has(recipeArr[mid])) {
            groceryList.set(recipeArr[mid], amtOfRecipeIngredient)
        } else {
            // recipe ingredient is at home
            // amount of an ingredient that is at home
            let amtOfHomeIngredient = lowercasedMap.get(recipeArr[mid])

            // if we need more than we have, subtract amt we have from the amt needed & set as the amt to purchase in grocery list
            if (amtOfRecipeIngredient > amtOfHomeIngredient) {
                let groceryAmt = amtOfRecipeIngredient - amtOfHomeIngredient

                groceryList.set(recipeArr[mid], groceryAmt)
            }

        }

        mid++
        start++
    }

    return groceryList
}

// Test Case 1: No ingredients anywhere
const recipe_1 = "";
const home_1 = {};
console.log(getGroceryList(recipe_1, home_1)); // {}

// // Test Case 2: No ingredients at home
const recipe_2 = "2 8 1 1 eGgS pOrKlOiNcHoPs PaNkObReAdCrUmBs FlOuR";
const home_2 = {};
console.log(getGroceryList(recipe_2, home_2)); // { "eggs": 2, "porkloinchops": 8, "pankobreadcrumbs": 1, "flour": 1 }

// // Test Case 3: Some ingredients at home
const recipe_3 = "4 8 1 10 2 bUtTeR hIcKoRyWoOdChIpS pApRiKa BeEfBrIsKeT bRoWnSuGaR";
const home_3 = { "sAlT": 1, "pEPper": 1, "paPRika": 1, "bUTteR": 2 };
console.log(getGroceryList(recipe_3, home_3)); //{ "beefbrisket": 10, "brownsugar": 2, "hickorywoodchips": 8, "butter": 2 }

// // Test Case 4: All ingredients at home
const recipe_4 = "2 4 1 2 2 BuTtEr SaLmOnFiLlEtS lEmOn OrEgAnO pArSlEy";
const home_4 = { "butTer": 2, "saLmoNfiLLets": 4, "leMOn": 1, "oREGano": 2, "pARsLey": 2 };
console.log(getGroceryList(recipe_4, home_4)); // {}

// // Test Case 5: Unneeded ingredients at home
const recipe_5 = "4 8 1 2 4 bUtTeR cHiCkEnDrUmStIcK gArLiC rOsEmArY oNiOn";
const home_5 = { "sALt": 1, "pePpeR": 1, "GaRlic": 2, "heAvYcrEaM": 2, "bUtTer": 6, "oNiOn": 6 };
console.log(getGroceryList(recipe_5, home_5)); // { "rosemary": 2, "chickendrumstick": 8 }