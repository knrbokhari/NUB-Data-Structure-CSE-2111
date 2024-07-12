#include <iostream>
using namespace std;

class StackNode
{
public:
    int data;
    StackNode *next;

    StackNode(int value)
    {
        data = value;
        next = nullptr;
    }
};

class StackLinkedList
{
private:
    StackNode *head;

public:
    StackLinkedList()
    {
        head = nullptr;
    }

    void push(int value);
    void pop();
    void isEmpty();
    void peek();
};

void StackLinkedList::push(int value)
{
    StackNode *newNode = new StackNode(value);
    if (head == nullptr)
    {
        head = newNode;
    }
    else
    {
        StackNode *temp = head;
        head = newNode;
        newNode->next = temp;
    }
    cout << value << " is added into Stack" << endl;
}

void StackLinkedList::pop()
{
    if (head == nullptr)
    {
        cout << "Stack is Empty" << endl;
    }
    else
    {
        StackNode *popNode = head;
        head = head->next;
        cout << popNode->data << " is removed from Stack" << endl;
        delete popNode;
    }
}

void StackLinkedList::isEmpty()
{
    if (head == nullptr)
    {
        cout << "Stack is Empty" << endl;
    }
    else
    {
        cout << "Stack is not Empty" << endl;
    }
}

void StackLinkedList::peek()
{
    if (head == nullptr)
    {
        cout << "Stack is Empty" << endl;
    }
    else
    {
        cout << head->data << " is at the top of the Stack" << endl;
    }
}

int main()
{
    StackLinkedList list;
    cout << "Inserting:" << endl;
    list.push(10);
    list.push(20);
    list.push(30);

    cout << "Removing:" << endl;
    list.pop();
    list.peek();
    list.pop();
    list.pop();
    list.isEmpty();

    return 0;
}
