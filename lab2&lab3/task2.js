// Task 2: Checking Balanced Parentheses
// Objective: Use a stack to check if a given string has balanced parentheses.
// Tasks:
// Write a function that takes a string containing (, ), {, }, [ and ].
// Use a stack to check if the parentheses are balanced.
// Return true if balanced, otherwise false.
// Test the function with different cases, including nested and unbalanced parentheses.

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  isBalanced() {
    let elements = [];
    const matchingBrackets = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
    for (let char of this.items) {
      if (char === "(" || char === "{" || char === "[") {
        elements.push(char);
      } else if (char === ")" || char === "}" || char === "]") {
        if (
          elements.length === 0 ||
          elements.pop() !== matchingBrackets[char]
        ) {
          return false;
        }
      }
    }

    return elements.length === 0;
  }
}

const exp1 = new Stack();
exp1.push("[");
exp1.push("]");
exp1.push("{");
exp1.push("}");
exp1.push("(");
exp1.push(")");

console.log("(){}[]  is " + exp1.isBalanced());

const exp2 = new Stack();
exp2.push("[");
exp2.push("(");
exp1.push("(");
exp1.push(")");
exp2.push("{");
exp2.push("}");
exp2.push(")");
exp2.push("]");

console.log("[((){})]  is " + exp2.isBalanced());

const exp3 = new Stack();
exp3.push("{");
exp3.push("[");
exp3.push("(");
exp3.push("}");
exp3.push("]");
exp3.push(")");

console.log("{}[(}])  is " + exp3.isBalanced());
