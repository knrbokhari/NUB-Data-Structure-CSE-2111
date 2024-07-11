class Stack {
  constructor(top) {
    this.items = [];
    this.top = top;
  }

  push(element) {
    if (this.top <= this.items.length - 1) {
      console.log("Stack Overflow! Cannot push element ", element);
      return;
    }
    this.items.push(element);
    console.log("Pushed ", element, " onto the stack.");
  }

  pop() {
    if (!this.items.length) {
      console.log("Stack Underflow! Cannot pop from an empty stack.");
      return;
    }
    console.log(
      "Popped ",
      this.items[this.items.length - 1],
      " from the stack."
    );
    this.items.pop(); // Decrement top after retrieving element
  }

  peek() {
    if (!this.items.length) {
      console.log("Stack is empty. No element to peek.");
      return;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return !this.items.length; // Return true if top is less than 0 (empty stack)
  }

  print() {
    if (this.items.length > 0) {
      console.log("Stack is empty.");
      return;
    }

    for (let i = this.top; i > -1; i--) {
      console.log(this.items[i]);
    }
  }
}

const stack = new Stack(5);

stack.push(10);
stack.push(20);
stack.push(30);

let element = stack.peek();
console.log("Top element is: ", element);

element = stack.isEmpty();
console.log("element isEmpty: ", element);

stack.pop();
stack.pop();

element = stack.peek();
console.log("Top element is: ", element);

stack.pop();
stack.pop(); // Trying to pop from an empty stack
element = stack.isEmpty();
console.log("element isEmpty: ", element);
