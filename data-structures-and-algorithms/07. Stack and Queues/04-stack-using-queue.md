# PROBLEM (Original Statement)

Implement a Last-In-First-Out (LIFO) stack using a single queue.

Support:

- push(x)
- pop()
- top()
- isEmpty()

---

# BREAKDOWN PROBLEM

### What is being asked?

We must behave like a stack:

Last inserted → First removed

But we are only allowed to use:

Queue (FIFO)

This means:

We must **simulate LIFO using FIFO structure.**

---

# CORE DIFFICULTY

Stack wants:
Remove last inserted element.

Queue allows:
Remove first inserted element.

Conflict.

So we must rearrange elements after every push.

---

# KEY IDEA

After pushing new element into queue:

We rotate previous elements behind it.

So that:

Newest element always stays at front.

That way:

Front of queue becomes top of stack.

---

# VISUAL INTUITION

Suppose we push:

push(4)

Queue:
4

push(8)

Step 1 → Insert 8:

Queue:
4 8

Step 2 → Rotate previous elements (size - 1 times)

Take 4 → move to back

Queue:
8 4

Now front = 8

Which is correct stack behavior.

---

# WHY THIS WORKS

Because:

We force the most recently inserted element
to always come to the front.

So pop() can just remove front.

---

# STEP-BY-STEP LOGIC

push(x):

1. Let size = current queue size
2. Insert x at rear
3. Repeat size times:
   - Take front
   - Push it back

Now new element becomes front.

---

pop():

Remove front.

---

top():

Return front.

---

isEmpty():

Check if queue empty.

---

# PSEUDOCODE

push(x):
s = size of queue
enqueue x

```
repeat s times:
    enqueue front element
    dequeue front element
```

pop():
return dequeue()

top():
return front()

isEmpty():
return queue empty

---

# DRY RUN

push(4)

Queue:
4

push(8)

Initial:
4 8

Rotate once:
Take 4 → push back

Queue:
8 4

Correct.

push(10)

Initial:
8 4 10

Rotate twice:
Take 8 → push back
4 10 8

Take 4 → push back
10 8 4

Now:
10 is at front

Correct stack order:
10 8 4

---

# C++ IMPLEMENTATION

---

## V1 (Only Required Functions)

```cpp
class QueueStack {
    queue<int> q;

public:
    void push(int x) {
        int s = q.size();
        q.push(x);

        for (int i = 0; i < s; i++) {
            q.push(q.front());
            q.pop();
        }
    }

    int pop() {
        if (q.empty()) return -1;
        int val = q.front();
        q.pop();
        return val;
    }

    int top() {
        if (q.empty()) return -1;
        return q.front();
    }

    bool isEmpty() {
        return q.empty();
    }
};
```

---

## V2 (Complete Program with Deep Comments)

```cpp
#include <iostream>
#include <queue>
using namespace std;

class QueueStack {

private:
    queue<int> q;   // Single queue used to simulate stack

public:

    // PUSH operation
    void push(int x) {

        // Step 1: Get current size of queue
        int s = q.size();

        // Step 2: Insert new element at rear
        q.push(x);

        // Step 3: Rotate previous elements behind it
        for (int i = 0; i < s; i++) {

            // Move front element to rear
            q.push(q.front());

            // Remove original front
            q.pop();
        }
    }

    // POP operation
    int pop() {

        if (q.empty()) {
            cout << "Stack is empty\n";
            return -1;
        }

        int val = q.front();
        q.pop();
        return val;
    }

    // TOP operation
    int top() {

        if (q.empty()) {
            cout << "Stack is empty\n";
            return -1;
        }

        return q.front();
    }

    bool isEmpty() {
        return q.empty();
    }
};

int main() {

    QueueStack st;

    st.push(4);
    st.push(8);
    st.push(10);

    cout << "Top: " << st.top() << endl;
    cout << "Pop: " << st.pop() << endl;
    cout << "Top After Pop: " << st.top() << endl;

    return 0;
}
```

---

# JavaScript Version

---

## V1

```javascript
class QueueStack {
  constructor() {
    this.q = [];
  }

  push(x) {
    let size = this.q.length;
    this.q.push(x);

    for (let i = 0; i < size; i++) {
      this.q.push(this.q.shift());
    }
  }

  pop() {
    if (this.q.length === 0) return -1;
    return this.q.shift();
  }

  top() {
    if (this.q.length === 0) return -1;
    return this.q[0];
  }

  isEmpty() {
    return this.q.length === 0;
  }
}
```

---

# TIME COMPLEXITY

push → O(n)
pop → O(1)
top → O(1)
isEmpty → O(1)

Why?

Because during push,
we rotate entire queue.

---

# SPACE COMPLEXITY

O(n)

We store n elements in queue.

---

# EDGE CASES

1. Pop on empty stack
2. Top on empty stack
3. Single element
4. Multiple push-pop cycles

---

# WHY THIS IS CORRECT

Because after every push:

We guarantee newest element moves to front.

So queue’s front always equals stack’s top.

Hence LIFO behavior achieved.

---

# PATTERN RECOGNITION NOTES

This problem tests:

- Reversing order
- Structure transformation
- Simulating one DS using another
- Rotation logic
- Queue manipulation

Whenever question says:

"Implement X using Y"

Your brain must think:

Can I rotate?
Can I reverse?
Can I rearrange elements?
