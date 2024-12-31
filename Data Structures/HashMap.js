// write some code to practice using hash tables and their operations like inserting, retrieving, and deleting key-value pairs. 

/**
 * A simple implementation of a Hash Table data structure.
 * 
 * @class HashTable
 * @property {Array} KeyMap - The array that holds the key-value pairs.
 * 
 * @method constructor(size) - Initializes the hash table with a given size.
 * @method hash(key) - Generates a hash for a given key.
 * @method insert(key, value) - Inserts a key-value pair into the hash table.
 * @method get(key) - Retrieves the value associated with a given key.
 * @method remove(key) - Removes the key-value pair associated with a given key.
 * @method keys() - Returns an array of all keys in the hash table.
 * @method values() - Returns an array of all values in the hash table.
 * @method entries() - Returns an array of all key-value pairs in the hash table.
 * @method clear() - Clears all key-value pairs in the hash table.
 * @method size() - Returns the number of key-value pairs in the hash table.
 * @method isEmpty() - Checks if the hash table is empty.
 * @method has(key) - Checks if a given key exists in the hash table.
 * @method forEach(callback) - Executes a callback function for each key-value pair in the hash table.
 */


class HashTable {
    constructor(size = 5)
    {
        this.KeyMap = new Array(size);
    }

    hash(key)
    {
        let total = 0;
        let PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++)
        {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.KeyMap.length;
        }
        return total;
    }

    insert(key, value)
    {
        let index = this.hash(key);
        if(!this.KeyMap[index])
        {
            this.KeyMap[index] = [];
        }
        this.KeyMap[index].push([key, value]);
    }

    get(key)
    {
        let index = this.hash(key);
        if(this.KeyMap[index])
        {
            for(let i = 0; i < this.KeyMap[index].length; i++)
            {
                if(this.KeyMap[index][i][0] === key)
                {
                    return this.KeyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    remove(key)
    {
        let index = this.hash(key);
        if(this.KeyMap[index])
        {
            for(let i = 0; i < this.KeyMap[index].length; i++)
            {
                if(this.KeyMap[index][i][0] === key)
                {
                    this.KeyMap[index].splice(i, 1);
                    return true;
                }
            }
        }
        return undefined;
    }

    keys()
    {
        let keysArr = [];
        for(let i = 0; i < this.KeyMap.length; i++)
        {
            if(this.KeyMap[i])
            {
                for(let j = 0; j < this.KeyMap[i].length; j++)
                {
                    if(!keysArr.includes(this.KeyMap[i][j][0]))
                    {
                        keysArr.push(this.KeyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    values()
    {
        let valuesArr = [];
        for(let i = 0; i < this.KeyMap.length; i++)
        {
            if(this.KeyMap[i])
            {
                for(let j = 0; j < this.KeyMap[i].length; j++)
                {
                    if(!valuesArr.includes(this.KeyMap[i][j][1]))
                    {
                        valuesArr.push(this.KeyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    entries()
    {
        let entriesArr = [];
        for(let i = 0; i < this.KeyMap.length; i++)
        {
            if(this.KeyMap[i])
            {
                for(let j = 0; j < this.KeyMap[i].length; j++)
                {
                    entriesArr.push(this.KeyMap[i][j]);
                }
            }
        }
        return entriesArr;
    }

    clear()
    {
        this.KeyMap = new Array(this.KeyMap.length);
    }

    size()
    {
        let size = 0;
        for(let i = 0; i < this.KeyMap.length; i++)
        {
            if(this.KeyMap[i])
            {
                size += this.KeyMap[i].length;
            }
        }
        return size;
    }

    isEmpty()
    {
        return this.size() === 0;
    }

    has(key)
    {
        let index = this.hash(key);
        if(this.KeyMap[index])
        {
            for(let i = 0; i < this.KeyMap[index].length; i++)
            {
                if(this.KeyMap[index][i][0] === key)
                {
                    return true;
                }
            }
        }
        return false;
    }

    forEach(callback)
    {
        for(let i = 0; i < this.KeyMap.length; i++)
        {
            if(this.KeyMap[i])
            {
                for(let j = 0; j < this.KeyMap[i].length; j++)
                {
                    callback(this.KeyMap[i][j][1], this.KeyMap[i][j][0]);
                }
            }
        }
    }
}

let hashTable = new HashTable();
hashTable.insert('name', 'John');
hashTable.insert('age', 30);
console.log(hashTable.get('name')); // Output: John
console.log(hashTable.get('age')); // Output: 30
hashTable.remove('age');
console.log(hashTable.get('age')); // Output: undefined
console.log(hashTable.keys()); // Output: [ 'name' ]
console.log(hashTable.values()); // Output: [ 'John' ]
console.log(hashTable.entries()); // Output: [ [ 'name', 'John' ] ]
console.log(hashTable.size()); // Output: 1
console.log(hashTable.isEmpty()); // Output: false
console.log(hashTable.has('name')); // Output: true
hashTable.clear();