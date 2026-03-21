# PROBLEM (Original Statement)

Given an integer **N**, reverse the digits of the number.

Example:

```
Input:  N = 1234
Output: 4321
```

Example:

```
Input:  N = 450
Output: 54
```

---

# Topics/Patterns

### Topic

- Basic Math
- Number Manipulation

Why?

Because we manipulate **digits inside the number**.

---

### Patterns

**Digit Extraction Pattern**

```
digit = n % 10
n = n / 10
```

This extracts digits **from right to left**.

---

**Digit Reconstruction Pattern**

We rebuild a new number using:

```
new_number = new_number * 10 + digit
```

This pattern appears in:

- Reverse Number
- Palindrome Number
- Armstrong Number
- Digit Sum Problems

---

# BREAKDOWN PROBLEM

### What is being asked?

We must **reverse the order of digits**.

Example

```
1234
```

Digits:

```
1 2 3 4
```

Reversed:

```
4 3 2 1
```

Output:

```
4321
```

---

### Input

```
N = integer
```

Example

```
N = 1234
```

---

### Output

Return reversed number.

```
4321
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
0 ≤ N ≤ 10^9
```

Maximum digits:

```
10
```

This means a loop solution is extremely fast.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

If we read digits **from right to left**, we automatically get the reverse.

Example:

```
1234
```

Rightmost digits:

```
4
3
2
1
```

So if we extract digits one by one and **append them to a new number**, we get the reversed number.

---

## Thought Process (Step-wise)

Example

```
n = 1234
rev = 0
```

Step 1

```
digit = 1234 % 10 = 4
rev = 0 * 10 + 4 = 4
n = 1234 / 10 = 123
```

Step 2

```
digit = 3
rev = 4 * 10 + 3 = 43
n = 12
```

Step 3

```
digit = 2
rev = 43 * 10 + 2 = 432
n = 1
```

Step 4

```
digit = 1
rev = 432 * 10 + 1 = 4321
n = 0
```

Stop.

Result:

```
4321
```

---

# Pseudocode

```
rev = 0

while n > 0
    digit = n % 10
    rev = rev * 10 + digit
    n = n / 10

return rev
```

---

# Algorithm

1. Initialize `rev = 0`
2. Extract last digit using `%`
3. Add digit to reversed number
4. Remove last digit using `/`
5. Repeat until number becomes `0`
6. Return reversed number

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
int reverseNumber(int n)
{
    int rev = 0;

    while(n > 0)
    {
        int digit = n % 10;     // extract last digit
        rev = rev * 10 + digit; // build reversed number
        n = n / 10;             // remove last digit
    }

    return rev;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

/*
Function: reverseNumber

Purpose:
Reverse digits of a given integer.

Core Pattern Used:
digit extraction + number reconstruction
*/

int reverseNumber(int n)
{
    int rev = 0;

    while(n > 0)
    {
        int digit = n % 10;      // get last digit

        rev = rev * 10 + digit;  // append digit to reversed number

        n = n / 10;              // remove last digit
    }

    return rev;
}

int main()
{
    int n;

    cout << "Enter number: ";
    cin >> n;

    int result = reverseNumber(n);

    cout << "Reversed number: " << result;

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(d)
```

Where

```
d = number of digits
```

Example

```
1234 → 4 iterations
```

---

### Space Complexity

```
O(1)
```

Only a few variables used.

---

# Dry Run (All Cases)

### Normal Case

```
n = 123
```

Process

```
rev = 0

digit = 3 → rev = 3
digit = 2 → rev = 32
digit = 1 → rev = 321
```

Output

```
321
```

---

### Case with trailing zero

```
n = 450
```

Process

```
digit = 0 → rev = 0
digit = 5 → rev = 5
digit = 4 → rev = 54
```

Output

```
54
```

---

### Single Digit

```
n = 7
```

Output

```
7
```

---

# Edge Cases

### Case 1

```
n = 0
```

Output

```
0
```

---

### Case 2

```
n = 1000
```

Output

```
1
```

Trailing zeros disappear automatically.

---

# How This Approach Handles the Problem

The algorithm extracts digits from **right to left** and reconstructs them **left to right**, effectively reversing the number.

---

# Does This Approach Fail?

For normal integer constraints → **No**.

But if the number exceeds integer limits (like in some LeetCode problems), we must check **overflow**.

---

# Why This Pattern Is Important

This exact pattern is used in **many DSA problems**:

```
digit = n % 10
n = n / 10
```

and

```
newNumber = newNumber * 10 + digit
```

Once you understand this, you can solve:

- Reverse Number
- Palindrome Number
- Armstrong Number
- Sum of Digits
- Count Digits

These are **core number manipulation problems**.
