class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Function to add a node at the end of the list
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Function to reverse the doubly linked list
    reverse() {
        let current = this.head;
        let temp = null;

        // Swap next and prev for all nodes of the list
        while (current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        // Before changing the head, check for the cases like empty list and list with only one node
        if (temp !== null) {
            this.head = temp.prev;
        }
    }

    // Function to print the list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
let dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);

console.log("Original List:");
dll.printList();

dll.reverse();

console.log("Reversed List:");
dll.printList();