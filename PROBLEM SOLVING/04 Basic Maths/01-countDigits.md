# PROBLEM (Original Statement)

Given an integer **N**, count the total number of digits present in the number.

Example:

```
Input:  N = 7789
Output: 4
```

Explanation:

```
Digits → 7, 7, 8, 9
Total digits = 4
```

---

# Topics/Patterns

### Topic

- **Basic Math**
- **Number Manipulation**

Why?
Because we are directly operating on the **digits of a number** using mathematical operations.

### Patterns

1. **Digit Extraction Pattern**

   Using:

   ```
   last_digit = n % 10
   n = n / 10
   ```

2. **Iterative Reduction Pattern**

   Continuously reduce the number until it becomes **0**.

This pattern is used in many problems:

- Reverse Number
- Palindrome Number
- Armstrong Number
- Sum of Digits
- Product of Digits

So this is a **very foundational pattern**.

---

# BREAKDOWN PROBLEM

### What is being asked?

We need to determine **how many digits exist inside a number**.

Example:

```
12345
```

Digits:

```
1
2
3
4
5
```

Total → **5**

---

### Input

An integer **N**

Example:

```
N = 1234
```

---

### Output

Return **number of digits**

Example:

```
4
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ N ≤ 10^9
```

Possible digits:

```
Maximum digits = 10
```

Example:

```
1000000000
```

Digits → 10

---

### What does this mean?

Even the brute force approach will be extremely fast.

Because:

```
O(digits) ≤ 10
```

So time complexity is negligible.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

When we look at a number like:

```
4567
```

We naturally read digits **from right to left**.

```
7
6
5
4
```

Mathematically we can extract the last digit using:

```
n % 10
```

Then remove it using:

```
n = n / 10
```

So every time we remove a digit → we increase a counter.

---

## Thought Process (Step-wise)

Example:

```
n = 4567
```

Step 1:

```
digit = 4567 % 10 = 7
count = 1
n = 4567 / 10 = 456
```

Step 2:

```
digit = 456 % 10 = 6
count = 2
n = 456 / 10 = 45
```

Step 3:

```
digit = 45 % 10 = 5
count = 3
n = 45 / 10 = 4
```

Step 4:

```
digit = 4 % 10 = 4
count = 4
n = 4 / 10 = 0
```

Stop when:

```
n == 0
```

---

## Pseudocode

```
count = 0

while n > 0
    n = n / 10
    count++

return count
```

---

## Algorithm

1. Initialize **count = 0**
2. While **n > 0**
3. Divide number by **10**
4. Increase **count**
5. Repeat until **n becomes 0**
6. Return **count**

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
int countDigits(int n)
{
    int count = 0;

    while (n > 0)
    {
        n = n / 10;  // remove last digit
        count++;     // increase digit counter
    }

    return count;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

/*
    Function: countDigits

    Purpose:
    Counts how many digits exist in the number.

    Logic:
    Keep dividing the number by 10 until it becomes 0.
    Each division removes one digit from the right.
*/

int countDigits(int n)
{
    int count = 0;   // stores number of digits

    while (n > 0)
    {
        n = n / 10;  // remove the last digit
        count++;     // increment digit counter
    }

    return count;
}

int main()
{
    int n;

    cout << "Enter number: ";
    cin >> n;

    int result = countDigits(n);

    cout << "Total digits: " << result << endl;

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
N = 123456
digits = 6
```

Loop runs **6 times**.

---

### Space Complexity

```
O(1)
```

No extra memory used.

---

# Dry Run (All Cases)

### Normal Case

Input:

```
n = 1234
```

Process:

```
1234 → 123 → 12 → 1 → 0
```

Iterations:

```
4
```

Output:

```
4
```

---

### Best Case

```
n = 7
```

Iterations:

```
1
```

---

### Worst Case

```
n = 1000000000
```

Digits:

```
10
```

Still extremely small.

---

# Edge Cases

### Case 1

```
n = 0
```

Our algorithm returns **0**.

But **correct answer should be 1**.

Because:

```
0 → one digit
```

We must handle this case separately.

---

### Case 2

Large numbers

```
n = 987654321
```

Still works fine.

---

# How This Approach Handles the Problem

The algorithm repeatedly **removes digits one by one**.

Since each division removes exactly **one digit**, counting divisions gives us the **digit count**.

---

# Does This Approach Fail?

Yes.

For:

```
n = 0
```

Because:

```
while(n > 0)
```

will never run.

---

So we modify slightly:

```
if n == 0 return 1
```

Then it works for all cases.

---

# BETTER APPROACH

There is another mathematical approach using **logarithms**.

Digit count formula:

```
digits = floor(log10(n)) + 1
```

Example:

```
n = 4567

log10(4567) ≈ 3.659

floor = 3

digits = 3 + 1 = 4
```

---

## Pseudocode

```
if n == 0
    return 1

digits = floor(log10(n)) + 1
return digits
```

---

## C++ CODE

### V1

```cpp
#include <cmath>

int countDigits(int n)
{
    if (n == 0)
        return 1;

    return floor(log10(n)) + 1;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int countDigits(int n)
{
    if (n == 0)
        return 1;

    return floor(log10(n)) + 1;
}

int main()
{
    int n;

    cout << "Enter number: ";
    cin >> n;

    cout << "Total digits: " << countDigits(n);

    return 0;
}
```

---

# Time and Space Complexity

Time:

```
O(1)
```

Because log calculation happens instantly.

Space:

```
O(1)
```

---

# Dry Run

Example:

```
n = 1234
```

```
log10(1234) ≈ 3.091
floor = 3
digits = 3 + 1 = 4
```

---

# Edge Cases

```
n = 0
```

Handled separately.

---

# How This Approach Handles the Problem

Logarithm tells us **how many powers of 10 fit into the number**, which directly reveals digit count.

---

# Does This Approach Fail?

For **negative numbers** we must use:

```
abs(n)
```

But for normal constraints it works perfectly.

---

# OPTIMAL APPROACH

For interviews and clarity, the **best approach is still the loop approach**.

Why?

Because:

- Works for any number
- No floating point precision issues
- Very intuitive
- Pattern used in many problems

---

# Why This Is Optimal

Given constraints:

```
digits ≤ 10
```

Even brute approach is **constant time** practically.

So the iterative solution is simple and safe.

---

# Pattern Recognition Notes

When you see problems involving **digits of a number**, immediately think:

```
digit extraction pattern
```

Core operations:

```
last_digit = n % 10
remove_digit = n / 10
```

This pattern appears in:

- Reverse Number
- Palindrome Number
- Armstrong Number
- Sum of Digits
- Count Digits
- Check Digit Conditions

This is one of the **first mental patterns in number manipulation problems**.
