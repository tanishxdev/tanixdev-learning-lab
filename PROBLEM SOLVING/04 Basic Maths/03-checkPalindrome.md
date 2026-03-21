# PROBLEM (Original Statement)

Given an integer **N**, determine whether the number is a **palindrome**.

A number is a palindrome if it **reads the same forward and backward**.

Example:

```
Input:  N = 121
Output: true
```

Explanation:

```
Forward  → 121
Backward → 121
Same → Palindrome
```

Example:

```
Input:  N = 123
Output: false
```

---

# Topics/Patterns

### Topic

- Basic Math
- Number Manipulation

Because we are manipulating **digits of the number**.

---

### Patterns

#### 1. Digit Extraction Pattern

```
digit = n % 10
n = n / 10
```

Extract digits from right side.

---

#### 2. Reverse Number Pattern

```
reverse = reverse * 10 + digit
```

Rebuild reversed number.

---

#### 3. Compare Pattern

```
if(original == reversed)
```

Then number is palindrome.

---

# BREAKDOWN PROBLEM

### What is being asked?

Check if a number remains **the same after reversing its digits**.

Example:

```
121
```

Reverse:

```
121
```

Same → Palindrome.

---

Example:

```
123
```

Reverse:

```
321
```

Not same → Not palindrome.

---

### Input

```
N = integer
```

Example

```
N = 121
```

---

### Output

Return:

```
true  → palindrome
false → not palindrome
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
−2^31 ≤ N ≤ 2^31 − 1
```

Important observations:

1. **Negative numbers cannot be palindrome**

Example

```
-121
```

Reverse:

```
121-
```

Not same.

---

2. Maximum digits ≈ **10**

So even brute force solutions are very fast.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

To check palindrome we naturally think:

```
Reverse the number
Compare with original number
```

Example

```
N = 121
```

Reverse → 121

Since both are same → palindrome.

---

## Thought Process (Step-wise)

Example

```
n = 121
original = 121
reverse = 0
```

Step 1

```
digit = 121 % 10 = 1
reverse = 0*10 + 1 = 1
n = 12
```

Step 2

```
digit = 2
reverse = 1*10 + 2 = 12
n = 1
```

Step 3

```
digit = 1
reverse = 12*10 + 1 = 121
n = 0
```

Now compare

```
original == reverse
121 == 121 → true
```

---

# Pseudocode

```
original = n
reverse = 0

while n > 0
    digit = n % 10
    reverse = reverse * 10 + digit
    n = n / 10

if original == reverse
    return true
else
    return false
```

---

# Algorithm

1. Store original number
2. Reverse the number using digit extraction
3. Compare reversed number with original
4. If equal → palindrome
5. Otherwise → not palindrome

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
bool isPalindrome(int n)
{
    int original = n;
    int reverse = 0;

    while(n > 0)
    {
        int digit = n % 10;
        reverse = reverse * 10 + digit;
        n = n / 10;
    }

    return original == reverse;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

/*
Function: isPalindrome

Purpose:
Check whether a number reads the same
forward and backward.

Approach:
1. Reverse the number
2. Compare with original
*/

bool isPalindrome(int n)
{
    int original = n;
    int reverse = 0;

    while(n > 0)
    {
        int digit = n % 10;      // extract last digit

        reverse = reverse * 10 + digit; // build reversed number

        n = n / 10;              // remove last digit
    }

    return original == reverse;
}

int main()
{
    int n;

    cout << "Enter number: ";
    cin >> n;

    if(isPalindrome(n))
        cout << "Palindrome";
    else
        cout << "Not Palindrome";

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(d)
```

Where:

```
d = number of digits
```

Example:

```
121 → 3 iterations
```

---

### Space Complexity

```
O(1)
```

Only constant variables used.

---

# Dry Run (All Cases)

### Case 1

```
n = 121
```

Process

```
reverse = 121
```

Compare

```
121 == 121 → true
```

---

### Case 2

```
n = 123
```

Reverse

```
321
```

Compare

```
123 ≠ 321 → false
```

---

### Case 3

```
n = 7
```

Reverse

```
7
```

Result

```
true
```

---

# Edge Cases

### Case 1

```
n = 0
```

Result

```
Palindrome
```

---

### Case 2

```
n = 10
```

Reverse

```
1
```

Result

```
Not palindrome
```

---

### Case 3 (Negative)

```
n = -121
```

Result

```
Not palindrome
```

---

# How This Approach Handles the Problem

The algorithm extracts digits using:

```
n % 10
```

and rebuilds the reversed number using:

```
reverse = reverse * 10 + digit
```

Then it compares with the original number.

---

# Does This Approach Fail?

Possible issue:

```
Integer overflow
```

If the reversed number exceeds `int` range.

But for most interview problems this is safe.

---

# OPTIMAL APPROACH (Interview Insight)

Better approach used in **LeetCode**:

Instead of reversing the whole number, **reverse only half** of the number.

Why?

Because palindrome numbers are **symmetrical**.

Example

```
12321
```

Left half:

```
12
```

Right half reversed:

```
12
```

But this is an **advanced optimization**.

For now the **reverse-and-compare method is perfect**.

---

# Why This Is Optimal

Because:

- Simple logic
- Only one loop
- Constant memory
- Very easy to implement in interviews

---

# Pattern Recognition Notes

Whenever you see problems like:

```
Reverse number
Palindrome number
Armstrong number
Digit sum
Digit frequency
```

Immediately think:

```
digit = n % 10
n = n / 10
```

This is the **core number manipulation pattern**.
