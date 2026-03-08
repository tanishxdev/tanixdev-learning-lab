# PROBLEM (Original Statement)

Implement **Selection Sort** to sort an array in **ascending order**.

Selection Sort works by repeatedly selecting the **smallest element from the unsorted part** of the array and placing it at the beginning.

Example:

```
Input:
arr = [64, 25, 12, 22, 11]

Output:
[11, 12, 22, 25, 64]
```

---

# Topics / Patterns

## Topic

Sorting Algorithms (Basic Sorting)

Selection Sort is a **comparison-based sorting algorithm**.

## Patterns

Pattern 1 — **Minimum Selection Pattern**

Each pass:

- Find the **minimum element**
- Place it in its **correct position**

Pattern 2 — **Divide Array into Two Parts**

```
Sorted Part | Unsorted Part
```

We expand the sorted part step by step.

---

# BREAKDOWN PROBLEM

We are given an **unsorted array**.

Example:

```
[64, 25, 12, 22, 11]
```

Goal:

```
Sort in ascending order
```

Key idea:

At each step we determine **which element should go to that index**.

Example:

Position `0` should contain **smallest element**.

So we search the array and find:

```
11
```

Then swap.

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ n ≤ 10^4
```

Selection sort complexity:

```
O(n²)
```

This is acceptable for small arrays but **not efficient for large datasets**.

Selection Sort characteristics:

| Property         | Value |
| ---------------- | ----- |
| Time Complexity  | O(n²) |
| Space Complexity | O(1)  |
| Stable           | No    |
| In-place         | Yes   |

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Natural thinking:

For each position:

```
Find the smallest element remaining
```

Then place it in the correct position.

Example:

```
[64, 25, 12, 22, 11]
```

Smallest element:

```
11
```

Swap with first element.

---

## Thought Process (Step-wise)

Iteration 1:
Find minimum from entire array.

Iteration 2:
Find minimum from remaining array.

Iteration 3:
Continue until sorted.

---

## Pseudocode

```
for i from 0 to n-1

    minIndex = i

    for j from i+1 to n-1
        if arr[j] < arr[minIndex]
            minIndex = j

    swap(arr[i], arr[minIndex])
```

---

## Algorithm

Step 1
Start from index `0`.

Step 2
Search smallest element in the remaining array.

Step 3
Swap with current position.

Step 4
Move boundary of sorted array forward.

Repeat until array sorted.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
void selectionSort(vector<int>& arr) {

    int n = arr.size();

    for(int i = 0; i < n - 1; i++) {

        int minIndex = i;

        // find smallest element in remaining array
        for(int j = i + 1; j < n; j++) {

            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }

        }

        // swap smallest with current position
        swap(arr[i], arr[minIndex]);
    }
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {

    vector<int> arr = {64, 25, 12, 22, 11};

    int n = arr.size();

    for(int i = 0; i < n - 1; i++) {

        int minIndex = i;

        // search for minimum element
        for(int j = i + 1; j < n; j++) {

            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }

        }

        // swap current element with minimum
        swap(arr[i], arr[minIndex]);
    }

    cout << "Sorted array: ";

    for(int num : arr) {
        cout << num << " ";
    }

}
```

---

# Time and Space Complexity

## Time Complexity

Outer loop:

```
n
```

Inner loop:

```
n-1 + n-2 + n-3 ...
```

Total:

```
O(n²)
```

Best case:

```
O(n²)
```

Worst case:

```
O(n²)
```

Selection sort **always scans the array fully**.

---

## Space Complexity

```
O(1)
```

No extra memory used.

Sorting happens **in-place**.

---

# Dry Run (All Cases)

Example:

```
[64, 25, 12, 22, 11]
```

### Iteration 1

Find minimum:

```
11
```

Swap with index 0

```
[11, 25, 12, 22, 64]
```

---

### Iteration 2

Find minimum in remaining:

```
12
```

Swap

```
[11, 12, 25, 22, 64]
```

---

### Iteration 3

Find minimum:

```
22
```

Swap

```
[11, 12, 22, 25, 64]
```

Sorted.

---

# Edge Cases

Single element

```
[5]
```

Already sorted.

---

Already sorted array

```
[1,2,3,4]
```

Still runs full algorithm.

---

All elements same

```
[7,7,7,7]
```

No change.

---

# How This Approach Handles the Problem

Each iteration places **one element into its correct position**.

After every pass:

```
sorted portion increases
unsorted portion decreases
```

---

# Does This Approach Fail?

Not logically.

But it is **inefficient for large arrays**.

For example:

```
n = 100000
```

Operations:

```
10^10 comparisons
```

Too slow.

---

# Why Selection Sort Is Important

Even though not used in production, it teaches:

1. Sorting fundamentals
2. Comparison based algorithms
3. Swap mechanics
4. Loop control

It is the base for understanding:

```
Bubble Sort
Insertion Sort
Merge Sort
Quick Sort
```

---
