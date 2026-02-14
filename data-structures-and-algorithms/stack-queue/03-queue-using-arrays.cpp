#include <bits/stdc++.h>
using namespace std;

/*
=========================================================
CIRCULAR QUEUE IMPLEMENTATION USING ARRAY
=========================================================

Mental Model:
--------------
Queue follows FIFO (First In First Out)

Insert → rear (end)
Remove → front (start)

We use:
- start     → index of front element
- end       → index of last inserted element
- currSize  → number of elements currently in queue
- maxSize   → total capacity

Why Circular?
-------------
To reuse freed space using:
index = (index + 1) % maxSize

Time Complexity:
Push  -> O(1)
Pop   -> O(1)
Peek  -> O(1)
isEmpty -> O(1)

Space Complexity:
O(N)

=========================================================
*/

class ArrayQueue
{
private:
  int *arr;     // Dynamic array to store queue elements
  int start;    // Index of front element
  int end;      // Index of rear element
  int currSize; // Current number of elements
  int maxSize;  // Maximum capacity of queue

public:
  /*
  ------------------------------------------------------
  Constructor
  ------------------------------------------------------
  Initializes:
  - Capacity
  - Allocates memory
  - Sets initial state

  Important Initial State:
  currSize = 0
  start = 0
  end = -1   (since nothing inserted yet)
  */
  ArrayQueue(int size)
  {
    maxSize = size;
    arr = new int[maxSize];

    start = 0;
    end = -1;
    currSize = 0;
  }

  /*
  ------------------------------------------------------
  PUSH OPERATION
  ------------------------------------------------------
  Goal:
  Insert element at rear of queue.

  Steps:
  1) Check overflow
  2) Move rear circularly
  3) Insert element
  4) Increase size
  */
  void push(int x)
  {
    // Overflow condition
    if (currSize == maxSize)
    {
      cout << "Queue Overflow! Cannot insert " << x << endl;
      return;
    }

    /*
    Circular movement:
    If end was at last index,
    modulo brings it back to 0.
    */
    end = (end + 1) % maxSize;

    arr[end] = x; // Insert element
    currSize++;   // Increase size

    cout << x << " inserted into queue" << endl;
  }

  /*
  ------------------------------------------------------
  POP OPERATION
  ------------------------------------------------------
  Goal:
  Remove element from front.

  Steps:
  1) Check underflow
  2) Store front value
  3) Move front circularly
  4) Decrease size
  */
  int pop()
  {
    // Underflow condition
    if (currSize == 0)
    {
      cout << "Queue Underflow! Nothing to remove." << endl;
      return -1;
    }

    int value = arr[start]; // Store front element

    /*
    Move start pointer forward circularly.
    */
    start = (start + 1) % maxSize;

    currSize--; // Reduce size

    return value;
  }

  /*
  ------------------------------------------------------
  PEEK OPERATION
  ------------------------------------------------------
  Returns front element without removing it.
  */
  int peek()
  {
    if (currSize == 0)
    {
      cout << "Queue is empty." << endl;
      return -1;
    }

    return arr[start];
  }

  /*
  ------------------------------------------------------
  isEmpty OPERATION
  ------------------------------------------------------
  Checks if queue has zero elements.
  */
  bool isEmpty()
  {
    return (currSize == 0);
  }

  /*
  ------------------------------------------------------
  Destructor
  ------------------------------------------------------
  Free dynamically allocated memory.
  */
  ~ArrayQueue()
  {
    delete[] arr;
  }
};

/*
=========================================================
MAIN FUNCTION (Testing)
=========================================================
*/
int main()
{
  ArrayQueue q(5);

  q.push(10);
  q.push(20);
  q.push(30);

  cout << "Removed: " << q.pop() << endl;
  cout << "Removed: " << q.pop() << endl;

  cout << "Front element: " << q.peek() << endl;

  return 0;
}
