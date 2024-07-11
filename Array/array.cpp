#include <iostream>
using namespace std;

int main()
{
    int numbers[5] = {1,
                      2,
                      3,
                      4,
                      5};
    int length = sizeof(numbers) / sizeof(numbers[0]);

    // Iterating over the elements of an array
    cout << "Iterating over the elements of an array: ";
    for (int i = 0; i < length; i++)
    {
        cout << numbers[i] << " ";
    }
    cout << endl;

    cout << "Copying an array: ";
    int copy[5];
    for (int i = 0; i < length; i++)
    {
        copy[i] = numbers[i];
    }

    for (int i = 0; i < length; i++)
    {
        cout << copy[i] << " ";
    }
    cout << endl;

    // Resizing an array
    cout << "Resizing an array: ";
    int newArray[4];
    int newLength = sizeof(newArray) / sizeof(newArray[0]);

    for (int i = 0; i < length; i++)
    {
        if (i < newLength)
        {
            newArray[i] = numbers[i];
        }
    }

    for (int i = 0; i < newLength; i++)
    {
        cout << newArray[i] << " ";
    }
    cout << endl;

    // Reversing an array
    cout << "Reversing an array: ";
    int temp;
    for (int i = 0, j = length - 1; i < length; i++, j--)
    {
        temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }

    for (int i = 0; i < length; i++)
    {
        cout << numbers[i] << " ";
    }
    cout << endl;

    // Shifing an array left
    cout << "Shifing an array left: ";
    for (int i = 0; i < length; i++)
    {
        numbers[i - 1] = numbers[i];
    }
    numbers[length - 1] = -1;

    for (int i = 0; i < length; i++)
    {
        cout << numbers[i] << " ";
    }
    cout << endl;

    // Shifing an array right
    cout << "Shifing an array right: ";
    int shifingArray[5] = {1, 2, 3, 4, 5};
    for (int i = length; i > 0; i--)
    {
        shifingArray[i] = shifingArray[i - 1];
    }
    shifingArray[0] = -1;

    for (int i = 0; i < length; i++)
    {
        cout << shifingArray[i] << " ";
    }
    cout << endl;

    // Inserting an element into an array
    cout << "Inserting an element into an array: ";
    int preArray[5] = {1, 2, 3, 4, 5};
    int Inserting[6];
    int insertingLength = sizeof(Inserting) / sizeof(Inserting[0]);

    for (int i = 0; i < length; i++)
    {
        Inserting[i] = preArray[i];
    }
    Inserting[insertingLength - 1] = 6;

    for (int i = 0; i < insertingLength; i++)
    {
        cout << Inserting[i] << " ";
    }
    cout << endl;

    // Removing an element from an array
    cout << "Removing an element from an array: ";
    int removing[5];
    int removingLength = sizeof(removing) / sizeof(removing[0]);

    for (int i = 0; i < removingLength; i++)
    {
        removing[i] = Inserting[i];
    }

    for (int i = 0; i < removingLength; i++)
    {
        cout << removing[i] << " ";
    }
    cout << endl;

    // Removing index 3 from an array:
    cout << "Removing index 3 from an array: ";
    int remove[4];
    int removeLength = sizeof(remove) / sizeof(remove[0]);

    for (int i = 0; i < removeLength; i++)
    {
        if (i < 3)
        {
            remove[i] = Inserting[i];
        }
        if (i >= 3)
        {
            remove[i] = Inserting[i + 1];
        }
    }

    for (int i = 0; i < removeLength; i++)
    {
        cout << remove[i] << " ";
    }
    cout << endl;

    // Rotating an array left
    cout << "Rotating an array left: ";
    int rotatingArrayLeft[5] = {1, 2, 3, 4, 5};
    temp = rotatingArrayLeft[0];
    for (int i = 0; i < length; i++)
    {
        rotatingArrayLeft[i - 1] = rotatingArrayLeft[i];
    }
    rotatingArrayLeft[length - 1] = temp;

    for (int i = 0; i < length; i++)
    {
        cout << rotatingArrayLeft[i] << " ";
    }
    cout << endl;

    // Rotating an array right
    cout << "Rotating an array right: ";
    int rotatingArrayRight[5] = {1, 2, 3, 4, 5};
    temp = rotatingArrayRight[length - 1];
    for (int i = length; i > 0; i--)
    {
        rotatingArrayRight[i] = rotatingArrayRight[i - 1];
    }
    rotatingArrayRight[0] = temp;

    for (int i = 0; i < length; i++)
    {
        cout << rotatingArrayRight[i] << " ";
    }
    cout << endl;

    return 0;
}