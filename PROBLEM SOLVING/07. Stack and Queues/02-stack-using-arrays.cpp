#include <bits/stdc++.h> // Includes almost all standard C++ libraries
using namespace std;

/*
=========================================================
STACK IMPLEMENTATION USING ARRAY
=========================================================

Mental Model:
--------------
Stack follows LIFO (Last In First Out)

Example:
Push: 10, 20, 30
Stack looks like:

Top -> 30
       20
       10

Pop removes 30 first.

Core Idea:
-----------
We maintain:
1) An array to store elements
2) A variable "topIndex" to track top element
3) A fixed capacity to limit stack size

Time Complexity:
Push  -> O(1)
Pop   -> O(1)
Top   -> O(1)
isEmpty -> O(1)

Space Complexity:
O(N)  (where N = capacity of stack)

=========================================================
*/

class ArrayStack
{
private:
  int *arr;     // Pointer to dynamically allocated array (heap memory)
  int capacity; // Maximum size of stack
  int topIndex; // Index of current top element

public:
  /*
  ------------------------------------------------------
  Constructor
  ------------------------------------------------------

  Purpose:
  - Allocate memory for stack
  - Initialize capacity
  - Initialize topIndex to -1 (means empty stack)

  Why topIndex = -1 ?
  Because:
  - If no elements, no valid index
  - First push will increase to 0
  */
  ArrayStack(int size)
  {
    capacity = size;         // Set maximum size
    arr = new int[capacity]; // Allocate memory on heap
    topIndex = -1;           // Stack initially empty
  }

  /*
  ------------------------------------------------------
  PUSH OPERATION
  ------------------------------------------------------

  Goal:
  Add element at the top of stack.

  Steps:
  1) Check overflow
  2) Increase topIndex
  3) Insert element

  Overflow condition:
  If topIndex == capacity - 1
  Means stack is full.
  */
  void push(int x)
  {
    if (topIndex == capacity - 1)
    {
      // Stack Overflow
      cout << "Stack Overflow! Cannot push " << x << endl;
      return;
    }

    // Pre-increment topIndex
    // Example:
    // Initially topIndex = -1
    // ++topIndex -> 0
    // arr[0] = x
    arr[++topIndex] = x;

    cout << x << " pushed into stack" << endl;
  }

  /*
  ------------------------------------------------------
  POP OPERATION
  ------------------------------------------------------

  Goal:
  Remove and return top element.

  Steps:
  1) Check underflow
  2) Return arr[topIndex]
  3) Decrease topIndex

  Underflow condition:
  If topIndex == -1
  Means stack is empty.
  */
  int pop()
  {
    if (topIndex == -1)
    {
      // Stack Underflow
      cout << "Stack Underflow! Nothing to pop." << endl;
      return -1;
    }

    // Return current top
    // Post-decrement ensures:
    // First value returned
    // Then topIndex decreases
    return arr[topIndex--];
  }

  /*
  ------------------------------------------------------
  TOP OPERATION
  ------------------------------------------------------

  Goal:
  Return current top element
  Without removing it.
  */
  int top()
  {
    if (topIndex == -1)
    {
      cout << "Stack is empty." << endl;
      return -1;
    }

    return arr[topIndex];
  }

  /*
  ------------------------------------------------------
  isEmpty OPERATION
  ------------------------------------------------------

  Goal:
  Check whether stack is empty.
  */
  bool isEmpty()
  {
    return (topIndex == -1);
  }

  /*
  ------------------------------------------------------
  Destructor (Important in real systems)
  ------------------------------------------------------

  Since we used 'new', we must use 'delete'
  to avoid memory leak.
  */
  ~ArrayStack()
  {
    delete[] arr; // Free heap memory
  }
};

/*
=========================================================
MAIN FUNCTION
=========================================================

Testing:
Push -> 10, 20, 30
Pop twice

Expected:
30 removed first
Then 20
*/

int main()
{
  ArrayStack stack(5); // Create stack of capacity 5

  stack.push(10); // Stack: 10
  stack.push(20); // Stack: 10,20
  stack.push(30); // Stack: 10,20,30

  cout << "Popped element: " << stack.pop() << endl; // Removes 30
  cout << "Popped element: " << stack.pop() << endl; // Removes 20

  return 0;
}
