class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    const temp = this.head;
    this.head = newNode;
    newNode.next = temp;
  }

  display() {
    if (!this.head) {
      console.log("The list is empty.");
      return;
    }

    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  deleteValue(data) {
    if (!this.head) {
      console.log("The list is empty.");
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;
    while (current && current.data !== data) {
      previous = current;
      current = current.next;
    }

    if (!current) {
      console.log("Value not found in the list.");
      return;
    }

    previous.next = current.next;
  }

  count() {
    let count = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      count++;
    }

    console.log("Total Items: ", count);
  }

  getElementAtIndex(index) {
    if (index < 0) {
      console.log("Index should be a non-negative integer.");
      return null;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(`Index ${index} value : `, current.value);
        return;
      }
      count++;
      current = current.next;
    }

    console.log("Index out of range.");
    return null;
  }

  copyList() {
    if (!this.head) {
      return new LinkedList();
    }

    let newList = new LinkedList();
    let current = this.head;

    while (current) {
      newList.insertAtEnd(current.value);
      current = current.next;
    }

    return newList;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  rotateLeft(k) {
    if (!this.head || k <= 0) return;

    let current = this.head;
    let length = 1;

    // Find the length of the list
    while (current.next) {
      current = current.next;
      length++;
    }

    // If k is greater than the length of the list, reduce k
    k = k % length;
    if (k === 0) return;

    // Link the last node to the head to form a circular list
    current.next = this.head;

    // Move to the (length - k)th node
    let stepsToNewHead = length - k;
    let newTail = this.head;
    for (let i = 0; i < stepsToNewHead - 1; i++) {
      newTail = newTail.next;
    }

    // Set the new head and break the circular link
    this.head = newTail.next;
    newTail.next = null;
  }

  rotateRight(k) {
    if (!this.head || k <= 0) return;

    let current = this.head;
    let length = 1;

    // Find the length of the list
    while (current.next) {
      current = current.next;
      length++;
    }

    // If k is greater than the length of the list, reduce k
    k = k % length;
    if (k === 0) return;

    // Link the last node to the head to form a circular list
    current.next = this.head;

    // Move to the (length - k)th node
    let stepsToNewHead = length - k;
    let newTail = this.head;
    for (let i = 0; i < stepsToNewHead - 1; i++) {
      newTail = newTail.next;
    }

    // Set the new head and break the circular link
    this.head = newTail.next;
    newTail.next = null;
  }
}

const list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtBeginning(5);

console.log("Linked List:");
list.display();

list.deleteValue(20);
console.log("After deleting 20:");
list.display();

list.deleteValue(5);
console.log("After deleting 5:");
list.display();
list.count();
list.getElementAtIndex(2);

console.log("Original List:");
list.display();

const copiedList = list.copyList();
console.log("Copied List:");
copiedList.display();

list.reverse();

console.log("Reversed List:");
list.display();

// list.rotateLeft(1);
// console.log("List after rotating left by 1:");
// list.display();

// list.rotateRight(1);
// console.log("List after rotating right by 1:");
// list.display();
