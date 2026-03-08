# PROBLEM (Original Statement)

Implement a First-In-First-Out (FIFO) queue using two stacks.

Support:

- push(x)
- pop()
- peek()
- isEmpty()

---

# CORE CONFLICT

Queue wants:

First inserted → First removed (FIFO)

Stack gives:

Last inserted → First removed (LIFO)

So we must **reverse order twice** to simulate FIFO.

---

# APPROACH 1

## Push Costly (O(n)), Pop O(1)

---

# INTUITION

We maintain:

stack1 → main stack (queue order maintained)
stack2 → helper stack

Goal:

After every push,
stack1 top should always represent queue front.

---

## PUSH(x)

Steps:

1. Move all elements from stack1 to stack2.
2. Push x into stack1.
3. Move everything back from stack2 to stack1.

This ensures:

Oldest element always remains at top of stack1.

---

## WHY THIS WORKS

Because:

Reversing twice maintains order.

We basically insert element at bottom of stack.

---

## DRY RUN

Push 4:

stack1: 4

Push 8:

Move 4 → stack2
stack1 empty
Push 8 → stack1
Move 4 back

stack1:
4 (top)
8

So pop removes 4 → correct FIFO.

---

# CODE (Push O(n))

---

## C++ V2 (Complete Program with Comments)

```cpp
#include <iostream>
#include <stack>
using namespace std;

class StackQueue {

private:
    stack<int> st1;   // Main stack (holds queue order)
    stack<int> st2;   // Helper stack

public:

    // PUSH operation
    void push(int x) {

        // Step 1: Move all elements from st1 to st2
        while (!st1.empty()) {
            st2.push(st1.top());
            st1.pop();
        }

        // Step 2: Push new element into st1
        st1.push(x);

        // Step 3: Move elements back to st1
        while (!st2.empty()) {
            st1.push(st2.top());
            st2.pop();
        }
    }

    // POP operation
    int pop() {
        if (st1.empty()) {
            cout << "Queue is empty\n";
            return -1;
        }

        int val = st1.top();
        st1.pop();
        return val;
    }

    // PEEK operation
    int peek() {
        if (st1.empty()) {
            cout << "Queue is empty\n";
            return -1;
        }
        return st1.top();
    }

    bool isEmpty() {
        return st1.empty();
    }
};

int main() {

    StackQueue q;

    q.push(4);
    q.push(8);
    q.push(10);

    cout << "Front: " << q.peek() << endl;
    cout << "Pop: " << q.pop() << endl;
    cout << "Front After Pop: " << q.peek() << endl;

    return 0;
}
```

---

# TIME COMPLEXITY (Approach 1)

push → O(n)
pop → O(1)
peek → O(1)

Space → O(n)

---

# APPROACH 2

## Push O(1), Pop Amortized O(1) (OPTIMAL)

This is the **real interview solution**.

---

# INTUITION

We use:

input stack → for push
output stack → for pop

Key idea:

When output stack becomes empty,
transfer everything from input to output.

This reverses order.

---

# WHY THIS WORKS

Example:

Push 3
Push 4
Push 5

input stack:
3 4 5 (5 top)

Now pop:

Move everything to output:

output:
5 → 4 → 3 (3 on top)

Now pop → 3 (correct FIFO)

---

# IMPORTANT CONCEPT

## Amortized Analysis

Each element moves:

- Once from input → output
- Then popped once

So each element moves at most twice.

Total operations across n pushes and pops = O(n)

So amortized cost per operation = O(1)

---

# PSEUDOCODE (Optimal)

push(x):
input.push(x)

pop():
if output empty:
while input not empty:
output.push(input.top())
input.pop()

```
return output.pop()
```

peek():
if output empty:
shift elements
return output.top()

isEmpty():
return input empty AND output empty

---

# C++ IMPLEMENTATION (Optimal)

---

## V2 (Complete Program with Comments)

```cpp
#include <iostream>
#include <stack>
using namespace std;

class StackQueue {

private:
    stack<int> input;    // For push operations
    stack<int> output;   // For pop/peek operations

public:

    // PUSH operation (O(1))
    void push(int x) {
        input.push(x);
    }

    // POP operation (Amortized O(1))
    int pop() {

        // If output stack is empty, transfer elements
        if (output.empty()) {

            while (!input.empty()) {
                output.push(input.top());
                input.pop();
            }
        }

        if (output.empty()) {
            cout << "Queue is empty\n";
            return -1;
        }

        int val = output.top();
        output.pop();
        return val;
    }

    // PEEK operation
    int peek() {

        if (output.empty()) {

            while (!input.empty()) {
                output.push(input.top());
                input.pop();
            }
        }

        if (output.empty()) {
            cout << "Queue is empty\n";
            return -1;
        }

        return output.top();
    }

    bool isEmpty() {
        return input.empty() && output.empty();
    }
};

int main() {

    StackQueue q;

    q.push(3);
    q.push(4);
    q.push(5);

    cout << "Pop: " << q.pop() << endl;
    cout << "Front: " << q.peek() << endl;
    cout << "Pop: " << q.pop() << endl;
    cout << "Pop: " << q.pop() << endl;

    cout << "Is Empty? " << (q.isEmpty() ? "Yes" : "No") << endl;

    return 0;
}
```

---

# TIME COMPLEXITY (Optimal)

push → O(1)
pop → Amortized O(1)
peek → Amortized O(1)

Worst case single pop = O(n)
But averaged over operations = O(1)

Space → O(n)

---

# WHY APPROACH 2 IS BETTER

Approach 1:
Every push costs O(n)

Approach 2:
Each element moves at most once.

Much more efficient.

---

# PATTERN RECOGNITION NOTES

When question says:

Implement X using Y

Think:

Can I reverse order?
Can I delay operations?
Can I use amortized logic?

Queue using stack → reversal trick
Stack using queue → rotation trick

---

# FINAL STRUCTURE COMPARISON

Stack using Queue:
Rotate after push.

Queue using Stack:
Reverse when needed.
