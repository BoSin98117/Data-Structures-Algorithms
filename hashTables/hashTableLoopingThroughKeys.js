class HashTable {
    constructor(size) {
        this.data = new Array(size);
        // this.data = [];
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    // usually O(1) but if there are collisions, it will be O(n)
    // collisions occur when we declare a small size for our array and when we push a key/value pair, it will have to go into an index that already has a key/value in the array
    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }

    // Looping through keys will result in BigO = O(n) because of the for loop that loops over every key.
    keys() {
        // create an empty array to store each key in our hashmap
        const keysArray = [];
        console.log(this.data.length);
        // loop through the hashmap (ALL 50 indexes in the array) causing O(n)
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                // i = the index of the array.  [0][0] = the first element in each array which is the KEY
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.keys()