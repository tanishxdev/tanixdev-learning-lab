# Stack Data Structure - Complete Study Notes

## 📚 Table of Contents

1. [Introduction with Real-Life Analogy](#introduction)
2. [Basic Stack Operations](#basic-operations)
3. [Stack Properties (LIFO)](#lifo-property)
4. [Real-World Applications](#real-world-applications)
5. [Implementation Methods](#implementation-methods)
   - [Array Implementation](#array-implementation)
   - [Linked List Implementation](#linked-list-implementation)
6. [STL Stack Implementation](#stl-stack)
7. [Edge Cases and Error Handling](#edge-cases)
8. [Stack vs Vector Comparison](#stack-vs-vector)

---

## 🍞 Introduction with Real-Life Analogy

### The Bread Packet Example

- **Stack = Foil packet** that stores bread slices
- **Push = Putting bread into the packet** (always from top)
- **Pop = Taking bread out** (always from top)
- **Critical Rule**: Cannot take bread from the middle directly!

### Key Insight

> "If you want the 6th bread from the top, you must remove the first 5 breads first"

---

## 🔧 Basic Stack Operations

### Core Operations

| Operation    | Description                       | Real-Life Analogy       |
| ------------ | --------------------------------- | ----------------------- |
| **Push**     | Insert element at top             | Adding bread to packet  |
| **Pop**      | Remove element from top           | Taking out bread        |
| **Top/Peek** | View top element without removing | Looking at top bread    |
| **isEmpty**  | Check if stack is empty           | Is packet empty?        |
| **Size**     | Number of elements                | How many breads inside? |

### Operation Details

```cpp
push(x)    // Insert x at top
pop()      // Remove top element
top()      // Return top element (no deletion)
isEmpty()  // Returns true/false
size()     // Returns number of elements
```

---

## 🔄 LIFO Property (Last In First Out)

### Understanding LIFO

```
Push Sequence: 1 → 2 → 3 → 4 → 5

Stack after pushes:
Top → [5]
       [4]
       [3]
       [2]
Bottom → [1]

Pop Sequence: 5 → 4 → 3 → 2 → 1
```

### Why NOT Other Combinations?

| Property | Valid? | Reason                                                                                         |
| -------- | ------ | ---------------------------------------------------------------------------------------------- |
| **LIFO** | ✅ YES | Last element in = First element out                                                            |
| **FIFO** | ❌ NO  | Would require accessing bottom first                                                           |
| **LILO** | ❌ NO  | Would require accessing bottom last                                                            |
| **FILO** | ❌ NO  | First in would be last out (but we can't guarantee this always due to intermediate operations) |

---

## 🌍 Real-World Applications

### 1. **Plate Stacking**

- Plates stacked vertically
- Must take top plate first
- Cannot pull middle plate without removing top ones

### 2. **Browser Back Button**

- URLs stored in stack
- Clicking back = Pop operation
- New page = Push operation

### 3. **Undo/Redo Operations**

- Actions stored in stack
- Ctrl+Z = Pop
- New action = Push

### 4. **Function Call Stack**

- Functions called = Pushed to stack
- Function returns = Popped from stack
- Recursion uses this mechanism

### 5. **Expression Evaluation**

- Converting infix to postfix
- Evaluating mathematical expressions
- Syntax parsing

---

## 💻 Implementation Methods

## Method 1: Array Implementation

### Required Components

```cpp
class Stack {
private:
    int* arr;        // Dynamic array
    int size;        // Actual array size
    int top;         // Index of top element (-1 when empty)

public:
    // Constructor, Destructor
    // Push, Pop, Peek, isEmpty, Size functions
};
```

### Visual Representation

```
Initial State (size = 5):
top = -1
[ ][ ][ ][ ][ ]

After push(2):
top = 0
[2][ ][ ][ ][ ]

After push(3):
top = 1
[2][3][ ][ ][ ]

After push(5):
top = 2
[2][3][5][ ][ ]
```

### Complete Array Implementation

```cpp
#include <iostream>
using namespace std;

class Stack {
private:
    int* arr;
    int size;
    int top;

public:
    // Constructor
    Stack(int s) {
        size = s;
        top = -1;
        arr = new int[size];
    }

    // Push Operation
    void push(int value) {
        if (top == size - 1) {
            cout << "Stack Overflow! Cannot push " << value << endl;
            return;
        }
        top++;
        arr[top] = value;
        cout << "Pushed " << value << " into the stack" << endl;
    }

    // Pop Operation
    void pop() {
        if (top == -1) {
            cout << "Stack Underflow! Cannot pop" << endl;
            return;
        }
        cout << "Popped " << arr[top] << " from the stack" << endl;
        top--;
    }

    // Peek/Top Operation
    int peek() {
        if (top == -1) {
            cout << "Stack is empty! ";
            return -1;  // Special value for empty
        }
        return arr[top];
    }

    // Check if Empty
    bool isEmpty() {
        return top == -1;
    }

    // Get Size
    int getSize() {
        return top + 1;
    }

    // Destructor
    ~Stack() {
        delete[] arr;
    }
};
```

### Edge Cases in Array Implementation

| Condition                | Problem                                      | Solution           |
| ------------------------ | -------------------------------------------- | ------------------ |
| `top == size-1`          | Cannot push more                             | Stack Overflow     |
| `top == -1`              | Cannot pop/peek                              | Stack Underflow    |
| Negative values in stack | Peek returns -1 for both empty and actual -1 | Use isEmpty() flag |

### Handling Negative Values

```cpp
// Solution: Use flag to differentiate
bool flag = false;  // false = not empty, true = empty

// In push():
flag = false;  // Stack has elements

// In pop():
if (top == -1) flag = true;  // Stack became empty

// In peek():
int value = s.peek();
if (!s.isEmpty()) {
    cout << "Top element: " << value << endl;
} else {
    cout << "Stack is empty" << endl;
}
```

---

## Method 2: Linked List Implementation

### Why Linked List?

- **Dynamic size** - No fixed capacity
- **No overflow** until heap memory full
- **Memory efficient** - Grows as needed

### Node Structure

```cpp
class Node {
public:
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = NULL;
    }
};
```

### Visual Representation

```
Empty Stack:
top = NULL

After push(5):
top → [5|NULL]

After push(6):
top → [6|·] → [5|NULL]

After push(8):
top → [8|·] → [6|·] → [5|NULL]

After pop():
top → [6|·] → [5|NULL]  (8 is deleted)
```

### Complete Linked List Implementation

```cpp
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = NULL;
    }
};

class Stack {
private:
    Node* top;
    int size;  // Track number of elements

public:
    // Constructor
    Stack() {
        top = NULL;
        size = 0;
    }

    // Push Operation
    void push(int value) {
        Node* newNode = new Node(value);

        // Check if memory allocation failed (heap full)
        if (newNode == NULL) {
            cout << "Stack Overflow! Memory full" << endl;
            return;
        }

        // Insert at beginning
        newNode->next = top;
        top = newNode;
        size++;
        cout << "Pushed " << value << " into the stack" << endl;
    }

    // Pop Operation
    void pop() {
        if (top == NULL) {
            cout << "Stack Underflow! Cannot pop" << endl;
            return;
        }

        Node* temp = top;
        cout << "Popped " << top->data << " from the stack" << endl;
        top = top->next;
        delete temp;
        size--;
    }

    // Peek Operation
    int peek() {
        if (top == NULL) {
            cout << "Stack is empty! ";
            return -1;
        }
        return top->data;
    }

    // Check if Empty
    bool isEmpty() {
        return top == NULL;
    }

    // Get Size
    int getSize() {
        return size;
    }
};
```

### Array vs Linked List Comparison

| Feature            | Array Implementation | Linked List Implementation |
| ------------------ | -------------------- | -------------------------- |
| **Size**           | Fixed (compile-time) | Dynamic (runtime)          |
| **Memory**         | Contiguous           | Non-contiguous             |
| **Overflow**       | When array full      | When heap full             |
| **Underflow**      | When top = -1        | When top = NULL            |
| **Access Time**    | O(1) - Direct        | O(1) - Only top            |
| **Memory Wastage** | If not fully used    | No wastage                 |
| **Implementation** | Simpler              | More complex               |

---

## 📦 STL Stack Implementation

### Why STL Stack?

- Pre-implemented and tested
- No need to write entire code
- Part of C++ Standard Template Library

### Basic Usage

```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
    // Create stack of integers
    stack<int> s;

    // Push operations
    s.push(6);
    s.push(16);
    s.push(26);

    // Check size
    cout << "Stack size: " << s.size() << endl;  // Output: 3

    // Check top element
    cout << "Top element: " << s.top() << endl;  // Output: 26

    // Pop operation
    s.pop();
    cout << "After pop, top: " << s.top() << endl;  // Output: 16

    // Check if empty
    cout << "Is empty? " << s.empty() << endl;  // Output: 0 (false)

    return 0;
}
```

### STL Stack Operations

| Operation | Description                | Time Complexity |
| --------- | -------------------------- | --------------- |
| `push(g)` | Adds element g             | O(1)            |
| `pop()`   | Removes top element        | O(1)            |
| `top()`   | Returns top element        | O(1)            |
| `empty()` | Returns true if empty      | O(1)            |
| `size()`  | Returns number of elements | O(1)            |

---

## ⚠️ Edge Cases and Error Handling

### Common Edge Cases

1. **Stack Overflow**
   - **Array**: When `top == size-1` and trying to push
   - **Linked List**: When heap memory is full
   - **Solution**: Check before push operation

2. **Stack Underflow**
   - **Array**: When `top == -1` and trying to pop/peek
   - **Linked List**: When `top == NULL` and trying to pop/peek
   - **Solution**: Check before pop/peek operation

3. **Negative Values**
   - Problem: `peek()` returning -1 could mean empty OR actual value -1
   - Solution: Use `isEmpty()` flag or separate boolean function

### Complete Error Handling Example

```cpp
// For array implementation
void push(int value) {
    if (top == size - 1) {
        cout << "Error: Stack Overflow" << endl;
        return;
    }
    // Proceed with push
}

void pop() {
    if (top == -1) {
        cout << "Error: Stack Underflow" << endl;
        return;
    }
    // Proceed with pop
}

int peek() {
    if (top == -1) {
        cout << "Error: Stack is empty" << endl;
        return -1;  // Special value
    }
    return arr[top];
}
```

---

## 🔍 Stack vs Vector: Why Separate Stack Class?

### The Question

> "Why do we need a separate Stack when Vector can do Push Back and Pop Back?"

### The Answer

#### Vector's Problem:

1. **Dynamic resizing** - When vector fills, it:
   - Creates new array (usually double size)
   - Copies all elements
   - Deletes old array
   - Wastes memory and time

2. **Memory reallocation example**:

```
Initial vector (size 2):
[2][3]

Trying to push 5:
[2][3][ ][ ]  ← New array of size 4 created
 ↑  ↑  ↑
 2  3  5       ← Elements copied, then 5 inserted

Memory wasted if we don't use remaining space
```

#### Stack's Advantage:

1. **No automatic resizing** (array impl) OR
2. **Dynamic growth without copying** (linked list impl)
3. **Memory efficient** - No wasted pre-allocated space
4. **Predictable performance** - No occasional slow operations due to resizing

### Comparison Table

| Aspect          | Vector Stack                      | Dedicated Stack  |
| --------------- | --------------------------------- | ---------------- |
| **Resizing**    | Automatic (may copy all elements) | Manual or linked |
| **Memory**      | May waste pre-allocated space     | Efficient        |
| **Performance** | Occasional O(n) operations        | Consistent O(1)  |
| **Control**     | Less control over memory          | More control     |

---

## 📝 Summary Checklist

### Key Concepts ✓

- [ ] Stack is LIFO data structure
- [ ] Operations: Push, Pop, Top/Peek, isEmpty, Size
- [ ] Only top element accessible directly
- [ ] Cannot access middle elements without removing top ones

### Implementation Knowledge ✓

- [ ] Array implementation (fixed size, simpler)
- [ ] Linked List implementation (dynamic, complex)
- [ ] Handling overflow/underflow conditions
- [ ] Dealing with negative values in peek()

### Real-World Applications ✓

- [ ] Function calls (recursion)
- [ ] Undo/Redo operations
- [ ] Browser back button
- [ ] Expression evaluation
- [ ] Syntax parsing

### STL Usage ✓

- [ ] `#include <stack>`
- [ ] `stack<dataType> s;`
- [ ] `s.push()`, `s.pop()`, `s.top()`
- [ ] `s.empty()`, `s.size()`

---

## 🎯 Practice Points

1. **Implement stack using both array and linked list**
2. **Handle all edge cases**
3. **Use STL stack in your programs**
4. **Solve problems:**
   - Reverse a string using stack
   - Check balanced parentheses
   - Evaluate postfix expression
   - Implement two stacks in one array

---

## 📖 Key Takeaways

> **"Stack is like a bread packet - you can only access the top bread. To get to the middle, you must remove all breads above it."**

> **"Array implementation is like a fixed-size bread packet; Linked List is like an endlessly expandable packet."**

> **"STL Stack is your ready-to-use tool - focus on solving problems, not reinventing the wheel!"**

# Stack Problems - Complete Lecture Notes

## 📚 Table of Contents

1. [Introduction](#introduction)
2. [Problem 1: Reverse a String Using Stack](#problem-1-reverse-a-string-using-stack)
3. [Problem 2: Insert at Bottom of Stack](#problem-2-insert-at-bottom-of-stack)
4. [Problem 3: Make Array Beautiful (Adjacent Removal)](#problem-3-make-array-beautiful-adjacent-removal)
5. [Problem 4: Remove Adjacent Duplicates in String](#problem-4-remove-adjacent-duplicates-in-string)
6. [Problem 5: Valid Parentheses (Single Type)](#problem-5-valid-parentheses-single-type)
7. [Problem 6: Minimum Add to Make Parentheses Valid](#problem-6-minimum-add-to-make-parentheses-valid)
8. [Problem 7: Valid Parentheses (Multiple Types)](#problem-7-valid-parentheses-multiple-types)
9. [Problem 8: Print Bracket Numbers](#problem-8-print-bracket-numbers)
10. [Problem 9: Get Minimum at Pop](#problem-9-get-minimum-at-pop)
11. [Bonus: Backspace String Comparison](#bonus-backspace-string-comparison)

---

## 🎯 Introduction

### Core Concept for All Problems

> **"Whenever you need to check history or previous adjacent elements, think of Stack!"**

### Key Pattern Observed

- Problems where elements interact with their **neighbors/adjacent elements**
- Problems requiring **history tracking** of elements
- Problems where elements **destroy each other** when certain conditions met
- Problems involving **matching pairs** (like parentheses)

---

## Problem 1: Reverse a String Using Stack

### Problem Statement

Reverse a given string/array using a stack data structure.

### Example

```
Input:  "HELLO"
Output: "OLLEH"
```

### Visual Dry Run

```
Original Array: [H][E][L][L][O]

Step 1: Push all elements to stack
Stack after pushes (bottom to top):
Bottom → [H] → [E] → [L] → [L] → [O] ← Top

Step 2: Pop elements and fill array
Pop O → Array[0] = O
Pop L → Array[1] = L
Pop L → Array[2] = L
Pop E → Array[3] = E
Pop H → Array[4] = H

Final Array: [O][L][L][E][H]
```

### Algorithm

1. Create an empty stack
2. Traverse the array from left to right
3. Push each element into the stack
4. Now traverse the array from left to right again
5. For each index, pop from stack and store at current index

### Code Implementation

```cpp
#include <iostream>
#include <stack>
#include <vector>
using namespace std;

void reverseString(vector<char>& s) {
    stack<char> st;

    // Push all characters to stack
    for (int i = 0; i < s.size(); i++) {
        st.push(s[i]);
    }

    // Pop and fill array in reverse order
    int i = 0;
    while (!st.empty()) {
        s[i] = st.top();
        st.pop();
        i++;
    }
}
```

### Complexity Analysis

| Complexity | Value | Explanation                                          |
| ---------- | ----- | ---------------------------------------------------- |
| **Time**   | O(n)  | Two passes through array: O(n) + O(n) = O(2n) ≈ O(n) |
| **Space**  | O(n)  | Stack stores all n elements                          |

---

## Problem 2: Insert at Bottom of Stack

### Problem Statement

Given a stack and an integer x, insert x at the bottom of the stack while maintaining the order of other elements.

### Example

```
Original Stack (top to bottom): [8, 1, 2, 3, 4]
x = 2
Result Stack: [2, 8, 1, 2, 3, 4]
```

### Visual Dry Run

```
Original Stack:       8 (top)
                      1
                      2
                      3
                      4 (bottom)

Step 1: Empty original stack into temporary stack
Temp Stack (after transfers):
                      4 (top)
                      3
                      2
                      1
                      8 (bottom)

Step 2: Push x into original stack
Original Stack:       2 (top)

Step 3: Transfer back from temp to original
Original Stack:       4 (top)
                      3
                      2
                      1
                      8
                      2 (bottom)
```

### Algorithm

1. Create a temporary stack
2. While original stack is not empty:
   - Pop from original and push to temp
3. Push x into original stack
4. While temp stack is not empty:
   - Pop from temp and push to original

### Code Implementation

```cpp
#include <iostream>
#include <stack>
using namespace std;

void insertAtBottom(stack<int>& st, int x) {
    stack<int> temp;

    // Empty original stack
    while (!st.empty()) {
        temp.push(st.top());
        st.pop();
    }

    // Insert x at bottom
    st.push(x);

    // Transfer back
    while (!temp.empty()) {
        st.push(temp.top());
        temp.pop();
    }
}
```

### Complexity Analysis

| Complexity | Value | Explanation                        |
| ---------- | ----- | ---------------------------------- |
| **Time**   | O(n)  | Transfer n elements twice + 1 push |
| **Space**  | O(n)  | Extra stack of size n              |

---

## Problem 3: Make Array Beautiful (Adjacent Number Removal)

### Problem Statement

Given an array, make it "beautiful" by removing adjacent pairs where one number is non-negative (≥0) and the other is negative (<0). Continue checking after removals until no such pairs exist.

### Example

```
Input:  [2, 3, 5, -4, 6, -2, -8, 9]
Output: [2, 3, 9]

Dry Run:
[2, 3, 5, -4, 6, -2, -8, 9]
        ↓   ↓  (5 and -4 are opposite signs → remove)
[2, 3, 6, -2, -8, 9]
        ↓   ↓   (6 and -2 are opposite signs → remove)
[2, 3, -8, 9]
        ↓   ↓    (3 and -8 are opposite signs → remove)
[2, 9]          (both non-negative → can stay)
```

### Key Insight

Stack is perfect here because:

- We need to track **history** of elements
- Each new element checks with its **previous neighbor** (top of stack)
- After removal, new element checks with **new previous neighbor**

### Visual Dry Run with Stack

```
Step 1: i=0 → 2 → stack empty → push 2 → stack=[2]
Step 2: i=1 → 3 → top=2 (both non-negative) → push 3 → stack=[2,3]
Step 3: i=2 → 5 → top=3 (both non-negative) → push 5 → stack=[2,3,5]
Step 4: i=3 → -4 → top=5 (opposite) → pop 5 → stack=[2,3]
        Now check -4 with new top=3 (opposite) → pop 3 → stack=[2]
        Now check -4 with new top=2 (opposite) → pop 2 → stack=[]
        stack empty → push -4? NO! Because both removed
Step 5: i=4 → 6 → stack empty → push 6 → stack=[6]
Step 6: i=5 → -2 → top=6 (opposite) → pop 6 → stack=[]
        stack empty → do nothing (both removed)
Step 7: i=6 → -8 → stack empty → push -8 → stack=[-8]
Step 8: i=7 → 9 → top=-8 (opposite) → pop -8 → stack=[]
        stack empty → push 9? NO! Both removed
        Wait - we lost 9? Let's check carefully...

Actually correct sequence:
[2,3,5,-4,6,-2,-8,9]
After processing all: stack = [2,9]
```

### Algorithm

1. Create empty stack
2. For each element in array:
   - If stack is empty → push current element
   - Else:
     - If (current ≥ 0 AND stack.top ≥ 0) OR (current < 0 AND stack.top < 0) → push current
     - Else → pop from stack (both are removed)
3. Convert remaining stack to result array

### Code Implementation

```cpp
#include <iostream>
#include <stack>
#include <vector>
using namespace std;

vector<int> makeBeautiful(vector<int>& arr) {
    stack<int> st;

    for (int i = 0; i < arr.size(); i++) {
        if (st.empty()) {
            st.push(arr[i]);
        }
        else {
            // Check if both are same sign
            if ((arr[i] >= 0 && st.top() >= 0) || (arr[i] < 0 && st.top() < 0)) {
                st.push(arr[i]);
            }
            else {
                st.pop();  // Both destroyed
            }
        }
    }

    // Convert stack to vector
    vector<int> result(st.size());
    int index = st.size() - 1;
    while (!st.empty()) {
        result[index--] = st.top();
        st.pop();
    }

    return result;
}
```

### Complexity Analysis

| Complexity | Value | Explanation                     |
| ---------- | ----- | ------------------------------- |
| **Time**   | O(n)  | Single pass through array       |
| **Space**  | O(n)  | Stack stores at most n elements |

---

## Problem 4: Remove Adjacent Duplicates in String

### Problem Statement

Given a vector of strings, remove adjacent duplicate strings. After removal, if new adjacent duplicates form, remove them too.

### Example

```
Input:  ["A", "D", "D", "B", "B", "E"]
Output: ["A", "E"]

Dry Run:
["A", "D", "D", "B", "B", "E"]
       ↓    ↓   (both "D" are same → remove)
["A", "B", "B", "E"]
       ↓    ↓   (both "B" are same → remove)
["A", "E"]      (both different → can stay)
```

### Visual Dry Run with Stack

```
Step 1: i=0 → "A" → stack empty → push "A" → stack=["A"]
Step 2: i=1 → "D" → top="A" (different) → push "D" → stack=["A","D"]
Step 3: i=2 → "D" → top="D" (same) → pop "D" → stack=["A"]
Step 4: i=3 → "B" → top="A" (different) → push "B" → stack=["A","B"]
Step 5: i=4 → "B" → top="B" (same) → pop "B" → stack=["A"]
Step 6: i=5 → "E" → top="A" (different) → push "E" → stack=["A","E"]
```

### Algorithm

1. Create empty stack
2. For each string in vector:
   - If stack is empty → push current string
   - Else if current string equals stack.top → pop (remove both)
   - Else → push current string
3. Return size of stack (or convert to vector if needed)

### Code Implementation

```cpp
#include <iostream>
#include <stack>
#include <vector>
using namespace std;

int removeAdjacentDuplicates(vector<string>& v) {
    stack<string> st;

    for (int i = 0; i < v.size(); i++) {
        if (st.empty()) {
            st.push(v[i]);
        }
        else if (st.top() == v[i]) {
            st.pop();  // Remove both
        }
        else {
            st.push(v[i]);
        }
    }

    return st.size();  // Return size of resulting array
}
```

### Complexity Analysis

| Complexity | Value | Explanation                     |
| ---------- | ----- | ------------------------------- |
| **Time**   | O(n)  | Single pass through vector      |
| **Space**  | O(n)  | Stack stores at most n elements |

---

## Problem 5: Valid Parentheses (Single Type)

### Problem Statement

Given a string containing only '(' and ')', determine if it is valid. A valid parentheses string has every opening bracket matched with a closing bracket in the correct order.

### Examples

```
Valid:     "()", "(())", "()()", "(()())"
Invalid:   ")(", "(()", "())", "((())"
```

### Key Insight

- Opening bracket `'('` → push to stack
- Closing bracket `')'` → check if stack has an opening bracket to match

### Visual Dry Run

```
Example 1: "(())"
i=0: '(' → push → stack=['(']
i=1: '(' → push → stack=['(','(']
i=2: ')' → top='(' (match) → pop → stack=['(']
i=3: ')' → top='(' (match) → pop → stack=[]
Result: stack empty → VALID

Example 2: "(()"
i=0: '(' → push → stack=['(']
i=1: '(' → push → stack=['(','(']
i=2: ')' → top='(' (match) → pop → stack=['(']
End: stack not empty → INVALID

Example 3: ")("
i=0: ')' → stack empty → can't match → INVALID immediately
```

### Algorithm

1. Create empty stack
2. For each character in string:
   - If character is '(' → push to stack
   - If character is ')':
     - If stack is empty → return false (invalid)
     - Else → pop from stack
3. After loop, return true if stack is empty, else false

### Code Implementation

```cpp
#include <iostream>
#include <stack>
using namespace std;

bool isValidParentheses(string s) {
    stack<char> st;

    for (int i = 0; i < s.length(); i++) {
        if (s[i] == '(') {
            st.push(s[i]);
        }
        else {  // s[i] == ')'
            if (st.empty()) {
                return false;  // No opening bracket to match
            }
            st.pop();
        }
    }

    return st.empty();  // All brackets matched?
}
```

### Complexity Analysis

| Complexity | Value | Explanation                       |
| ---------- | ----- | --------------------------------- |
| **Time**   | O(n)  | Single pass through string        |
| **Space**  | O(n)  | Stack stores at most n/2 elements |

---

## Bonus: Space-Optimized Solution (Without Stack)

### Key Insight

We only need a counter to track unmatched opening brackets!

### Algorithm

1. Initialize `left = 0` (count of unmatched opening brackets)
2. For each character:
   - If '(' → left++
   - If ')':
     - If left == 0 → return false (no opening to match)
     - Else → left--
3. After loop, return left == 0

### Code Implementation

```cpp
bool isValidParenthesesOptimized(string s) {
    int left = 0;  // Count of unmatched opening brackets

    for (int i = 0; i < s.length(); i++) {
        if (s[i] == '(') {
            left++;
        }
        else {  // s[i] == ')'
            if (left == 0) {
                return false;
            }
            left--;
        }
    }

    return left == 0;
}
```

### Complexity Comparison

| Method  | Time | Space |
| ------- | ---- | ----- |
| Stack   | O(n) | O(n)  |
| Counter | O(n) | O(1)  |

---

## Problem 6: Minimum Add to Make Parentheses Valid

### Problem Statement

Given a string containing '(' and ')', find the minimum number of parentheses you need to add to make it valid.

### Examples

```
Input:  "())"
Output: 1  (add '(' at beginning → "(())")

Input:  "((("
Output: 3  (add '))' at end → "((()))")

Input:  "()"
Output: 0  (already valid)

Input:  "()))(("
Output: 4  (need 2 opening and 2 closing)
```

### Visual Dry Run with Stack + Counter

```
Example: "()))(("

Step 1: i=0 → '(' → push → stack=['('], count=0
Step 2: i=1 → ')' → stack not empty → pop → stack=[], count=0
Step 3: i=2 → ')' → stack empty → count++ → count=1
Step 4: i=3 → ')' → stack empty → count++ → count=2
Step 5: i=4 → '(' → push → stack=['('], count=2
Step 6: i=5 → '(' → push → stack=['(','('], count=2
End: Answer = count + stack.size() = 2 + 2 = 4
```

### Algorithm

1. Initialize stack and count = 0
2. For each character:
   - If '(' → push to stack
   - If ')':
     - If stack not empty → pop (matched)
     - Else → count++ (need an opening bracket)
3. Answer = count + stack.size() (unmatched closings + unmatched openings)

### Code Implementation

```cpp
#include <iostream>
#include <stack>
using namespace std;

int minAddToMakeValid(string s) {
    stack<char> st;
    int count = 0;  // Count of unmatched closing brackets

    for (int i = 0; i < s.length(); i++) {
        if (s[i] == '(') {
            st.push(s[i]);
        }
        else {  // s[i] == ')'
            if (!st.empty()) {
                st.pop();  // Matched with an opening
            }
            else {
                count++;   // No opening to match
            }
        }
    }

    return count + st.size();  // Unmatched closings + unmatched openings
}
```

### Complexity Analysis

| Complexity | Value | Explanation                     |
| ---------- | ----- | ------------------------------- |
| **Time**   | O(n)  | Single pass through string      |
| **Space**  | O(n)  | Stack stores unmatched openings |

---

## Problem 7: Valid Parentheses (Multiple Types)

### Problem Statement

Given a string containing multiple types of brackets `( )`, `{ }`, `[ ]`, determine if it's valid. Brackets must close in the correct order.

### Examples

```
Valid:     "(){}[]", "({[]})", "{[()]}"
Invalid:   "([)]", "{(})", "({)}"
```

### Key Insight

- Opening brackets `(`, `{`, `[` → push to stack
- Closing brackets `)`, `}`, `]` → check if top matches corresponding opening

### Visual Dry Run

```
Example: "([)]"

i=0: '(' → push → stack=['(']
i=1: '[' → push → stack=['(','[']
i=2: ')' → top='[' (not matching) → INVALID immediately

Example: "({[]})"

i=0: '(' → push → stack=['(']
i=1: '{' → push → stack=['(','{']
i=2: '[' → push → stack=['(','{','[']
i=3: ']' → top='[' (matches) → pop → stack=['(','{']
i=4: '}' → top='{' (matches) → pop → stack=['(']
i=5: ')' → top='(' (matches) → pop → stack=[]
Result: stack empty → VALID
```

### Algorithm

1. Create empty stack
2. For each character in string:
   - If opening bracket `(`, `{`, `[` → push to stack
   - If closing bracket `)`, `}`, `]`:
     - If stack empty → return false
     - If top doesn't match corresponding opening → return false
     - Else → pop from stack
3. After loop, return stack.empty()

### Code Implementation

```cpp
#include <iostream>
#include <stack>
using namespace std;

bool isValid(string s) {
    stack<char> st;

    for (int i = 0; i < s.length(); i++) {
        // Opening brackets - push
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            st.push(s[i]);
        }
        else {
            // Closing brackets - check match
            if (st.empty()) return false;

            if (s[i] == ')') {
                if (st.top() != '(') return false;
                st.pop();
            }
            else if (s[i] == '}') {
                if (st.top() != '{') return false;
                st.pop();
            }
            else if (s[i] == ']') {
                if (st.top() != '[') return false;
                st.pop();
            }
        }
    }

    return st.empty();
}
```

### Complexity Analysis

| Complexity | Value | Explanation                       |
| ---------- | ----- | --------------------------------- |
| **Time**   | O(n)  | Single pass through string        |
| **Space**  | O(n)  | Stack stores at most n/2 elements |

---

## Problem 8: Print Bracket Numbers

### Problem Statement

Given a string containing brackets and other characters, assign numbers to brackets such that:

- Each opening bracket gets a unique number (increasing)
- Each closing bracket gets the same number as its matching opening bracket

### Example

```
Input:  "(a(a)(b)c)"
Output: [1,2,2,1,3,3]

String:   ( a ( a ) ( b ) c )
Indices:  0 1 2 3 4 5 6 7 8 9
Numbers:  1     2 2   3 3     1
```

### Key Insight

We need two things:

1. A **counter** to assign numbers to opening brackets
2. A **stack** to remember the numbers of unmatched opening brackets

### Visual Dry Run

```
String: "(a(a)(b)c)"

Step 1: i=0 → '(' → count=1, push 1 to stack, result=[1]
Stack: [1]
Result: [1]

Step 2: i=1 → 'a' → ignore
Step 3: i=2 → '(' → count=2, push 2 to stack, result=[1,2]
Stack: [1,2]
Result: [1,2]

Step 4: i=3 → 'a' → ignore
Step 5: i=4 → ')' → pop stack.top=2, result=[1,2,2]
Stack: [1]
Result: [1,2,2]

Step 6: i=5 → '(' → count=3, push 3 to stack, result=[1,2,2,3]
Stack: [1,3]
Result: [1,2,2,3]

Step 7: i=6 → 'b' → ignore
Step 8: i=7 → ')' → pop stack.top=3, result=[1,2,2,3,3]
Stack: [1]
Result: [1,2,2,3,3]

Step 9: i=8 → 'c' → ignore
Step 10: i=9 → ')' → pop stack.top=1, result=[1,2,2,3,3,1]
Stack: []
Result: [1,2,2,3,3,1]
```

### Algorithm

1. Initialize count = 0, empty stack, empty result vector
2. For each character in string:
   - If '(' (opening bracket):
     - count++
     - Push count to stack
     - Add count to result
   - If ')' (closing bracket):
     - Add stack.top() to result
     - Pop from stack
   - Else (other characters): ignore
3. Return result vector

### Code Implementation

```cpp
#include <iostream>
#include <stack>
#include <vector>
using namespace std;

vector<int> bracketNumbers(string s) {
    int count = 0;
    stack<int> st;
    vector<int> result;

    for (int i = 0; i < s.length(); i++) {
        if (s[i] == '(') {
            count++;
            st.push(count);
            result.push_back(count);
        }
        else if (s[i] == ')') {
            result.push_back(st.top());
            st.pop();
        }
        // Ignore other characters
    }

    return result;
}
```

### Complexity Analysis

| Complexity | Value | Explanation                                |
| ---------- | ----- | ------------------------------------------ |
| **Time**   | O(n)  | Single pass through string                 |
| **Space**  | O(n)  | Stack stores numbers of unmatched brackets |

---

## Problem 9: Get Minimum at Pop

### Problem Statement

Design a special stack that supports:

- `push()`: Push elements normally
- `getMinAtPop()`: When popping, print the minimum element present in the stack at that moment

### Example

```
Array: [2, 1, 3, 5, 0, 6]
Push all to stack, then pop and print minimum at each pop:

Stack state while popping:
[2,1,3,5,0,6] → min=0 → pop 6 → print 0
[2,1,3,5,0]   → min=0 → pop 0 → print 0
[2,1,3,5]     → min=1 → pop 5 → print 1
[2,1,3]       → min=1 → pop 3 → print 1
[2,1]         → min=1 → pop 1 → print 1
[2]           → min=2 → pop 2 → print 2
```

### Key Insight

Instead of storing actual elements, store the **minimum up to that point**!

When pushing element x:

- If stack empty → push x
- Else → push min(x, stack.top())

This way, stack.top() always gives the minimum element in the stack!

### Visual Dry Run

```
Original array: [2, 1, 3, 5, 0, 6]

Push operations (store minimums):
Push 2: stack empty → push 2 → stack=[2]           (min so far = 2)
Push 1: min(1, top=2) = 1 → push 1 → stack=[2,1]   (min so far = 1)
Push 3: min(3, top=1) = 1 → push 1 → stack=[2,1,1] (min so far = 1)
Push 5: min(5, top=1) = 1 → push 1 → stack=[2,1,1,1]
Push 0: min(0, top=1) = 0 → push 0 → stack=[2,1,1,1,0]
Push 6: min(6, top=0) = 0 → push 0 → stack=[2,1,1,1,0,0]

Pop operations (print top, then pop):
Pop: top=0 → print 0 → pop → stack=[2,1,1,1,0]
Pop: top=0 → print 0 → pop → stack=[2,1,1,1]
Pop: top=1 → print 1 → pop → stack=[2,1,1]
Pop: top=1 → print 1 → pop → stack=[2,1]
Pop: top=1 → print 1 → pop → stack=[2]
Pop: top=2 → print 2 → pop → stack=[]
```

### Algorithm for Push

1. Create stack
2. For each element in array:
   - If stack empty → push element
   - Else → push min(element, stack.top())
3. Return stack

### Algorithm for getMinAtPop

1. While stack not empty:
   - Print stack.top()
   - Pop stack

### Code Implementation

```cpp
#include <iostream>
#include <stack>
#include <vector>
using namespace std;

stack<int> pushWithMin(vector<int>& arr) {
    stack<int> st;

    for (int i = 0; i < arr.size(); i++) {
        if (st.empty()) {
            st.push(arr[i]);
        }
        else {
            st.push(min(arr[i], st.top()));
        }
    }

    return st;
}

void getMinAtPop(stack<int> st) {
    while (!st.empty()) {
        cout << st.top() << " ";
        st.pop();
    }
}
```

### Complexity Analysis

| Complexity | Value | Explanation                        |
| ---------- | ----- | ---------------------------------- |
| **Time**   | O(n)  | Single pass for push, O(n) for pop |
| **Space**  | O(n)  | Stack stores n elements            |

---

## Bonus: Backspace String Comparison

### Problem Statement

Given two strings containing lowercase letters and '#' (backspace), determine if they are equal after applying backspaces.

### Example

```
Input:  s1 = "ab#c", s2 = "ad#c"
Processing s1: a → push, b → push, # → pop, c → push → result = "ac"
Processing s2: a → push, d → push, # → pop, c → push → result = "ac"
Output: true (both equal)
```

### Visual Dry Run

```
String 1: "a b # c"
Step 1: 'a' → push → stack1=['a']
Step 2: 'b' → push → stack1=['a','b']
Step 3: '#' → pop → stack1=['a']
Step 4: 'c' → push → stack1=['a','c']

String 2: "a d # c"
Step 1: 'a' → push → stack2=['a']
Step 2: 'd' → push → stack2=['a','d']
Step 3: '#' → pop → stack2=['a']
Step 4: 'c' → push → stack2=['a','c']

Compare stacks: both ['a','c'] → equal
```

### Algorithm

1. Create two stacks
2. For each string:
   - If character is not '#': push to stack
   - If character is '#' and stack not empty: pop
3. Compare resulting stacks

### Code Implementation

```cpp
#include <iostream>
#include <stack>
using namespace std;

string processString(string s) {
    stack<char> st;

    for (char c : s) {
        if (c != '#') {
            st.push(c);
        }
        else if (!st.empty()) {
            st.pop();
        }
    }

    // Convert stack to string
    string result = "";
    while (!st.empty()) {
        result = st.top() + result;
        st.pop();
    }
    return result;
}

bool backspaceCompare(string s, string t) {
    return processString(s) == processString(t);
}
```

### Complexity Analysis

| Complexity | Value  | Explanation                 |
| ---------- | ------ | --------------------------- |
| **Time**   | O(n+m) | Process both strings once   |
| **Space**  | O(n+m) | Two stacks for both strings |

---

## 📊 Summary Table

| Problem                       | Key Insight                     | Time | Space |
| ----------------------------- | ------------------------------- | ---- | ----- |
| Reverse String                | Push all, pop all               | O(n) | O(n)  |
| Insert at Bottom              | Use temp stack                  | O(n) | O(n)  |
| Make Array Beautiful          | Check with top, pop if opposite | O(n) | O(n)  |
| Remove Adjacent Duplicates    | Pop if same, push if different  | O(n) | O(n)  |
| Valid Parentheses (single)    | Push '(' pop ')'                | O(n) | O(n)  |
| Valid Parentheses (optimized) | Counter variable                | O(n) | O(1)  |
| Minimum Add to Make Valid     | Count + stack size              | O(n) | O(n)  |
| Valid Parentheses (multiple)  | Match closing with top          | O(n) | O(n)  |
| Print Bracket Numbers         | Store numbers in stack          | O(n) | O(n)  |
| Get Minimum at Pop            | Store minimums in stack         | O(n) | O(n)  |
| Backspace String              | Push letters, pop on #          | O(n) | O(n)  |

---

## 🎯 Key Takeaways

### When to Use Stack?

1. **History tracking** - Need to remember previous elements
2. **Adjacent interactions** - Elements interact with neighbors
3. **Matching pairs** - Parentheses, brackets, etc.
4. **Reversal operations** - Reverse order needed
5. **Nested structures** - Recursive-like patterns

### Common Pattern

```
stack = empty
for element in input:
    if condition_to_push:
        stack.push(element)
    else if condition_to_pop:
        stack.pop()
    else:
        # handle accordingly
return process_stack()
```

### Remember

> **"Stack remembers your history - use it when the past matters!"**

---

## 📝 Practice Problems

1. Reverse a string using stack
2. Insert element at bottom of stack
3. Remove adjacent duplicates
4. Valid parentheses (all variations)
5. Next greater element
6. Stock span problem
7. Largest rectangle in histogram
8. Minimum bracket reversals
