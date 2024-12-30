// write some code to practice using hash tables and their operations like inserting, retrieving, and deleting key-value pairs. 

// Implement a hash table with the following methods:
// - insert: this function should insert a key-value pair into the hash table. If the key already exists in the hash table, update the value.
// - get: this function should return the value associated with the key in the hash table.
// - remove: this function should remove the key-value pair from the hash table.

class HashTable {
    constructor(size = 100) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) * i;
        }
        return hash % this.size;
    }

    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push({ key, value });
    }

    get(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return null;
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i].key === key) {
                return this.table[index][i].value;
            }
        }
        return null;
    }

    remove(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return null;
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i].key === key) {
                this.table[index].splice(i, 1);
                return true;
            }
        }
        return null;
    }
}

const hashTable = new HashTable();
hashTable.insert('name', 'John');
hashTable.insert('age', 30);
console.log(hashTable.get('name')); // Output: John
console.log(hashTable.get('age')); // Output: 30
hashTable.remove('age');
console.log(hashTable.get('age')); // Output: null