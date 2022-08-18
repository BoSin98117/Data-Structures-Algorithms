class HashTable {
    constructor(size) {
        this.data = new Array(size);
        // this.data = [];
    }

    // will hash the key that is given in the SET function
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        // create a variable ADDRESS and store the values GRAPES and APPLES that is hashed by the _hash function
        let address = this._hash(key);
        // if this.data[address] DOES NOT exist, create an empty array[]
        if (!this.data[address]) {
            this.data[address] = [];
        }
        // add the KEY and VALUE using the PUSH function 
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        // use the _hash function to get the address of the key we are searching for
        const address = this._hash(key);
        // create a variable CURRENTBUCKET that is the ADDRESS(key) of the item we are searching for
        const currentBucket = this.data[address]
        // to get the VALUE of the KEY
        if (currentBucket) {    // we don't need CURRENTBUCKET.LENGTH because initially we create an empty ARRAY(SIZE) when we declare the Class and we SET an empty ARRAY to each slot in the ARRAY

            // we use a for loop because there might be multiple items in each slot in the ARRAY. This will NOT cause an O(n).  it is still O(1)
            for (let i = 0; i < currentBucket.length; i++) {
                // if the CURRENTBUCKET[i][0] - means that if i=0, it will grab the first element in the array and the first item in that array which is the KEY
                if (currentBucket[i][0] === key) {
                    // CURRENTBUCKET[i][1] will return the VALUE which is located in INDEX 1
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')