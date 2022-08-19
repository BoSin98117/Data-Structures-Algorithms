//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


// not that efficient because we have 2 for loops making it O(n^2)
function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined
}

// use hash table so that we use only 1 for loop resulting in O(n)
function firstRecurringCharacter2(input) {
    // create a hash table MAP that we add elements into as we loop through the array INPUT
    let map = {};
    for (let i = 0; i < input.length; i++) {
        // When we loop through the array, we get UNDEFINED each time.  When we get to an element that is already in the hash table, it will not return UNDEFINED and instead return the value.
        if (map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i;
        }
    }
    return undefined
}

firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6])


  //Bonus... What if we had this:
  // [2,5,5,2,3,5,1,2,4]
  // return 5 because the pairs are before 2,2