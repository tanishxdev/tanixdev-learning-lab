# 1. What is Recursion (Simple Definition)

**Recursion = a function calling itself to solve smaller versions of the same problem.**

Instead of solving the entire problem at once:

```
Big Problem
   ↓
Break into smaller problem
   ↓
Break again
   ↓
Until smallest solvable case
```

Then results **bubble back up**.

---

# 2. Real Life Analogy

Think about **opening nested boxes**.

```
Box
 └── smaller box
      └── smaller box
           └── smaller box
                └── gift
```

Steps:

```
Open box
Open inner box
Open inner box
Open inner box
Get gift
```

Now return back.

This **open → open → open → return → return** is exactly recursion.

---

# 3. The Two Mandatory Parts of Recursion

Every recursion must have **two things**.

## 1. Base Case

Stopping condition.

Without this recursion becomes **infinite**.

Example:

```
if(n == 0)
   return
```

---

## 2. Recursive Case

Where function **calls itself**.

Example:

```
f(n) calls f(n-1)
```

---

# 4. Basic Example (Factorial)

### Problem

```
5! = 5 × 4 × 3 × 2 × 1
```

---

### Recursive Thinking

```
5! = 5 × 4!
4! = 4 × 3!
3! = 3 × 2!
2! = 2 × 1!
1! = 1
```

---

### Code (C++)

```cpp
#include <iostream>
using namespace std;

int factorial(int n)
{
    // Base Case
    if(n == 1)
        return 1;

    // Recursive Call
    return n * factorial(n - 1);
}

int main()
{
    cout << factorial(5);
}
```

---

### Execution Flow

```
factorial(5)
 → 5 * factorial(4)

factorial(4)
 → 4 * factorial(3)

factorial(3)
 → 3 * factorial(2)

factorial(2)
 → 2 * factorial(1)

factorial(1)
 → return 1
```

Now returning back:

```
2 * 1 = 2
3 * 2 = 6
4 * 6 = 24
5 * 24 = 120
```

---

# 5. What Happens Internally (Call Stack)

Recursion uses **call stack memory**.

When function calls itself:

```
push new function frame
```

Example stack:

```
factorial(5)
factorial(4)
factorial(3)
factorial(2)
factorial(1)
```

Then popping:

```
factorial(1) return
factorial(2) return
factorial(3) return
factorial(4) return
factorial(5) return
```

---

# 6. Why Recursion Exists

Some problems are **naturally recursive**.

Because they break into **same smaller problem**.

Examples:

| Problem            | Recursive Nature       |
| ------------------ | ---------------------- |
| Factorial          | n × (n-1)!             |
| Fibonacci          | F(n) = F(n-1) + F(n-2) |
| Tree traversal     | subtree → subtree      |
| Backtracking       | explore → explore      |
| Divide and conquer | split → solve          |

---

# 7. Problems Recursion Solves

Recursion is powerful for **three types of problems**.

---

## 1. Divide and Conquer

Break problem into smaller pieces.

Examples

```
Merge Sort
Quick Sort
Binary Search
```

---

## 2. Tree / Graph Problems

Because trees are **naturally recursive structures**.

Example

```
Tree
 ├ left subtree
 └ right subtree
```

Traversal uses recursion.

---

## 3. Backtracking

Explore all possibilities.

Examples

```
Subsets
Permutations
N Queens
Sudoku
Maze
```

---

# 8. Why Recursion is Powerful

Recursion reduces **complex logic into simple structure**.

Example: tree traversal.

Without recursion:

```
Use stack
Push nodes
Handle children
Complex logic
```

With recursion:

```
visit(node)
visit(left)
visit(right)
```

Much cleaner.

---

# 9. Recursion vs Iteration

| Feature     | Recursion       | Iteration |
| ----------- | --------------- | --------- |
| Uses        | Function calls  | Loops     |
| Memory      | Stack           | Constant  |
| Code        | Short           | Longer    |
| Performance | Slightly slower | Faster    |

---

# 10. Disadvantages of Recursion

## 1. Stack Overflow

If recursion depth too large.

Example

```
recursion depth = 100000
```

Stack crashes.

---

## 2. Extra Memory

Each function call stores:

```
parameters
local variables
return address
```

---

# 11. Tail Recursion

Special recursion where **last operation is recursive call**.

Example

```cpp
int fact(int n, int result)
{
    if(n == 1)
        return result;

    return fact(n - 1, n * result);
}
```

Some languages optimize this.

---

# 12. Recursion Tree Concept

Example: Fibonacci.

```
fib(5)
├ fib(4)
│ ├ fib(3)
│ └ fib(2)
└ fib(3)
```

This tree helps understand:

```
time complexity
duplicate work
```

---

# 13. Recursion Complexity

Often exponential.

Example:

```
Fibonacci recursion

T(n) = T(n-1) + T(n-2)

Time = O(2^n)
```

That's why **DP optimization exists**.

---

# 14. Key Recursion Patterns

When solving DSA problems, recursion follows patterns.

---

## Pattern 1 — Pick / Not Pick

Used in:

```
Subsets
Combination sum
```

---

## Pattern 2 — All Permutations

Used in:

```
Permutation problems
```

---

## Pattern 3 — Divide Problem

Used in:

```
Merge sort
Quick sort
Binary search
```

---

## Pattern 4 — Tree DFS

Used in:

```
Binary Tree traversal
Graph DFS
```

---

# 15. How to Think Recursively (Important)

The biggest mistake beginners make:

They try to understand **full recursion flow**.

Wrong approach.

Correct thinking:

```
Assume recursion works correctly
Focus only on current step
```

Example:

```
factorial(n)
```

Think:

```
If factorial(n-1) works
Then I just multiply by n
```

---

# 16. Golden Recursion Template

```
function solve(problem):

    if(base case)
        return answer

    break problem into smaller problem

    call recursion

    combine results

    return result
```

---

# 17. Classic Beginner Recursion Problems

Start with these.

Level 1

```
print 1 to n
factorial
sum of numbers
power
reverse string
```

---

Level 2

```
fibonacci
palindrome check
binary search recursion
```

---

Level 3

```
subsets
permutations
combination sum
```

---

Level 4

```
N queens
sudoku
word search
```

---

# 18. When NOT to Use Recursion

Avoid recursion when:

```
n is very large (10^6)
stack overflow risk
simple loop possible
```

Example:

```
factorial
sum
```

Better with loops.

---

# 19. Most Important Recursion Rule

Always ask:

```
1. What is base case?
2. What smaller problem am I solving?
3. How does answer combine?
```

---

# 20. Final Mental Model

Recursion = **trust smaller version of problem**.

Think like this:

```
I don't solve whole problem.

I solve ONE step.

Recursion solves the rest.
```

---

# 21. Pattern Recognition (Interview Mindset)

When you see problems like:

```
generate all possibilities
explore every path
tree traversal
divide into subproblems
```

Your brain should trigger:

```
RECURSION
```

---
