# STACK AND QUEUE – FOUNDATION (Deep Theory Before Implementation)

This is NOT a problem.
This is pure **core data structure understanding**.

We will go:

1. Mental Model
2. Why needed
3. Internal working
4. Implementation types
5. Time complexity reasoning
6. Common mistakes
7. Pattern recognition
8. Interview mindset

No skipping. Deep clarity.

---

# PART 1 — STACK (LIFO Structure)

---

# 1. What is Stack?

Stack is a **Linear Data Structure** that follows:

LIFO → Last In First Out

Meaning:

The element inserted last will be removed first.

Think of:

- Stack of plates
- Undo feature
- Call stack

You can only access the TOP element.

---

# 2. Stack Operations

Basic Operations:

push(x) → insert element at top
pop() → remove top element
top() / peek() → see top element
isEmpty() → check empty
size() → count elements

Important rule:

You cannot remove from middle.
You cannot access bottom directly.

Only TOP matters.

---

# 3. Mental Model (Very Important)

Imagine:

Stack: [ 10, 20, 30 ]

Top → 30

If push(40)

Stack: [10, 20, 30, 40]
Top → 40

If pop()

Removed → 40
Stack becomes: [10, 20, 30]

Always top changes.

---

# 4. How Stack is Implemented?

Two ways:

1. Using Array
2. Using Linked List

---

## A) Stack Using Array

We maintain:

array[]
top = -1 initially

Push:

top++
arr[top] = value

Pop:

value = arr[top]
top--

Time Complexity:

push → O(1)
pop → O(1)

But limitation:

Fixed size (overflow possible)

---

## B) Stack Using Linked List

We maintain:

head pointer (top)

Push:

newNode->next = head
head = newNode

Pop:

temp = head
head = head->next
delete temp

Time Complexity:

push → O(1)
pop → O(1)

Advantage:

No fixed size
Dynamic memory

---

# 5. Why Stack is Powerful?

Stack is used when:

1. We need to reverse order
2. We need backtracking
3. We need previous state tracking

Examples:

- Balanced parentheses
- Next Greater Element
- Undo/Redo
- DFS
- Expression evaluation
- Recursion (call stack)

Stack is deeply connected to:

RECURSION

Every recursion uses stack internally.

---

# 6. Common Stack Patterns

Pattern 1 → Matching brackets
Pattern 2 → Monotonic Stack
Pattern 3 → Expression evaluation
Pattern 4 → Previous/Next greater/smaller
Pattern 5 → DFS

Whenever question says:

- Nearest left/right
- Previous greater
- Reverse
- Valid parentheses

Think → STACK

---

---

# PART 2 — QUEUE (FIFO Structure)

---

# 1. What is Queue?

Queue follows:

FIFO → First In First Out

Think:

- Line at ticket counter
- Printer queue
- CPU scheduling

First inserted element leaves first.

---

# 2. Queue Operations

enqueue(x) → insert at rear
dequeue() → remove from front
front() → see first element
isEmpty()
size()

---

# 3. Mental Model

Queue: [10, 20, 30]

Front → 10
Rear → 30

enqueue(40)

Queue: [10, 20, 30, 40]

dequeue()

Removed → 10

Queue: [20, 30, 40]

---

# 4. Queue Implementation

Two ways:

1. Using Array
2. Using Linked List

---

## A) Queue Using Array

We maintain:

front = 0
rear = -1

enqueue:

rear++
arr[rear] = value

dequeue:

value = arr[front]
front++

Problem:

After many operations, unused space at beginning wasted.

Solution:

Circular Queue

---

## B) Queue Using Linked List

Maintain:

front pointer
rear pointer

enqueue:

rear->next = newNode
rear = newNode

dequeue:

temp = front
front = front->next
delete temp

Time Complexity:

enqueue → O(1)
dequeue → O(1)

---

# 5. Circular Queue (Important)

In array queue:

If rear reaches end but front has space, we cannot reuse it.

Circular Queue solves this using:

rear = (rear + 1) % size
front = (front + 1) % size

This makes queue circular.

Very important for interviews.

---

# 6. Why Queue is Powerful?

Queue is used when:

1. Level order traversal (BFS)
2. Scheduling
3. Sliding window
4. Multi-source BFS
5. Graph traversal

Whenever question says:

- Minimum steps
- Shortest path in unweighted graph
- Level by level

Think → QUEUE

---

---

# STACK vs QUEUE Comparison

---

Stack:

Access → Top only
Order → LIFO
Used in → Backtracking, DFS, undo

Queue:

Access → Front & Rear
Order → FIFO
Used in → BFS, scheduling

---

---

# TIME COMPLEXITY SUMMARY

---

Stack:

push → O(1)
pop → O(1)
top → O(1)

Queue:

enqueue → O(1)
dequeue → O(1)
front → O(1)

If implemented correctly.

---

---

# COMMON MISTAKES STUDENTS MAKE

---

1. Forget overflow/underflow check
2. Mixing stack and queue patterns
3. Using queue instead of stack in DFS
4. Not understanding circular queue
5. Not knowing when to use monotonic stack

---

---

# DEEP MINDSET (Very Important)

---

Ask yourself:

Is this problem about order control?

If reversing or previous tracking → STACK

If level order or first-come-first-serve → QUEUE

---

---

# PATTERN RECOGNITION NOTES (Write this in notebook)

---

STACK triggers:

- Valid parentheses
- Next greater element
- Stock span
- Largest rectangle in histogram
- Reverse data
- Undo/Redo
- DFS
- Recursion simulation

QUEUE triggers:

- BFS
- Level order traversal
- Shortest path (unweighted)
- Sliding window
- Rotten oranges type problems
- Multi-source expansion

---

---

# FINAL FOUNDATION SUMMARY

---

Stack = Control past
Queue = Control order

Stack = Depth
Queue = Breadth

Stack = Backtracking
Queue = Expansion

If you deeply understand this,
90% of stack/queue questions become pattern recognition.
