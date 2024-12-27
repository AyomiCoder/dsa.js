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


