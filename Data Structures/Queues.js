class Queue{
    constructor(){
        this.items = [];
    }
    // Add an element to the queue
    enqueue(element){
        this.items.push(element);
    }

    // Remove the first element from the queue
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        } else {
            return this.items.shift();
        }
    }

    // View the element at the front without removing it
    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        } else{
            return this.items[0];
        }
    }

    // Check if the queue is empty
    isEmpty(){
        return this.items.length === 0;
    }

    // Get the size of the queue
    size(){
        return this.items.length;
    }

    // clear the queue
    clear(){
        this.items = [];
    }
}

// Example usage
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
queue.clear();
console.log(queue.isEmpty()); // Output: true
console.log(queue.dequeue()); // Output: Queue is empty
console.log(queue.size()); // Output: 0



// Linked List Based queue
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add an element to the queue
    enqueue(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Remove the first element from the queue
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        } else{
            const removed = this.head;
            this.head = this.head.next;
            this.size--;
            return removed.data;
        }
    }

    // View the first element in the queue
    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        } else{
            return this.head.data;
        }
    }

    // Check if the queue is empty
    isEmpty(){
        return this.size === 0;
    }

    // Get the size of the queue
    size(){
        return this.size;
    }

    // Clear the queue
    clear(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

// Example usage
let linkedListQueue = new LinkedListQueue();
linkedListQueue.enqueue(1);
linkedListQueue.enqueue(2);
linkedListQueue.enqueue(3);
console.log(linkedListQueue.peek()); // Output: 1
console.log(linkedListQueue.dequeue()); // Output: 1
console.log(linkedListQueue.peek()); // Output: 2
linkedListQueue.clear();
console.log(linkedListQueue.isEmpty()); // Output: true
console.log(linkedListQueue.dequeue()); // Output: Queue is empty
console.log(linkedListQueue.size()); // Output: 0
