// Practice exercises with linked lists

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