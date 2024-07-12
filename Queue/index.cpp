#include <iostream>
#include <climits>
using namespace std;

class Queue
{
private:
    int front, rear, size;
    unsigned capacity;
    int *array;

public:
    // Constructor to initialize the queue
    Queue(unsigned capacity)
    {
        this->capacity = capacity;
        front = size = 0;
        rear = capacity - 1;
        array = new int[this->capacity];
    }

    // Destructor to clean up memory
    ~Queue()
    {
        delete[] array;
    }

    // isFull: Check if the queue is full
    bool isFull()
    {
        return (size == capacity);
    }

    // isEmpty: Check if the queue is empty
    bool isEmpty()
    {
        return (size == 0);
    }

    // Enqueue: Add an item to the queue
    void enqueue(int item)
    {
        if (isFull())
            return;
        rear = (rear + 1) % capacity;
        array[rear] = item;
        size = size + 1;
        cout << item << " enqueued to queue\n";
    }

    // Dequeue: Remove an item from the queue
    int dequeue()
    {
        if (isEmpty())
            return INT_MIN;
        int item = array[front];
        front = (front + 1) % capacity;
        size = size - 1;
        return item;
    }

    // Front: Get the front item from the queue
    int getFront()
    {
        if (isEmpty())
            return INT_MIN;
        return array[front];
    }

    // Rear: Get the rear item from the queue
    int getRear()
    {
        if (isEmpty())
            return INT_MIN;
        return array[rear];
    }
};

// Example usage
int main()
{
    Queue queue(1000);

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);

    cout << queue.dequeue() << " dequeued from queue\n";

    cout << "Front item is " << queue.getFront() << endl;
    cout << "Rear item is " << queue.getRear() << endl;

    return 0;
}
