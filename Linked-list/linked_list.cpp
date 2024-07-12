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

class LinkedList
{
private:
    StackNode *head;

public:
    void insertAtEnd(int value);
    void insertAtBeginning(int value);
    void display();
    void deleteValue(int value);
};

void LinkedList::insertAtEnd(int value)
{
    StackNode *newNode = new StackNode(value);
    if (head == nullptr)
    {
        head = newNode;
        return;
    }

    StackNode *temp = head;
    while (temp->next != nullptr)
    {
        temp = temp->next;
    }
    temp->next = newNode;
}
void LinkedList::insertAtBeginning(int value) {}
void LinkedList::display() {}
void LinkedList::deleteValue(int value) {}

int main()
{
    LinkedList list;
    cout << "insertAtEnd" << endl;
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);

    return 0;
}