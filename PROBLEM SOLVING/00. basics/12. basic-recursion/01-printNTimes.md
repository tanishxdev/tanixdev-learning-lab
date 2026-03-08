# PROBLEM (Original Statement)

**Print Name N Times**

Given a name and an integer `N`, print the name **N times using recursion**.

Example:

```
Input:
name = "Tanish"
N = 3
```

Output:

```
Tanish
Tanish
Tanish
```

---

# Topics / Patterns

### Topic

Recursion Fundamentals

### Patterns

**1️⃣ Recursion Pattern**

A function calling itself until a stopping condition is reached.

**2️⃣ Base Case + Recursive Case Pattern**

Every recursion problem has two parts:

```
Base Case → stop recursion
Recursive Case → call function again
```

---

# BREAKDOWN PROBLEM

### What is being asked?

Print a name **N times** using recursion.

### Input

```
name
N
```

### Output

```
name printed N times
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ N ≤ 1000
```

Important observations:

We must understand **how recursion repeats tasks**.

Recursion works like a stack of function calls.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Natural thought:

> If I want to print something multiple times, I usually use a loop.

Example:

```
for i = 1 → N
print name
```

---

## Thought Process

1. Start from `1`.
2. Print name.
3. Repeat until `N`.

---

## Pseudocode

```
for i from 1 to N
    print name
```

---

## Algorithm

Use a loop.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
void printName(string name, int n)
{
    for(int i = 0; i < n; i++)
    {
        cout << name << endl;
    }
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

void printName(string name, int n)
{
    for(int i = 0; i < n; i++)
    {
        cout << name << endl;
    }
}

int main()
{
    string name;
    int n;

    cout<<"Enter name: ";
    cin>>name;

    cout<<"Enter N: ";
    cin>>n;

    printName(name,n);

    return 0;
}
```

---

# Time and Space Complexity

Time Complexity

```
O(N)
```

Space Complexity

```
O(1)
```

---

# Does This Approach Fail?

No.

But the **problem specifically asks for recursion**.

So we must use recursion.

---

# BETTER APPROACH (Recursion)

## First Thought Intuition

Think like this:

```
Print name
Then ask the function to print the remaining times
```

Example:

```
N = 3
```

Steps:

```
Print once
Call function for N=2

Print once
Call function for N=1

Print once
Call function for N=0
Stop
```

---

## Recursive Thinking Model

A recursive function should answer one question:

```
"What smaller version of the same problem can I ask?"
```

Here:

```
printName(n)
→ print name
→ printName(n-1)
```

---

# Base Case

Stopping condition:

```
if n == 0
stop recursion
```

---

# Recursive Case

```
print name
call printName(n-1)
```

---

# Pseudocode

```
function printName(name,n)

    if n == 0
        return

    print name

    printName(name,n-1)
```

---

# Algorithm

1. Check base case.
2. Print name.
3. Call function again with `n-1`.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
void printName(string name, int n)
{
    if(n == 0)
        return;

    cout << name << endl;

    printName(name, n - 1);
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

void printName(string name, int n)
{
    // Base case
    if(n == 0)
        return;

    // Print name
    cout << name << endl;

    // Recursive call
    printName(name, n - 1);
}

int main()
{
    string name;
    int n;

    cout << "Enter name: ";
    cin >> name;

    cout << "Enter N: ";
    cin >> n;

    printName(name, n);

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(N)
```

Function runs N times.

---

### Space Complexity

```
O(N)
```

Because recursion uses **call stack memory**.

Example:

```
printName(3)
printName(2)
printName(1)
printName(0)
```

4 function calls stored in stack.

---

# Dry Run

Example

```
name = Tanish
N = 3
```

Call stack:

```
printName(3)
printName(2)
printName(1)
printName(0)
```

Execution:

```
Tanish
Tanish
Tanish
```

---

# Edge Cases

### N = 0

```
Nothing printed
```

---

### N = 1

```
Printed once
```

---

# How This Approach Handles the Problem

Each recursive call prints once and reduces the problem.

Eventually the base case stops recursion.

---

# Why This Is Optimal

Recursion directly models repeated tasks.

This pattern is used in:

```
Print 1 to N
Print N to 1
Sum of N numbers
Factorial
Tree traversal
DFS
Backtracking
```

So learning this pattern is critical.

---

# Pattern Recognition Notes

Every recursion problem must have:

```
1️⃣ Base case
2️⃣ Recursive call
```

General recursion template:

```
function f(n)

if base condition
    return

do work

f(smaller problem)
```

---
