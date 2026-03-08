# PROBLEM (Original Statement)

**Prime Number Check**

Given an integer `N`, determine whether it is a **prime number**.

A **prime number** is a number that has **exactly two divisors**:

```
1 and itself
```

Example:

```
Input: 7
Output: true
```

Because:

```
Divisors of 7 → 1,7
```

Example:

```
Input: 8
Output: false
```

Because:

```
Divisors of 8 → 1,2,4,8
```

---

# Topics / Patterns

### Topic

Basic Math / Number Theory

### Patterns

**1️⃣ Divisor Counting Pattern**

A number is prime if it has exactly **two divisors**.

**2️⃣ √N Optimization Pattern (Important)**

Instead of checking `1 → N`, we check:

```
1 → √N
```

Because divisors appear in pairs.

---

# BREAKDOWN PROBLEM

### What is being asked?

We need to determine whether a number has **only two divisors**.

### Input

```
Integer N
```

### Output

```
true → prime
false → not prime
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ N ≤ 10^9
```

Observations:

- `1` is **not prime**.
- `2` is the **smallest prime**.
- Efficient check needed for large numbers.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Natural thought:

> Count how many numbers divide `N`.

If divisor count is **exactly 2**, then number is prime.

---

## Thought Process (Step-wise)

1. Initialize divisor counter.
2. Loop from `1 → N`.
3. Check if `N % i == 0`.
4. Increase divisor count.
5. If count becomes greater than 2 → not prime.

---

## Pseudocode

```
count = 0

for i from 1 to N
    if N % i == 0
        count++

if count == 2
    return true
else
    return false
```

---

## Algorithm

1. Iterate all numbers.
2. Count divisors.
3. Check divisor count.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
bool isPrime(int n)
{
    int count = 0;

    for(int i = 1; i <= n; i++)
    {
        if(n % i == 0)
        {
            count++;
        }
    }

    return count == 2;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

bool isPrime(int n)
{
    int count = 0;

    for(int i = 1; i <= n; i++)
    {
        if(n % i == 0)
        {
            count++;
        }
    }

    return count == 2;
}

int main()
{
    int n;

    cout << "Enter number: ";
    cin >> n;

    if(isPrime(n))
        cout << "Prime Number";
    else
        cout << "Not Prime";

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(N)
```

Very slow for large numbers.

Example:

```
N = 10^9
```

Loop runs **1 billion times**.

---

### Space Complexity

```
O(1)
```

---

# Dry Run

Example:

```
N = 7
```

Loop:

```
i=1 → divisor → count=1
i=2 → not divisor
i=3 → not divisor
i=4 → not divisor
i=5 → not divisor
i=6 → not divisor
i=7 → divisor → count=2
```

Result:

```
Prime
```

---

# Edge Cases

### N = 1

```
Not prime
```

Because it has only **one divisor**.

---

### N = 2

```
Prime
```

Smallest prime.

---

### Even numbers

Example:

```
N = 8
```

Not prime.

---

# Does This Approach Fail?

Yes.

For large numbers:

```
O(N)
```

Too slow.

So we optimize.

---

# BETTER APPROACH (√N Divisor Check)

## First Thought Intuition

If a number has a divisor larger than √N, it must also have a smaller partner divisor.

Example:

```
36

1 × 36
2 × 18
3 × 12
4 × 9
6 × 6
```

So checking up to √N is enough.

---

## Thought Process

1. Loop from `2 → √N`.
2. If any number divides `N`, it is not prime.
3. Stop immediately.

---

## Pseudocode

```
if N <= 1
    return false

for i from 2 to √N
    if N % i == 0
        return false

return true
```

---

## Algorithm

1. Handle `N ≤ 1`.
2. Check divisibility from `2 → √N`.
3. If divisor found → not prime.
4. Otherwise → prime.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
bool isPrime(int n)
{
    if(n <= 1)
        return false;

    for(int i = 2; i * i <= n; i++)
    {
        if(n % i == 0)
            return false;
    }

    return true;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

bool isPrime(int n)
{
    if(n <= 1)
        return false;

    for(int i = 2; i * i <= n; i++)
    {
        // If divisor found, number is not prime
        if(n % i == 0)
            return false;
    }

    return true;
}

int main()
{
    int n;

    cout << "Enter number: ";
    cin >> n;

    if(isPrime(n))
        cout << "Prime Number";
    else
        cout << "Not Prime";

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(√N)
```

Huge improvement.

Example:

```
N = 1,000,000,000
√N ≈ 31623
```

Only **31k iterations**.

---

### Space Complexity

```
O(1)
```

---

# Dry Run

Example:

```
N = 29
```

Check:

```
i=2 → not divisor
i=3 → not divisor
i=4 → not divisor
i=5 → not divisor
```

Since:

```
√29 ≈ 5
```

No divisors found.

Result:

```
Prime
```

---

# Edge Cases

### N = 1

```
Not prime
```

---

### N = 2

```
Prime
```

---

### Large primes

Example:

```
999983
```

Still fast due to √N.

---

# Why This Is Optimal

Because every divisor pair includes one value ≤ √N.

So we never need to check beyond that.

---

# Pattern Recognition Notes

Whenever you see problems about:

```
Prime numbers
Divisors
Factorization
Number theory
```

Your brain should immediately think:

```
Loop until √N
```

This pattern appears in many advanced problems like:

- Sieve of Eratosthenes
- Prime factorization
- GCD optimizations

---
