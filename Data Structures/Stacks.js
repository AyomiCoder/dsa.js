// implement stacks and its operations
// Stacks are a type of data structure where the last element added is the first element that can be removed. This is known as Last In, First Out (LIFO).
class Stack{
    constructor(){
        this.items = [];
    }
    // Add
    push(element){
        this.items.push(element);
    }
    // Remove
    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.items.pop();
    }
    // Check if the stack is empty
    isEmpty(){
        return this.items.length === 0;
    }

    // View the last element
    peek(){
        return this.items[this.items.length - 1];
    }

    // Get the size of the stack
    size(){
        return this.items.length;
    }

    // Clear the stack
    clear(){
        this.items = [];
    }

    // Display the stack
    display(){
        return this.items;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
stack.clear();
console.log(stack.isEmpty()); // Output: true
console.log(stack.pop()); // Output: Stack is empty
console.log(stack.size()); // Output: 0
console.log(stack.display()); // Output: []


