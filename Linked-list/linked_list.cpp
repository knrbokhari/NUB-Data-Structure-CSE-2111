#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;

    Node(int value)
    {
        data = value;
        next = nullptr;
    }
};

class LinkedList
{
private:
    Node *head;

public:
    void insertAtEnd(int value);
    void insertAtBeginning(int value);
    void display();
    void deleteValue(int value);
};

void LinkedList::insertAtEnd(int value)
{
    Node *newNode = new Node(value);
    if (head == nullptr)
    {
        head = newNode;
        return;
    }

    Node *temp = head;
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