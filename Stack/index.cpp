#include <iostream>
using namespace std;

const int MAX_SIZE = 100; // Maximum size of the stack

class Stack
{
private:
    int top;           // Index of the top element
    int arr[MAX_SIZE]; // Array to store stack elements

public:
    Stack()
    {
        top = -1; // Initialize top to -1 (empty stack)
    }

    // Function to push an element onto the stack
    void push(int value)
    {
        if (top >= MAX_SIZE - 1)
        {
            cout << "Stack Overflow! Cannot push element " << value << endl;
            return;
        }
        arr[++top] = value; // Increment top and then insert element
        cout << "Pushed " << value << " onto the stack." << endl;
    }

    // Function to pop an element from the stack
    void pop()
    {
        if (top < 0)
        {
            cout << "Stack Underflow! Cannot pop from an empty stack." << endl;
            return;
        }
        int poppedValue = arr[top--]; // Decrement top after retrieving element
        cout << "Popped " << poppedValue << " from the stack." << endl;
    }

    // Function to peek the top element of the stack
    int peek()
    {
        if (top < 0)
        {
            cout << "Stack is empty. No element to peek." << endl;
            return -1; // or throw an exception
        }
        return arr[top]; // Return the top element
    }

    // Function to check if the stack is empty
    bool isEmpty()
    {
        return top < 0; // Return true if top is less than 0 (empty stack)
    }
};

int main()
{
    Stack stack;

    stack.push(10);
    stack.push(20);
    stack.push(30);

    cout << "Top element is: " << stack.peek() << endl;

    stack.pop();
    stack.pop();

    cout << "Top element is: " << stack.peek() << endl;

    stack.pop();
    stack.pop(); // Trying to pop from an empty stack

    return 0;
}
