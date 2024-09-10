// Task 3:  Linked List Reversal
// Objective: Reverse a singly linked list.
// Tasks:
// Implement a function reverseList() that reverses the linked list by changing the links between nodes.
// Test the function by creating a linked list, displaying it, reversing it, and then displaying the reversed list.
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

  reverseList() {
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
}

const list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtEnd(50);

console.log("Original List:");
list.display();

list.reverseList();

console.log("Reversed List:");
list.display();
