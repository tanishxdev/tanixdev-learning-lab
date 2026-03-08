# PROBLEM (Original Statement)

Implement a First-In-First-Out (FIFO) queue using an array.

Support:

- `void push(int x)`
- `int pop()`
- `int peek()`
- `bool isEmpty()`

---

# BREAKDOWN PROBLEM

### What is being asked?

Design a queue manually using array.

Queue must follow:

FIFO → First In First Out

### Input

Sequence of operations:
push(5)
push(10)
pop()
peek()
isEmpty()

### Output

Queue behavior must respect order.

If 5 inserted before 10
Then 5 must come out first.

---

# CONSTRAINT UNDERSTANDING

We must achieve:

push → O(1)
pop → O(1)
peek → O(1)

Important:

If we implement simple array queue without circular logic,
we get false overflow.

So we must use **circular queue logic**.

That is the optimal design.

---

# WHY SIMPLE ARRAY QUEUE FAILS

## 1. Core Concept – What is a Simple (Linear) Queue?

Simple array queue me hum:

- `front` → removal pointer
- `rear` → insertion pointer

Rules:

- Insert → `rear++`
- Delete → `front++`
- Queue left to right grow karti hai

Important:
Rear kabhi left side wapas nahi aata.

Yahi main issue hai.

---

## 2. Step-by-Step Example

### Given:

Array size = 5
Index = 0 1 2 3 4

---

### Step 1 – Push 5 elements

Push: 10 20 30 40 50

Array:

[10, 20, 30, 40, 50]

front = 0
rear = 4

Queue full ho gaya.

---

### Step 2 – Pop 3 elements

Pop: 10 20 30

Array logically:

[_, _, _, 40, 50]

front = 3
rear = 4

Yahan samajhne wali baat:

Indexes 0,1,2 ab empty hain.

But rear still index 4 par hai.

---

### Step 3 – Try Push Again

Insertion rule:

rear++

So:

rear = 5

But valid indexes = 0 to 4

Toh system bolega → Overflow

Even though:

Index 0,1,2 are empty.

Yeh artificial overflow hai.

---

## 3. Root Cause of Failure

Problem simple hai:

- rear sirf increase hota hai
- rear kabhi wrap nahi karta
- deleted space reuse nahi hoti
- memory waste hoti hai

Isliye ise bolte hain:

Linear Queue Problem

---

## 4. Visualization Thinking

Step 1:

[10,20,30,40,50]

Step 2:

[*,*,_,40,50]

Step 3:

Overflow

But space available hai.

Issue logical design ka hai, memory ka nahi.

---

## 5. Why Modular Arithmetic Fixes It

Circular queue me insertion hota hai:

rear = (rear + 1) % size

Example:

rear = 4
size = 5

New rear:

(4 + 1) % 5 = 0

Rear wrap ho gaya.

Ab insertion index 0 pe hoga.

Array ban jayega:

[60, _, _, 40, 50]

Ab freed space reuse ho gaya.

No memory waste.

### Why `rear = (rear + 1) % size` — Intuition

Sabse pehle samjho problem kya solve kar rahe hain.

Hum chahte hain:

- Rear next position pe move kare
- Agar end pe pahunch jaaye
- Toh automatically start pe aa jaaye

Yeh “wrap around” behaviour chahiye.

---

### Step 1 – Normal Increment Kya Karta Hai?

Agar hum likhen:

rear = rear + 1

Toh movement aise hota hai:

0 → 1 → 2 → 3 → 4 → 5 (invalid)

Array size = 5 ho toh valid index:

0 to 4

Index 5 invalid hai.

Yahin overflow problem aati hai.

---

### Step 2 – Hume Circular Behaviour Chahiye

Imagine array as circle:

0 → 1 → 2 → 3 → 4
↑ ↓
← ← ← ← ← ← ← ← ←

Matlab 4 ke baad 0 aana chahiye.

So we need formula jo:

- Normally increment kare
- But limit cross karte hi reset kar de

---

### Step 3 – Modulo Operator Kya Karta Hai?

Modulo (%) remainder return karta hai.

Example:

5 % 5 = 0
6 % 5 = 1
7 % 5 = 2

Notice pattern:

Jab number size ke equal hota hai
Toh remainder 0 milta hai

Exactly wahi hume chahiye.

---

### Step 4 – Formula Breakdown

rear = (rear + 1) % size

Break it:

1. rear + 1 → move forward
2. % size → ensure index always 0 to size-1 ke beech rahe

---

### Step 5 – Practical Example

Array size = 5
Valid index = 0 1 2 3 4

Case 1: rear = 2

(rear + 1) % 5
= (2 + 1) % 5
= 3

Normal increment.

---

Case 2: rear = 4

(rear + 1) % 5
= (4 + 1) % 5
= 5 % 5
= 0

Wrap ho gaya.

Exactly circular behaviour.

---

### Step 6 – Why This Is Safe?

Because:

Modulo guarantees result range:

0 ≤ result < size

So kabhi out-of-bounds nahi jayega.

Memory safe.

---

### Step 7 – Deep Intuition (Very Important)

Think like this:

Array indices are repeating pattern:

0 1 2 3 4 0 1 2 3 4 0 1 ...

Modulo exactly ye repeating cycle generate karta hai.

Mathematically:

Numbers in modulo space are cyclic.

Isliye circular queue possible hai.

---

### Step 8 – Mental Model

Linear increment:

Straight line.

Modulo increment:

Clock.

Clock example:

If time = 11
Next hour = (11 + 1) % 12 = 0

Same logic.

Circular queue bhi clock jaisa hai.

---

### Step 9 – Interview-Level Insight

Why not use:

if (rear == size - 1)
rear = 0;
else
rear++;

Kyunki:

- Extra condition lagti hai
- Code messy hota hai
- Modulo clean and scalable solution hai
- Mathematical guarantee deta hai

Modulo = cleaner + safer + elegant

---

### Final Clear Intuition Summary

`rear = (rear + 1) % size` ka matlab:

- Ek step aage badho
- Agar boundary cross karo
- Toh automatically starting point pe aa jao

It converts linear array into circular structure using math.

Yahi circular queue ka foundation hai.

---

## 6. Mental Model Difference

### Linear Queue

Think straight road.

Start → → → → End

End par pahunch gaye
Game over.

---

### Circular Queue

Think circular track.

Start → → → → End
End ke baad again start.

System wrap karta hai.

---

## 7. Important Technical Insight

Linear queue overflow condition:

rear == size - 1

But yeh galat assumption hai, kyunki:

Queue full tab hoti hai jab
rear + 1 == front

Circular queue full condition:

(rear + 1) % size == front

Yeh real full condition hai.

---

## 8. Pattern Recognition Notes

Whenever you see:

- Fixed size array
- Continuous insert + delete
- Need to reuse freed space
- Artificial overflow

Immediately think:

Circular structure
Use modulo operation

---

## 9. Why This Concept Is Important in Interviews

Interviewers test:

- Pointer movement understanding
- Edge case handling
- Circular indexing logic
- Real overflow vs artificial overflow

Agar yeh samajh liya, toh:

- Circular queue
- Deque
- Sliding window buffer
- Ring buffer
- Producer-consumer problems

Sab easy ho jate hain.

---

## 10. Final Summary

Simple array queue fails because:

1. rear only moves forward
2. Deleted space is never reused
3. Artificial overflow occurs
4. Memory inefficient design

Solution:

Use Circular Queue with modular arithmetic.

rear = (rear + 1) % size
front = (front + 1) % size

---

# OPTIMAL APPROACH → CIRCULAR QUEUE

We maintain:

start → front index
end → rear index
currSize → current number of elements
maxSize → total capacity

---

# MENTAL MODEL

Think of array as circle.

Index after last goes back to 0.

Formula:

newIndex = (currentIndex + 1) % maxSize

That wraps around.

---

# INTERNAL WORKING

Initial state:

start = -1
end = -1
currSize = 0

---

## PUSH(x)

1. If currSize == maxSize → overflow
2. If first element:
   start = 0
   end = 0
3. Else:
   end = (end + 1) % maxSize
4. Insert arr[end] = x
5. currSize++

---

## POP()

1. If currSize == 0 → underflow
2. Store arr[start]
3. If currSize == 1:
   reset start = end = -1
4. Else:
   start = (start + 1) % maxSize
5. currSize--
6. Return stored value

---

# PSEUDOCODE

---

## push(x)

```
push(x):

    if size == capacity:
        print "Overflow"
        return

    if size == 0:
        start = 0
        end = 0
    else:
        end = (end + 1) % capacity

    arr[end] = x
    size = size + 1
```

---

## pop()

```
pop():

    if size == 0:
        print "Underflow"
        return

    value = arr[start]

    if size == 1:
        start = -1
        end = -1
    else:
        start = (start + 1) % capacity

    size = size - 1

    return value
```

---

## Clear Logical Flow

### Why we check `size == capacity`?

Because queue full hone ka real condition yahi hai.
Circular queue me overflow ka correct check size-based hota hai.

---

### Why handle `size == 0` separately in push?

Jab first element insert hota hai:

- start and end dono same index pe hone chahiye.
- Isliye manually set karte hain.

---

### Why handle `size == 1` separately in pop?

Agar sirf ek element tha:

- Remove karne ke baad queue empty ho jayegi.
- To maintain empty state, we reset:
  start = -1
  end = -1

Yeh important hai future operations ke liye.

---

## Mental Model Summary

We maintain:

- `start` → front index
- `end` → rear index
- `size` → current elements count
- `capacity` → max limit

Circular movement always:

index = (index + 1) % capacity

This ensures:

- No artificial overflow
- No wasted space
- Clean circular behaviour

---

# C++ IMPLEMENTATION

---

## V1 (Only Required Functions)

```cpp
class ArrayQueue {
    int* arr;
    int start, end;
    int currSize, maxSize;

public:
    ArrayQueue(int size) {
        maxSize = size;
        arr = new int[maxSize];
        start = -1;
        end = -1;
        currSize = 0;
    }

    void push(int x) {
        if (currSize == maxSize)
            return;

        if (currSize == 0) {
            start = 0;
            end = 0;
        } else {
            end = (end + 1) % maxSize;
        }

        arr[end] = x;
        currSize++;
    }

    int pop() {
        if (currSize == 0)
            return -1;

        int value = arr[start];

        if (currSize == 1) {
            start = -1;
            end = -1;
        } else {
            start = (start + 1) % maxSize;
        }

        currSize--;
        return value;
    }

    int peek() {
        if (currSize == 0)
            return -1;
        return arr[start];
    }

    bool isEmpty() {
        return currSize == 0;
    }
};
```

---

## V2 (Complete Program with Deep Comments)

```cpp
#include <iostream>
using namespace std;

class ArrayQueue {

private:
    int* arr;          // Dynamic array
    int start;         // Front index
    int end;           // Rear index
    int currSize;      // Current number of elements
    int maxSize;       // Maximum capacity

public:

    // Constructor
    ArrayQueue(int size = 5) {

        maxSize = size;
        arr = new int[maxSize];

        start = -1;     // Initially empty
        end = -1;
        currSize = 0;
    }

    // PUSH operation
    void push(int x) {

        if (currSize == maxSize) {
            cout << "Queue Overflow\n";
            return;
        }

        // If queue empty
        if (currSize == 0) {
            start = 0;
            end = 0;
        }
        else {
            // Circular increment
            end = (end + 1) % maxSize;
        }

        arr[end] = x;
        currSize++;
    }

    // POP operation
    int pop() {

        if (currSize == 0) {
            cout << "Queue Underflow\n";
            return -1;
        }

        int poppedValue = arr[start];

        if (currSize == 1) {
            // Reset queue
            start = -1;
            end = -1;
        }
        else {
            start = (start + 1) % maxSize;
        }

        currSize--;
        return poppedValue;
    }

    // PEEK operation
    int peek() {

        if (currSize == 0) {
            cout << "Queue Empty\n";
            return -1;
        }

        return arr[start];
    }

    bool isEmpty() {
        return currSize == 0;
    }
};

int main() {

    ArrayQueue q(5);

    q.push(10);
    q.push(20);
    q.push(30);

    cout << "Front: " << q.peek() << endl;

    cout << "Pop: " << q.pop() << endl;

    cout << "Front After Pop: " << q.peek() << endl;

    return 0;
}
```

---

# JavaScript Version

---

## V1

```javascript
class ArrayQueue {
  constructor(size) {
    this.maxSize = size;
    this.arr = new Array(size);
    this.start = -1;
    this.end = -1;
    this.currSize = 0;
  }

  push(x) {
    if (this.currSize === this.maxSize) return;

    if (this.currSize === 0) {
      this.start = 0;
      this.end = 0;
    } else {
      this.end = (this.end + 1) % this.maxSize;
    }

    this.arr[this.end] = x;
    this.currSize++;
  }

  pop() {
    if (this.currSize === 0) return -1;

    const value = this.arr[this.start];

    if (this.currSize === 1) {
      this.start = -1;
      this.end = -1;
    } else {
      this.start = (this.start + 1) % this.maxSize;
    }

    this.currSize--;
    return value;
  }

  peek() {
    if (this.currSize === 0) return -1;
    return this.arr[this.start];
  }

  isEmpty() {
    return this.currSize === 0;
  }
}
```

---

# Time Complexity

push → O(1)
pop → O(1)
peek → O(1)
isEmpty → O(1)

Because:
Only index movement.

No shifting.

---

# Space Complexity

O(N)

We use fixed array of size N.

---

# Dry Run

Queue size = 5

push 10 → start=0 end=0
push 20 → end=1
push 30 → end=2

pop → removes 10
start=1

push 40
push 50
push 60

end wraps using modulo.

Works circularly.

---

# Edge Cases

1. Pop on empty queue
2. Push when full
3. Only one element
4. Wrap-around condition
5. Multiple full-empty cycles

---

# Why This Is Optimal

Without circular logic:
We waste space.

With circular logic:
We reuse memory.

All operations O(1).

No better complexity possible.

---

# Pattern Recognition Notes

Think Queue when:

- BFS
- Level order traversal
- Sliding window
- CPU scheduling
- First-come-first-serve

Think Circular Queue when:

- Fixed size buffer
- Streaming systems
- Network buffers
- Real-time systems
