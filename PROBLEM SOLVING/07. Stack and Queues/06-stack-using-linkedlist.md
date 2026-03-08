# PROBLEM (Original Statement)

Implement a Last-In-First-Out (LIFO) stack using a singly linked list.

Support:

- push(x)
- pop()
- top()
- isEmpty()

---

# BREAKDOWN PROBLEM

### What is being asked?

Create a stack data structure, but instead of array,
use a singly linked list.

### Key Question

In array stack:
We used `topIndex`.

In linked list stack:
What represents top?

Answer:
The head pointer.

Head = top of stack.

---

# WHY LINKED LIST STACK?

Array stack limitation:

- Fixed size
- Overflow possible

Linked list stack:

- Dynamic size
- No predefined capacity
- Overflow only when memory full

---

# MENTAL MODEL

Stack must behave:

Push → add to top
Pop → remove from top

In linked list:

Insertion at head is O(1)
Deletion at head is O(1)

Perfect for stack.

---

# DATA STRUCTURE DESIGN

## Node Structure

Each node contains:

- data
- next pointer

---

## Stack Structure

Maintain:

- Node\* head → top
- int size → optional but useful

---

# OPERATIONS DEEP THINKING

---

## PUSH(x)

Goal:
Add element to top.

Steps:

1. Create new node
2. newNode->next = head
3. head = newNode
4. size++

Time → O(1)

---

## POP()

Goal:
Remove top element.

Steps:

1. If head == NULL → underflow
2. Store head value
3. temp = head
4. head = head->next
5. delete temp
6. size--

Time → O(1)

---

## TOP()

Return head->val

---

## isEmpty()

Return head == NULL

---

# PSEUDOCODE

push(x):
create newNode
newNode.next = head
head = newNode
size++

pop():
if head == NULL:
return -1

```
value = head.val
temp = head
head = head.next
delete temp
size--
return value
```

top():
if empty return -1
return head.val

---

# DRY RUN

push 3

head → 3 → NULL

push 7

head → 7 → 3 → NULL

pop

remove 7

head → 3 → NULL

Correct LIFO behavior.

---

# C++ IMPLEMENTATION

---

## V1 (Only Required Functions)

```cpp
class LinkedListStack {
private:
    struct Node {
        int val;
        Node* next;
        Node(int x) : val(x), next(NULL) {}
    };

    Node* head;

public:
    LinkedListStack() {
        head = NULL;
    }

    void push(int x) {
        Node* newNode = new Node(x);
        newNode->next = head;
        head = newNode;
    }

    int pop() {
        if (head == NULL) return -1;

        int value = head->val;
        Node* temp = head;
        head = head->next;
        delete temp;
        return value;
    }

    int top() {
        if (head == NULL) return -1;
        return head->val;
    }

    bool isEmpty() {
        return head == NULL;
    }
};
```

---

## V2 (Complete .cpp Program with Deep Comments)

```cpp
#include <iostream>
using namespace std;

// Node structure
struct Node {
    int val;        // Data stored in node
    Node* next;     // Pointer to next node

    // Constructor
    Node(int x) {
        val = x;
        next = NULL;
    }
};

// Stack class using Linked List
class LinkedListStack {

private:
    Node* head;   // Top of stack
    int size;     // Number of elements

public:

    // Constructor
    LinkedListStack() {
        head = NULL;  // Initially empty
        size = 0;
    }

    // PUSH operation
    void push(int x) {

        // Create new node
        Node* newNode = new Node(x);

        // Link new node to previous top
        newNode->next = head;

        // Update head to new node
        head = newNode;

        size++;
    }

    // POP operation
    int pop() {

        if (head == NULL) {
            cout << "Stack Underflow\n";
            return -1;
        }

        int value = head->val;

        Node* temp = head;       // Store old head
        head = head->next;       // Move head forward
        delete temp;             // Free memory

        size--;

        return value;
    }

    // TOP operation
    int top() {

        if (head == NULL) {
            cout << "Stack Empty\n";
            return -1;
        }

        return head->val;
    }

    bool isEmpty() {
        return head == NULL;
    }

    int getSize() {
        return size;
    }
};

int main() {

    LinkedListStack st;

    st.push(3);
    st.push(7);
    st.push(10);

    cout << "Top: " << st.top() << endl;
    cout << "Pop: " << st.pop() << endl;
    cout << "Top After Pop: " << st.top() << endl;

    return 0;
}
```

---

# TIME COMPLEXITY

push → O(1)
pop → O(1)
top → O(1)
isEmpty → O(1)

Because:
We only modify head pointer.

---

# SPACE COMPLEXITY

O(N)

Each element requires:

- data
- pointer

So more memory than array stack.

---

# EDGE CASES

1. Pop on empty stack
2. Top on empty stack
3. Large number of pushes
4. Memory leak (if delete not used)

---

# ARRAY STACK vs LINKED LIST STACK

| Feature        | Array Stack | Linked List Stack   |
| -------------- | ----------- | ------------------- |
| Size           | Fixed       | Dynamic             |
| Overflow       | Possible    | Only if memory full |
| Memory         | Contiguous  | Non-contiguous      |
| Cache friendly | Yes         | No                  |
| Extra pointer  | No          | Yes                 |

---

# WHEN TO USE WHICH?

Use Array Stack:

- Known capacity
- Performance critical
- Competitive programming

Use Linked List Stack:

- Unknown size
- Dynamic memory required
- No capacity limit

---

# PATTERN RECOGNITION NOTES

Whenever problem says:

- Dynamic stack
- Unknown input size
- Continuous stream

Think:

Linked list stack.

Whenever:

- Memory tight
- Fixed limit

Think:

Array stack.
