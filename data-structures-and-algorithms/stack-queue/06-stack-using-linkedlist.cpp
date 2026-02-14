#include <bits/stdc++.h>
using namespace std;

/*
=========================================================
STACK IMPLEMENTATION USING SINGLY LINKED LIST
=========================================================

Mental Model:
--------------
Stack follows LIFO (Last In First Out)

Instead of array:
- We use linked list nodes
- Top of stack = head of linked list

Why Linked List?
----------------
1) No fixed size limitation
2) No overflow unless memory full
3) Dynamic memory allocation

Time Complexity:
Push  -> O(1)
Pop   -> O(1)
Top   -> O(1)
isEmpty -> O(1)

Space Complexity:
O(N)

=========================================================
*/

/*
---------------------------------------------------------
Node Structure
---------------------------------------------------------
Each node contains:
- data
- pointer to next node
*/
struct Node
{
  int data;   // Value stored in node
  Node *next; // Pointer to next node

  // Constructor to initialize node
  Node(int x)
  {
    data = x;
    next = nullptr;
  }
};

/*
=========================================================
LinkedListStack Class
=========================================================
*/
class LinkedListStack
{
private:
  Node *head; // Top of stack
  int size;   // Number of elements in stack

public:
  /*
  ------------------------------------------------------
  Constructor
  ------------------------------------------------------
  Initializes:
  - head = nullptr (empty stack)
  - size = 0
  */
  LinkedListStack()
  {
    head = nullptr;
    size = 0;
  }

  /*
  ------------------------------------------------------
  PUSH OPERATION
  ------------------------------------------------------
  Goal:
  Insert element at top of stack.

  Steps:
  1) Create new node
  2) Point new node's next to current head
  3) Move head to new node
  4) Increase size
  */
  void push(int x)
  {
    Node *newNode = new Node(x); // Allocate new node
    newNode->next = head;        // Link new node to current top
    head = newNode;              // Update head
    size++;                      // Increase size

    cout << x << " pushed into stack" << endl;
  }

  /*
  ------------------------------------------------------
  POP OPERATION
  ------------------------------------------------------
  Goal:
  Remove top element.

  Steps:
  1) Check if empty
  2) Store head value
  3) Move head forward
  4) Delete old node
  5) Decrease size
  */
  int pop()
  {
    if (head == nullptr)
    {
      cout << "Stack is empty. Cannot pop." << endl;
      return -1;
    }

    int value = head->data; // Store top value

    Node *temp = head; // Temporary pointer to delete
    head = head->next; // Move head forward

    delete temp; // Free memory
    size--;

    return value;
  }

  /*
  ------------------------------------------------------
  TOP OPERATION
  ------------------------------------------------------
  Returns top element without removing it.
  */
  int top()
  {
    if (head == nullptr)
    {
      cout << "Stack is empty." << endl;
      return -1;
    }

    return head->data;
  }

  /*
  ------------------------------------------------------
  isEmpty OPERATION
  ------------------------------------------------------
  */
  bool isEmpty()
  {
    return (head == nullptr);
  }

  /*
  ------------------------------------------------------
  getSize OPERATION
  ------------------------------------------------------
  */
  int getSize()
  {
    return size;
  }

  /*
  ------------------------------------------------------
  Destructor
  ------------------------------------------------------
  Important:
  We must delete all nodes to avoid memory leak.
  */
  ~LinkedListStack()
  {
    while (head != nullptr)
    {
      Node *temp = head;
      head = head->next;
      delete temp;
    }
  }
};

/*
=========================================================
MAIN FUNCTION (Testing)
=========================================================
*/
int main()
{
  LinkedListStack stack;

  stack.push(10);
  stack.push(20);
  stack.push(30);

  cout << "Top element: " << stack.top() << endl;
  cout << "Popped: " << stack.pop() << endl;
  cout << "Current size: " << stack.getSize() << endl;

  return 0;
}
