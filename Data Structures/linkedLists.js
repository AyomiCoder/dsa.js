// // Practice exercises with linked lists

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Add a node to the end of the list
  append(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(data);
  }

  // Add a node to the beginning of the list
  prepend(data) {
    const newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  // Delete the first node with the given value
  deleteWithValue(data) {
    if (this.head === null) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.append(5);
list.append(10);
list.append(15);
list.prepend(1);
list.deleteWithValue(10);
console.log(list.head.next.data); // Output: 15

// Doubly Linked List
// A doubly linked list is a linked list in which each node keeps an explicit reference to the node before it and a reference to the node after it.

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
    this.size = 0;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  deleteByValue(data) {
    if (!this.head) return false;

    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.size--;
      return true;
    }

    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current.next) current.next.prev = current.prev;
        if (current.prev) current.prev.next = current.next;
        if (current === this.tail) this.tail = current.prev;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  traverseForward() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  traverseBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
}

const dll = new DoublyLinkedList();

dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.insertAtBeginning(5);

console.log("Traverse Forward:");
dll.traverseForward(); // Output: 5, 10, 20

console.log("Traverse Backward:");
dll.traverseBackward(); // Output: 20, 10, 5

console.log("Deleting 10:", dll.deleteByValue(10)); // Output: true
console.log("Traverse Forward After Deletion:");
dll.traverseForward(); // Output: 5, 20
