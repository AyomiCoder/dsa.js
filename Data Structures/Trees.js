// implement a binary tree data structure with the following methods:
// 
// - insert(value) - Inserts a value into the tree.
// - find(value) - Returns true if a value exists in the tree, otherwise false.
// - remove(value) - Removes a value from the tree.
// - size() - Returns the number of nodes in the tree.
// - toArray() - Returns an array of all values in the tree.
// - toString() - Returns a string representation of the tree.
// - clear() - Clears all nodes in the tree.

class Node {
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value)
    {
        if(value < this.value)
        {
            if(this.left === null)
            {
                this.left = new Node(value);
            }
            else
            {
                this.left.insert(value);
            }
        }
        else if(value > this.value)
        {
            if(this.right === null)
            {
                this.right = new Node(value);
            }
            else
            {
                this.right.insert(value);
            }
        }
    }

    find(value)
    {
        if(value < this.value)
        {
            if(this.left === null)
            {
                return false;
            }
            return this.left.find(value);
        }
        else if(value > this.value)
        {
            if(this.right === null)
            {
                return false;
            }
            return this.right.find(value);
        }
        return true;
    }

    remove(value)
    {
        if(value < this.value)
        {
            if(this.left !== null)
            {
                this.left = this.left.remove(value);
            }
        }
        else if(value > this.value)
        {
            if(this.right !== null)
            {
                this.right = this.right.remove(value);
            }
        }
        else
        {
            if(this.left === null && this.right === null)
            {
                return null;
            }
            if(this.left === null)
            {
                return this.right;
            }
            if(this.right === null)
            {
                return this.left;
            }
            let temp = this.right;
            while(temp.left !== null)
            {
                temp = temp.left;
            }
            this.value = temp.value;
            this.right = this.right.remove(temp.value);
        }
        return this;
    }

    size()
    {
        let size = 1;
        if(this.left !== null)
        {
            size += this.left.size();
        }
        if(this.right !== null)
        {
            size += this.right.size();
        }
        return size;
    }

    toArray()
    {
        let arr = [];
        if(this.left !== null)
        {
            arr = arr.concat(this.left.toArray());
        }
        arr.push(this.value);
        if(this.right !== null)
        {
            arr = arr.concat(this.right.toArray());
        }
        return arr;
    }

    toString()
    {
        return this.toArray().toString();
    }

    clear()
    {
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor()
    {
        this.root = null;
    }

    insert(value)
    {
        if(this.root === null)
        {
            this.root = new Node(value);
        }
        else
        {
            this.root.insert(value);
        }
    }

    find(value)
    {
        if(this.root === null)
        {
            return false;
        }
        return this.root.find(value);
    }

    remove(value)
    {
        if(this.root !== null)
        {
            this.root = this.root.remove(value);
        }
    }

    size()
    {
        if(this.root === null)
        {
            return 0;
        }
        return this.root.size();
    }

    toArray()
    {
        if(this.root === null)
        {
            return [];
        }
        return this.root.toArray();
    }

    toString()
    {
        if(this.root === null)
        {
            return '';
        }
        return this.root.toString();
    }

    clear()
    {
        if(this.root !== null)
        {
            this.root.clear();
        }
    }
}

let tree = new Tree();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(9);
console.log(tree.find(3)); // true
console.log(tree.find(6)); // false
tree.remove(3);
console.log(tree.size()); // 6
console.log(tree.toArray()); // [1, 4, 5, 7, 8, 9]
console.log(tree.toString()); // 1,4,5,7,8,9
tree.clear();
