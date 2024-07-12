class StackNode {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.head = null;
  }

  push(data) {
    const newNode = new StackNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const temp = this.head;
      this.head = newNode;
      newNode.next = temp;
    }
    console.log(data, " is added into Stack");
  }

  pop() {
    if (this.head === null) {
      console.log("Stack is Empty");
    } else {
      const temp = this.head;
      this.head = this.head.next;
      console.log(temp.value, " is removed from Stack");
      // delete temp;
    }
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  peek() {
    if (this.head === null) {
      console.log("Stack is Empty");
    } else {
      console.log(this.head.value, " is at the top of the Stack");
    }
  }
}

const list = new StackLinkedList();

console.log("push");
list.push(10);
list.push(20);
list.push(30);
let result = list.isEmpty();
console.log("isEmpty: ", result);
console.log("pop");
list.pop();
list.pop();
console.log("peek");
list.peek();
list.pop();
result = list.isEmpty();
console.log("isEmpty: ", result);
