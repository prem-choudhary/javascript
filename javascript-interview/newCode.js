
let list = [10, 20, 30, 40];
console.log("Array List Access:", list[2]); // Output: 30 (O(1) access)

let stack = [];

stack.push(1); // O(1)
stack.push(2);
stack.push(3);
console.log("Stack Pop:", stack.pop()); // Output: 3 (O(1))

console.log("Stack After Pop:", stack); // Output: [1, 2]

let queue = [];
queue.push(1); // O(1)
queue.push(2);
console.log("Queue Shift:", queue.shift()); // Output: 1 (O(n))

console.log("Queue After Shift:", queue); // Output: [2]

class SimpleQueue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }
  dequeue() {
    if (this.head === this.tail) return null;
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }
}
let customQueue = new SimpleQueue();
customQueue.enqueue(1);
customQueue.enqueue(2);
console.log("Custom Queue Dequeue:", customQueue.dequeue()); // Output: 1 (O(1))
console.log("Custom Queue Dequeue:", customQueue.dequeue()); // Output: 2

let duplicates = [1, 1, 2, 3, 3];
let uniqueSet = new Set(duplicates);
console.log("Unique Values (Set):", [...uniqueSet]); // Output: [1, 2, 3]
console.log("Set Has 2:", uniqueSet.has(2)); // Output: true (O(1))

let map = new Map();
map.set("name", "Alice");
map.set("age", 25);
console.log("Map Get Name:", map.get("name")); // Output: Alice
console.log("Map Size:", map.size); // Output: 2

let dynamicArray = [1, 2];
dynamicArray.push(3); // Auto-resize
dynamicArray[5] = 6; // Expands with undefined slots
console.log("Dynamic Array:", dynamicArray); // Output: [1, 2, 3, undefined, undefined, 6]
console.log("Array Length:", dynamicArray.length); // Output: 6

let searchArray = [10, 20, 30, 40];
console.log("Array Includes 20:", searchArray.includes(20)); // Output: true (O(n))
let searchSet = new Set(searchArray);
console.log("Set Has 20:", searchSet.has(20)); // Output: true (O(1))
