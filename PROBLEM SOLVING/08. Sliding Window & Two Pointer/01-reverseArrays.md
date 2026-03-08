# PROBLEM (Original Statement)

Given an array of size **N**, reverse the array.

Example:

```
Input:
arr = [1, 2, 3, 4, 5]

Output:
[5, 4, 3, 2, 1]
```

The array must be reversed **in-place**.

---

# Topics/Patterns

### Topic

Array + Recursion

Why:
We will reverse the array by **swapping elements recursively**.

---

### Patterns

**Two Pointer Pattern**

```
Left pointer → start
Right pointer → end
Swap and move inward
```

This is a very common pattern in arrays and strings.

---

# BREAKDOWN PROBLEM

### What is being asked?

Reverse the order of elements in the array.

Original:

```
1 2 3 4 5
```

Reversed:

```
5 4 3 2 1
```

---

### Input

```
Array
size N
```

Example

```
[1,2,3,4,5]
```

---

### Output

Same array but reversed.

```
[5,4,3,2,1]
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints

```
1 ≤ N ≤ 10^5
```

Observations:

- We should **not create another array**
- Reverse **in-place**

Best complexity:

```
Time → O(N)
Space → O(1)
```

---

# BRUTE FORCE APPROACH

## First Thought Intuition

First natural idea:

Create **another array** and fill it in reverse order.

Example:

```
Original: [1,2,3,4,5]

New array:
arr2[0] = arr[4]
arr2[1] = arr[3]
arr2[2] = arr[2]
arr2[3] = arr[1]
arr2[4] = arr[0]
```

Result:

```
[5,4,3,2,1]
```

---

## Thought Process (Step-wise)

1. Create new array `rev`
2. Traverse original array from end
3. Insert elements in `rev`
4. Copy back to original

---

## Pseudocode

```
create rev array

index = 0

for i = n-1 → 0
    rev[index] = arr[i]
    index++

copy rev into arr
```

---

## Algorithm

1. Create new array of size N
2. Traverse original array backwards
3. Store values in new array
4. Replace original array

---

# CODE

## C++

### V1 (Required Function)

```cpp
void reverseArray(vector<int>& arr)
{
    int n = arr.size();

    vector<int> temp(n);

    for(int i = 0; i < n; i++)
    {
        temp[i] = arr[n - 1 - i];
    }

    arr = temp;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
#include <vector>
using namespace std;

void reverseArray(vector<int>& arr)
{
    int n = arr.size();

    vector<int> temp(n);

    for(int i = 0; i < n; i++)
    {
        temp[i] = arr[n - 1 - i];
    }

    arr = temp;
}

int main()
{
    vector<int> arr = {1,2,3,4,5};

    reverseArray(arr);

    for(int x : arr)
        cout << x << " ";

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(N)
```

We traverse array once.

---

### Space Complexity

```
O(N)
```

Extra array used.

---

# Dry Run

Array

```
[1,2,3,4,5]
```

Process

```
temp[0] = 5
temp[1] = 4
temp[2] = 3
temp[3] = 2
temp[4] = 1
```

Result

```
[5,4,3,2,1]
```

---

# Edge Cases

```
N = 1
```

```
[7] → [7]
```

---

# How This Approach Handles the Problem

It simply copies elements in reverse order.

---

# Does This Approach Fail?

Yes — not optimal.

Problem:

```
Extra Space = O(N)
```

Interviewers prefer **in-place reversal**.

So we move to better approach.

---

# BETTER APPROACH

## First Thought Intuition

Instead of creating a new array, we can **swap elements**.

Example:

```
1 2 3 4 5
↑       ↑
swap
```

Result:

```
5 2 3 4 1
```

Then move inward.

---

## Thought Process (Step-wise)

Use two pointers:

```
left = 0
right = n-1
```

Swap until they meet.

---

## Pseudocode

```
left = 0
right = n-1

while left < right
    swap(arr[left], arr[right])

    left++
    right--
```

---

## Algorithm

1. Initialize two pointers
2. Swap elements
3. Move pointers inward
4. Stop when they meet

---

# CODE

## C++

### V1

```cpp
void reverseArray(vector<int>& arr)
{
    int left = 0;
    int right = arr.size() - 1;

    while(left < right)
    {
        swap(arr[left], arr[right]);

        left++;
        right--;
    }
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
#include <vector>
using namespace std;

void reverseArray(vector<int>& arr)
{
    int left = 0;
    int right = arr.size() - 1;

    while(left < right)
    {
        swap(arr[left], arr[right]);

        left++;
        right--;
    }
}

int main()
{
    vector<int> arr = {1,2,3,4,5};

    reverseArray(arr);

    for(int x : arr)
        cout << x << " ";

    return 0;
}
```

---

# Time and Space Complexity

Time

```
O(N)
```

Space

```
O(1)
```

---

# Dry Run

```
[1,2,3,4,5]
```

Step 1

```
swap(1,5)
[5,2,3,4,1]
```

Step 2

```
swap(2,4)
[5,4,3,2,1]
```

Stop

---

# Edge Cases

```
Single element
Even size
Odd size
```

All handled correctly.

---

# Does This Approach Fail?

No.

But since today is **recursion day**, we move to recursive approach.

---

# OPTIMAL APPROACH (RECURSION)

## First Thought Intuition

Use recursion with two pointers.

Example

```
swap first and last
then solve remaining subarray
```

---

## Thought Process

Example:

```
[1,2,3,4,5]
```

Step 1

```
swap(1,5)
```

Call recursion on

```
[2,3,4]
```

---

## Pseudocode

```
reverse(arr, left, right)

if left >= right
    return

swap(arr[left], arr[right])

reverse(arr, left+1, right-1)
```

---

## Algorithm

1. Swap first and last
2. Reduce problem size
3. Continue recursively

---

# CODE

## C++

### V1

```cpp
void reverseArray(vector<int>& arr, int left, int right)
{
    if(left >= right)
        return;

    swap(arr[left], arr[right]);

    reverseArray(arr, left + 1, right - 1);
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
#include <vector>
using namespace std;

void reverseArray(vector<int>& arr, int left, int right)
{
    if(left >= right)
        return;

    swap(arr[left], arr[right]);

    reverseArray(arr, left + 1, right - 1);
}

int main()
{
    vector<int> arr = {1,2,3,4,5};

    reverseArray(arr, 0, arr.size() - 1);

    for(int x : arr)
        cout << x << " ";

    return 0;
}
```

---

# Time and Space Complexity

Time

```
O(N)
```

Space

```
O(N)
```

Because recursion stack.

---

# Pattern Recognition (Important)

Whenever you see:

```
reverse array
reverse string
palindrome check
two ends processing
```

Immediately think:

```
Two Pointer Pattern
```

or

```
Recursion with shrinking boundaries
```

---
