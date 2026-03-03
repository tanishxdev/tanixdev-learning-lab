# PROBLEM (Original Statement)

Implement a First-In-First-Out (FIFO) queue using a singly linked list.

Support:

- push(x)
- pop()
- peek()
- isEmpty()

---

# BREAKDOWN PROBLEM

### What is being asked?

Design a queue using linked list.

Queue must follow:

FIFO → First In First Out

---

# CORE DESIGN THINKING

In stack (linked list):
We only needed head.

In queue:
We need TWO pointers:

- front (start)
- rear (end)

Why?

Because:

Insertion happens at rear.
Deletion happens at front.

If we only use head:
Insertion at end becomes O(n).

So we must maintain tail pointer.

---

# DATA STRUCTURE DESIGN

---

## Node Structure

Each node contains:

- int val
- Node\* next

---

## Queue Structure

Maintain:

- Node\* front
- Node\* rear
- int size

Initial:

front = NULL
rear = NULL

---

# OPERATIONS DEEP THINKING

---

## PUSH(x) → Enqueue

Goal:
Add element at rear.

Steps:

1. Create new node.
2. If queue empty:
   front = rear = newNode
3. Else:
   rear->next = newNode
   rear = newNode
4. size++

Time → O(1)

---

## POP() → Dequeue

Goal:
Remove element from front.

Steps:

1. If front == NULL → underflow
2. Store front value
3. temp = front
4. front = front->next
5. delete temp
6. If front becomes NULL:
   rear = NULL
7. size--

Time → O(1)

Important:
When last element removed,
rear must also become NULL.

---

## PEEK()

Return front->val

---

## isEmpty()

Return front == NULL

---

# PSEUDOCODE

push(x):
create newNode

```
if front == NULL:
    front = rear = newNode
else:
    rear.next = newNode
    rear = newNode

size++
```

pop():
if front == NULL:
return -1

```
value = front.val
temp = front
front = front.next
delete temp

if front == NULL:
    rear = NULL

size--

return value
```

peek():
if empty return -1
return front.val

---

# DRY RUN

push 3

front → 3 → NULL
rear → 3

push 7

3 → 7 → NULL
rear → 7

pop

remove 3

front → 7 → NULL
rear → 7

Correct FIFO behavior.

---

# C++ IMPLEMENTATION

---

## V1 (Only Required Functions)

```cpp
class LinkedListQueue {
private:
    struct Node {
        int val;
        Node* next;
        Node(int x) : val(x), next(NULL) {}
    };

    Node* frontNode;
    Node* rearNode;

public:
    LinkedListQueue() {
        frontNode = rearNode = NULL;
    }

    void push(int x) {
        Node* newNode = new Node(x);

        if (rearNode == NULL) {
            frontNode = rearNode = newNode;
        } else {
            rearNode->next = newNode;
            rearNode = newNode;
        }
    }

    int pop() {
        if (frontNode == NULL) return -1;

        int value = frontNode->val;
        Node* temp = frontNode;
        frontNode = frontNode->next;

        if (frontNode == NULL)
            rearNode = NULL;

        delete temp;
        return value;
    }

    int peek() {
        if (frontNode == NULL) return -1;
        return frontNode->val;
    }

    bool isEmpty() {
        return frontNode == NULL;
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
    int val;       // Data
    Node* next;    // Pointer to next node

    Node(int x) {
        val = x;
        next = NULL;
    }
};

// Queue class
class LinkedListQueue {

private:
    Node* frontNode;   // Points to first element
    Node* rearNode;    // Points to last element
    int size;

public:

    // Constructor
    LinkedListQueue() {
        frontNode = rearNode = NULL;
        size = 0;
    }

    // PUSH operation (enqueue)
    void push(int x) {

        Node* newNode = new Node(x);

        if (rearNode == NULL) {
            // First element
            frontNode = rearNode = newNode;
        }
        else {
            rearNode->next = newNode;
            rearNode = newNode;
        }

        size++;
    }

    // POP operation (dequeue)
    int pop() {

        if (frontNode == NULL) {
            cout << "Queue Underflow\n";
            return -1;
        }

        int value = frontNode->val;

        Node* temp = frontNode;
        frontNode = frontNode->next;

        // If queue becomes empty
        if (frontNode == NULL) {
            rearNode = NULL;
        }

        delete temp;
        size--;

        return value;
    }

    // PEEK operation
    int peek() {

        if (frontNode == NULL) {
            cout << "Queue Empty\n";
            return -1;
        }

        return frontNode->val;
    }

    bool isEmpty() {
        return frontNode == NULL;
    }

    int getSize() {
        return size;
    }
};

int main() {

    LinkedListQueue q;

    q.push(3);
    q.push(7);
    q.push(10);

    cout << "Front: " << q.peek() << endl;
    cout << "Pop: " << q.pop() << endl;
    cout << "Front After Pop: " << q.peek() << endl;

    return 0;
}
```

---

# TIME COMPLEXITY

push → O(1)
pop → O(1)
peek → O(1)
isEmpty → O(1)

Because:
Only pointer manipulation.

---

# SPACE COMPLEXITY

O(N)

Each element requires:

- data
- next pointer

---

# ARRAY QUEUE vs LINKED LIST QUEUE

| Feature               | Array Queue | Linked List Queue   |
| --------------------- | ----------- | ------------------- |
| Size                  | Fixed       | Dynamic             |
| Overflow              | Yes         | Only if memory full |
| Memory                | Contiguous  | Non-contiguous      |
| Cache Friendly        | Yes         | Less                |
| Circular logic needed | Yes         | No                  |

---

# WHEN TO USE WHICH?

Use Array Queue:

- Fixed size buffer
- Circular behavior
- Performance critical

Use Linked List Queue:

- Unknown size
- Streaming input
- Dynamic growth

---

# PATTERN RECOGNITION NOTES

Queue using linked list is best when:

- Continuous insertion
- Unknown data size
- Real-time systems
- Dynamic workloads

---

Now foundation complete:

You now know:

Stack:

- Array
- Linked List
- Using Queue

Queue:

- Array (Circular)
- Linked List
- Using Stack
