# PROBLEM (Original Statement)

Implement a Last-In-First-Out (LIFO) stack using an array.

The stack must support:

- `void push(int x)`
- `int pop()`
- `int top()`
- `bool isEmpty()`

---

# BREAKDOWN PROBLEM

### What is being asked?

We must design a stack data structure manually using an array.

### What is input?

Operations like:
push(5)
pop()
top()
isEmpty()

### What is output?

Correct stack behavior:

LIFO → Last inserted should come out first.

---

# CONSTRAINT UNDERSTANDING

- Fixed size array
- Need to handle:
  - Overflow
  - Underflow

- All operations must be O(1)

Important thinking:

Since we need O(1) push & pop,
we CANNOT shift elements.

So we must maintain a pointer.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

First naive thought:

Whenever we push → insert at index 0
Whenever we pop → remove from index 0

But that would require shifting elements.

That makes pop O(n).

Not acceptable.

So brute force fails performance constraint.

---

# BETTER APPROACH

## First Thought Intuition

If shifting is costly, then:

Why not insert and remove from the SAME END?

That way no shifting required.

This gives LIFO naturally.

---

## Thought Process (Step-wise)

1. Create array of size N.
2. Maintain an integer `topIndex`.
3. When empty → topIndex = -1.
4. Push:
   - Increment topIndex
   - Insert element

5. Pop:
   - Return arr[topIndex]
   - Decrement topIndex

6. top():
   - Return arr[topIndex]

7. isEmpty():
   - topIndex == -1

---

## Pseudocode

Initialize:
top = -1

push(x):
if top == capacity-1:
overflow
top++
arr[top] = x

pop():
if top == -1:
underflow
value = arr[top]
top--
return value

top():
if empty → error
return arr[top]

isEmpty():
return top == -1

---

# OPTIMAL APPROACH (Array + Top Pointer)

This is optimal.

Because:

- No shifting
- Direct index access
- Constant time

---

# CODE

---

# C++ IMPLEMENTATION

---

## V1 (Only Required Functions)

```cpp
class ArrayStack {
private:
    int* arr;
    int capacity;
    int topIndex;

public:
    ArrayStack(int size) {
        capacity = size;
        arr = new int[capacity];
        topIndex = -1;
    }

    void push(int x) {
        if (topIndex == capacity - 1)
            return; // overflow
        arr[++topIndex] = x;
    }

    int pop() {
        if (topIndex == -1)
            return -1; // underflow
        return arr[topIndex--];
    }

    int top() {
        if (topIndex == -1)
            return -1;
        return arr[topIndex];
    }

    bool isEmpty() {
        return topIndex == -1;
    }
};
```

---

## V2 (Complete Program – .cpp format with Deep Comments)

```cpp
#include <iostream>
using namespace std;

class ArrayStack {
private:
    int* arr;        // Pointer to dynamic array
    int capacity;    // Maximum size of stack
    int topIndex;    // Index of current top element

public:

    // Constructor
    ArrayStack(int size = 1000) {
        capacity = size;           // Set max capacity
        arr = new int[capacity];   // Allocate memory
        topIndex = -1;             // Initially stack is empty
    }

    // Destructor (Free memory)
    ~ArrayStack() {
        delete[] arr;
    }

    // PUSH Operation
    void push(int x) {

        // If stack is full
        if (topIndex >= capacity - 1) {
            cout << "Stack Overflow\n";
            return;
        }

        // Move top pointer forward
        topIndex++;

        // Insert element at new top
        arr[topIndex] = x;
    }

    // POP Operation
    int pop() {

        // If stack is empty
        if (topIndex == -1) {
            cout << "Stack Underflow\n";
            return -1;
        }

        // Store current top element
        int poppedValue = arr[topIndex];

        // Move top pointer backward
        topIndex--;

        return poppedValue;
    }

    // TOP Operation
    int top() {

        if (topIndex == -1) {
            cout << "Stack is Empty\n";
            return -1;
        }

        return arr[topIndex];
    }

    // isEmpty Operation
    bool isEmpty() {
        return topIndex == -1;
    }
};

int main() {

    ArrayStack stack(5);

    stack.push(10);
    stack.push(20);
    stack.push(30);

    cout << "Top: " << stack.top() << endl;
    cout << "Pop: " << stack.pop() << endl;
    cout << "Top after pop: " << stack.top() << endl;

    return 0;
}
```

---

# JavaScript Implementation

---

## V1 (Minimal Function Version)

```javascript
class ArrayStack {
  constructor(size = 1000) {
    this.capacity = size;
    this.arr = new Array(size);
    this.topIndex = -1;
  }

  push(x) {
    if (this.topIndex === this.capacity - 1) return;
    this.arr[++this.topIndex] = x;
  }

  pop() {
    if (this.topIndex === -1) return -1;
    return this.arr[this.topIndex--];
  }

  top() {
    if (this.topIndex === -1) return -1;
    return this.arr[this.topIndex];
  }

  isEmpty() {
    return this.topIndex === -1;
  }
}
```

---

## V2 (Complete Runnable Version with Comments)

```javascript
class ArrayStack {
  constructor(size = 5) {
    this.capacity = size; // Max capacity
    this.arr = new Array(size);
    this.topIndex = -1; // Stack empty
  }

  push(x) {
    if (this.topIndex >= this.capacity - 1) {
      console.log("Stack Overflow");
      return;
    }

    this.topIndex++;
    this.arr[this.topIndex] = x;
  }

  pop() {
    if (this.topIndex === -1) {
      console.log("Stack Underflow");
      return -1;
    }

    const value = this.arr[this.topIndex];
    this.topIndex--;
    return value;
  }

  top() {
    if (this.topIndex === -1) {
      console.log("Stack is Empty");
      return -1;
    }
    return this.arr[this.topIndex];
  }

  isEmpty() {
    return this.topIndex === -1;
  }
}

// Testing
const stack = new ArrayStack(5);

stack.push(100);
stack.push(200);
stack.push(300);

console.log("Top:", stack.top());
console.log("Pop:", stack.pop());
console.log("Top After Pop:", stack.top());
```

---

# Time and Space Complexity

Push → O(1)
Pop → O(1)
Top → O(1)
isEmpty → O(1)

Why?

Because:
Only pointer movement.
No shifting.
Direct index access.

Space Complexity → O(N)
Because array of size N.

---

# Dry Run

Push 10
topIndex = 0

Push 20
topIndex = 1

Push 30
topIndex = 2

Pop
returns 30
topIndex = 1

Correct LIFO behavior.

---

# Edge Cases

1. Pop on empty stack
2. Push when full
3. top() on empty
4. Stack of size 1
5. Large number of operations

---

# How This Approach Handles the Problem

- No shifting
- Controlled access
- Single pointer management
- Constant time

---

# Why This Is Optimal

Constraints require O(1) operations.

Array + top pointer gives:

- Direct memory access
- No traversal
- No dynamic overhead

Cannot improve beyond O(1).

So this is optimal.

---

# Pattern Recognition Notes (Very Important)

When to think array-based stack?

If:

- Fixed size required
- Memory control needed
- Embedded systems
- Competitive programming

When to use linked list stack?

If:

- Dynamic size needed
- Unknown capacity

---
