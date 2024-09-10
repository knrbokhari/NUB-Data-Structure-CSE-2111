// Task 1: Reversing a String Using a Stack
// Objective: Use a stack to reverse a string.
// Tasks:
// Write a program that takes a string input from the user.
// Push each character of the string onto the stack.
// Pop the characters from the stack and append them to form the reversed string.
// Display the original and reversed strings.

class Stack {
  constructor() {
    this.items = [];
  }

  // Push element onto the stack
  push(element) {
    this.items.push(element);
  }

  display() {
    let elements = "";
    for (let char of this.items) {
      elements = elements + char;
    }

    console.log("Original string: " + elements);
  }

  reverseString() {
    let reversedString = "";
    while (this?.items?.length) {
      reversedString += this.items.pop();
    }

    console.log("Reversed string: " + reversedString);
  }
}

const stack = new Stack();

stack.push("N");
stack.push("A");
stack.push("E");
stack.push("E");
stack.push("M");

stack.display();
stack.reverseString();
