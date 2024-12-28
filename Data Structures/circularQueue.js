class CircularQueue {
    constructor(size) {
      this.queue = new Array(size); // Fixed-size array
      this.size = size;
      this.front = -1; // Points to the front of the queue
      this.rear = -1;  // Points to the rear of the queue
    }
  
    // Add an element to the queue
    enqueue(value) {
      if (this.isFull()) {
        return "Queue is full";
      }
      if (this.isEmpty()) {
        this.front = 0; // Set front to 0 when the first element is added
      }
      this.rear = (this.rear + 1) % this.size; // Circular increment
      this.queue[this.rear] = value;
    }
  
    // Remove an element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      const removedValue = this.queue[this.front];
      if (this.front === this.rear) {
        // Queue becomes empty after removing the last element
        this.front = this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.size; // Circular increment
      }
      return removedValue;
    }
  
    // View the front element without removing it
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue[this.front];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.front === -1;
    }
  
    // Check if the queue is full
    isFull() {
      return (this.rear + 1) % this.size === this.front;
    }
  
    // Display the queue
    display() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      let i = this.front;
      let result = [];
      while (true) {
        result.push(this.queue[i]);
        if (i === this.rear) break;
        i = (i + 1) % this.size;
      }
      return result;
    }
  }
  
  // Example Usage
  const circularQueue = new CircularQueue(5);
  circularQueue.enqueue(10);
  circularQueue.enqueue(20);
  circularQueue.enqueue(30);
  circularQueue.enqueue(40);
  console.log(circularQueue.display()); // Output: [10, 20, 30, 40]
  console.log(circularQueue.dequeue()); // Output: 10
  circularQueue.enqueue(50);
  circularQueue.enqueue(60);
  console.log(circularQueue.display()); // Output: [20, 30, 40, 50, 60]
  console.log(circularQueue.enqueue(70)); // Output: "Queue is full"
  