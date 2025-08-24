class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the first element
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  // View the first element
  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
