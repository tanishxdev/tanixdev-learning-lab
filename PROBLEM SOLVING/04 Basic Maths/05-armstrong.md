# PROBLEM (Original Statement)

**Armstrong Number**

Given an integer `N`, determine whether it is an **Armstrong Number**.

An **Armstrong Number** is a number that is equal to the **sum of the cubes of its digits**.

Example:

```
Input: 153
Output: true
```

Because:

```
1³ + 5³ + 3³ = 1 + 125 + 27 = 153
```

Another example:

```
Input: 123
Output: false
```

Because:

```
1³ + 2³ + 3³ = 1 + 8 + 27 = 36 ≠ 123
```

---

# Topics / Patterns

### Topic

Basic Math + Digit Manipulation

### Patterns

1. **Digit Extraction Pattern**

```
digit = n % 10
n = n / 10
```

Used to process digits individually.

2. **Digit Processing Pattern**

Each digit is transformed before summing.

Example:

```
digit³
```

---

# BREAKDOWN PROBLEM

### What is being asked?

Check if a number equals the **sum of cubes of its digits**.

Example:

```
153
```

Digits:

```
1
5
3
```

Compute:

```
1³ + 5³ + 3³
```

If result equals original number → Armstrong.

---

### Input

```
Integer N
```

### Output

```
true  → Armstrong
false → Not Armstrong
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ N ≤ 10^9
```

Observations:

- We must inspect every digit.
- Maximum digits ≈ 10.
- So complexity is small.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Natural thought:

> Extract each digit, cube it, and add it to a running sum.

If the sum equals the original number → Armstrong.

---

## Thought Process (Step-wise)

1. Store original number.
2. Extract digits one by one.
3. Cube each digit.
4. Add to sum.
5. Compare with original.

---

## Pseudocode

```
original = N
sum = 0

while N > 0
    digit = N % 10
    sum = sum + digit³
    N = N / 10

if sum == original
    return true
else
    return false
```

---

## Algorithm

1. Save original number.
2. Initialize `sum = 0`.
3. Extract digits using `%10`.
4. Cube digit.
5. Add to sum.
6. Remove digit using `/10`.
7. Compare sum with original.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
bool isArmstrong(int n)
{
    int original = n;
    int sum = 0;

    while(n > 0)
    {
        int digit = n % 10;

        sum = sum + (digit * digit * digit);

        n = n / 10;
    }

    return sum == original;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

bool isArmstrong(int n)
{
    int original = n;
    int sum = 0;

    while(n > 0)
    {
        // Extract last digit
        int digit = n % 10;

        // Add cube of digit
        sum = sum + (digit * digit * digit);

        // Remove last digit
        n = n / 10;
    }

    return sum == original;
}

int main()
{
    int n;

    cout << "Enter number: ";
    cin >> n;

    if(isArmstrong(n))
        cout << "Armstrong Number";
    else
        cout << "Not Armstrong";

    return 0;
}
```

---

# Time and Space Complexity

Let number of digits = **d**

### Time Complexity

```
O(d)
```

We process each digit once.

---

### Space Complexity

```
O(1)
```

Only a few variables used.

---

# Dry Run (All Cases)

### Example

```
N = 153
```

Step 1

```
digit = 3
sum = 27
N = 15
```

Step 2

```
digit = 5
sum = 27 + 125 = 152
N = 1
```

Step 3

```
digit = 1
sum = 152 + 1 = 153
N = 0
```

Compare:

```
sum = 153
original = 153
```

Result → Armstrong.

---

### Example 2

```
N = 123
```

Compute:

```
1³ + 2³ + 3³
= 1 + 8 + 27
= 36
```

Not equal to 123 → Not Armstrong.

---

# Edge Cases

### Single digit numbers

```
5 → 5³ = 125
```

Not Armstrong.

But mathematically single digits are sometimes considered Armstrong depending on definition.

---

### Zero

```
0 → Armstrong
```

Because:

```
0³ = 0
```

---

### Large numbers

Still works because digits processed individually.

---

# How This Approach Handles the Problem

We evaluate each digit independently.

The sum of digit cubes represents the Armstrong property.

If the sum equals original number → Armstrong.

---

# Does This Approach Fail?

No.

Because:

- We must inspect every digit.
- Complexity already optimal.

---

# OPTIMAL APPROACH

There is no faster algorithm.

We must read all digits.

So optimal complexity remains:

```
O(d)
```

---

# Pattern Recognition Notes

Armstrong problems always use:

```
digit = n % 10
n = n / 10
```

Then apply transformation:

```
digit³
digit^k
digit factorial
digit sum
```

This forms a general pattern:

```
Digit Extraction + Digit Transformation
```

---

# Day 1 Summary (Very Important)

Today you built the **Digit Manipulation Toolkit**:

1. **Count Digits**

```
while(n>0)
n = n/10
```

2. **Reverse Number**

```
rev = rev*10 + digit
```

3. **Palindrome Number**

```
reverse == original
```

4. **GCD**

```
gcd(a,b) = gcd(b,a%b)
```

5. **Armstrong Number**

```
sum += digit³
```

These patterns appear repeatedly in interviews.

---
