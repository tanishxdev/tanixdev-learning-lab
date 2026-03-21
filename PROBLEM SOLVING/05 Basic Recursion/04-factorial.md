# PROBLEM (Original Statement)

Given an integer **N**, compute the **factorial of N**.

Factorial of N is defined as:

```
N! = N × (N-1) × (N-2) × ... × 1
```

Example:

```
Input:  N = 5
Output: 120

Explanation:
5! = 5 × 4 × 3 × 2 × 1 = 120
```

---

# Topics/Patterns

### Topic

Recursion

Why:

Factorial naturally breaks into smaller problems.

```
5! = 5 × 4!
4! = 4 × 3!
3! = 3 × 2!
2! = 2 × 1!
```

---

### Pattern

**Recurrence Relation**

```
fact(n) = n * fact(n-1)
```

Base case:

```
fact(0) = 1
fact(1) = 1
```

This is a **classic recursion pattern**.

---

# BREAKDOWN PROBLEM

### What is being asked?

Compute:

```
N!
```

Which means multiplying all numbers from **1 to N**.

---

### Input

Single integer

```
N
```

---

### Output

Single integer

```
Factorial of N
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
0 ≤ N ≤ 20
```

Why limit?

Because factorial grows very fast.

Example:

```
10! = 3,628,800
20! ≈ 2.43 × 10^18
```

After that it may overflow `long long`.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Natural thought:

```
Multiply numbers from 1 → N
```

Example:

```
N = 5

result = 1
result = result × 1
result = result × 2
result = result × 3
result = result × 4
result = result × 5
```

Final:

```
120
```

---

## Thought Process (Step-wise)

1. Start with result = 1
2. Loop from 1 to N
3. Multiply result with each number
4. Return result

---

## Pseudocode

```
result = 1

for i from 1 to N
    result = result * i

return result
```

---

## Algorithm

1. Initialize result = 1
2. Iterate from 1 → N
3. Multiply result with i
4. Return result

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
long long factorial(int n)
{
    long long result = 1;

    for(int i = 1; i <= n; i++)
    {
        result = result * i;
    }

    return result;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

long long factorial(int n)
{
    long long result = 1;

    // multiply numbers from 1 to n
    for(int i = 1; i <= n; i++)
    {
        result = result * i;
    }

    return result;
}

int main()
{
    int n;

    cout << "Enter N: ";
    cin >> n;

    long long ans = factorial(n);

    cout << "Factorial = " << ans;

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(N)
```

Loop runs N times.

---

### Space Complexity

```
O(1)
```

Only one variable used.

---

# Dry Run (All Cases)

### Normal Case

```
N = 5
```

```
result = 1
1 × 1 = 1
1 × 2 = 2
2 × 3 = 6
6 × 4 = 24
24 × 5 = 120
```

Output:

```
120
```

---

### Best Case

```
N = 0
```

Output:

```
1
```

---

### Worst Case

```
N = 20
```

Large multiplication but still manageable.

---

# Edge Cases

### Case 1

```
N = 0
```

```
0! = 1
```

Important mathematical rule.

---

### Case 2

```
N = 1
```

```
1! = 1
```

---

# How This Approach Handles the Problem

It multiplies numbers sequentially from **1 to N**.

This directly matches the factorial definition.

---

# Does This Approach Fail?

No.

But this approach does **not demonstrate recursion**.

Since today's focus is recursion, we move to recursive approach.

---

# BETTER APPROACH

## First Thought Intuition

Observe the pattern:

```
5! = 5 × 4!
4! = 4 × 3!
3! = 3 × 2!
2! = 2 × 1!
1! = 1
```

So we can express factorial recursively.

```
fact(n) = n × fact(n-1)
```

---

## Thought Process (Step-wise)

Break big problem into smaller problem.

Example:

```
factorial(5)

= 5 × factorial(4)
= 5 × (4 × factorial(3))
= 5 × (4 × (3 × factorial(2)))
= 5 × (4 × (3 × (2 × factorial(1))))
= 5 × 4 × 3 × 2 × 1
```

---

## Pseudocode

```
function factorial(n)

if n == 0 or n == 1
    return 1

return n * factorial(n-1)
```

---

## Algorithm

1. If n == 0 or n == 1 → return 1
2. Otherwise return:

```
n × factorial(n-1)
```

---

# CODE

## C++

### V1 (Required Function)

```cpp
long long factorial(int n)
{
    if(n == 0 || n == 1)
        return 1;

    return n * factorial(n - 1);
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

long long factorial(int n)
{
    // base condition
    if(n == 0 || n == 1)
        return 1;

    // recursive relation
    return n * factorial(n - 1);
}

int main()
{
    int n;

    cout << "Enter N: ";
    cin >> n;

    long long ans = factorial(n);

    cout << "Factorial = " << ans;

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(N)
```

We make **N recursive calls**.

---

### Space Complexity

```
O(N)
```

Because recursion uses **call stack**.

Example:

```
factorial(5)
factorial(4)
factorial(3)
factorial(2)
factorial(1)
```

5 stack frames.

---

# Dry Run

Example:

```
factorial(4)
```

Call stack:

```
factorial(4)
= 4 × factorial(3)

factorial(3)
= 3 × factorial(2)

factorial(2)
= 2 × factorial(1)

factorial(1)
= 1
```

Now resolve:

```
2 × 1 = 2
3 × 2 = 6
4 × 6 = 24
```

Output:

```
24
```

---

# Edge Cases

```
N = 0 → return 1
N = 1 → return 1
```

---

# How This Approach Handles the Problem

The recursion keeps reducing the problem size:

```
N → N-1 → N-2 → ... → 1
```

Until base case.

Then results propagate back.

---

# Why This Is Optimal

For factorial there is **no faster algorithm than O(N)** because we must multiply **N numbers**.

Thus recursion or iteration are both optimal.

---

# Pattern Recognition

Whenever you see problems like:

```
n * (n-1) * (n-2) * ...
```

Think:

```
Recurrence Relation
```

Typical recursion pattern:

```
f(n) = n * f(n-1)
```

This pattern appears in:

- factorial
- permutations
- combinations
- recursion tree problems

---
