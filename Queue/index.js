class Queue {
  constructor(capacity) {
    this.items = [];
    this.front = 0;
    this.size = 0;
    this.rear = -1;
    this.capacity = capacity;
  }

  // isFull: Check if the queue is full
  isFull() {
    return this.size === this.capacity;
  }

  // Enqueue: Add an element to the end of the queue
  enqueue(element) {
    if (this.isFull()) {
      return;
    }
    this.size = this.size + 1;
    this.rear = this.rear + 1;
    this.items.push(element);
  }

  // Dequeue: Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    this.size = this.size - 1;
    this.rear = this.rear - 1;
    return this.items.shift();
  }

  // Front: Return the front element of the queue without removing it
  getFront() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.front];
  }

  // isEmpty: Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // size: Return the number of elements in the queue
  getSize() {
    return this.size;
  }

  // printQueue: Print the elements of the queue
  printQueue() {
    return this.items.join(" ");
  }

  // Rear: Get the rear item from the queue
  getRear() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    console.log(this.items[this.rear]);
    return;
  }
}

// Example usage:
const queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.printQueue()); // Output: 10 20 30
console.log(queue.dequeue()); // Output: 10
console.log(queue.getFront()); // Output: 20
console.log(queue.isEmpty()); // Output: false
console.log(queue.getSize()); // Output: 3
queue.getRear(); // Output: 40
