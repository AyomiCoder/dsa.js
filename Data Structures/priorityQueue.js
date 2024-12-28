// Implement a priority queue with the following methods:
// - enqueue: this function should add an element to the queue based on the priority of the element. The element should be added to the correct position in the queue.
// - dequeue: this function should remove the first element from the queue.
// - peek: this function should return the first element from the queue without removing it.
// - isEmpty: this function should return true if the queue is empty and false if it is not.
// - clear: this function should remove all elements from the queue.

class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
    }

class PriorityQueue {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    enqueue(data, priority) {
        const newNode = new Node(data, priority);
        if (!this.head || priority > this.head.priority) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next && priority <= current.next.priority) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        } else {
            const removed = this.head;
            this.head = this.head.next;
            this.size--;
            return removed.data;
        }
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        } else {
            return this.head.data;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }
}

const pq = new PriorityQueue();
pq.enqueue("A", 3);
pq.enqueue("B", 1);
pq.enqueue("C", 2);
console.log(pq.peek()); // Output: B
console.log(pq.dequeue()); // Output: B
console.log(pq.peek()); // Output: C
pq.clear();
console.log(pq.isEmpty()); // Output: true
console.log(pq.dequeue()); // Output: Queue is empty
console.log(pq.size); // Output: 0
