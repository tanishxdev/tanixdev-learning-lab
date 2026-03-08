# Bubble Sort

We will again follow your **exact DSA template structure**.

---

# PROBLEM (Original Statement)

Implement **Bubble Sort** to sort an array in **ascending order**.

Bubble Sort repeatedly compares **adjacent elements** and swaps them if they are in the wrong order.

Example:

```
Input:
arr = [5,1,4,2,8]

Output:
[1,2,4,5,8]
```

---

# Topics / Patterns

## Topic

Sorting Algorithms (Basic Sorting)

## Patterns

### Pattern 1 — Adjacent Comparison Pattern

Compare:

```
arr[j] and arr[j+1]
```

Swap if:

```
arr[j] > arr[j+1]
```

---

### Pattern 2 — Largest Element Moves to End

After every pass:

```
largest element "bubbles" to the end
```

Example:

```
[5,1,4,2,8]

pass1 → 8 moves to last
pass2 → 5 moves to correct place
```

---

# BREAKDOWN PROBLEM

We have an unsorted array.

Example:

```
[5,1,4,2,8]
```

Goal:

```
Sort ascending
```

Key idea:

Compare neighboring elements:

```
(5,1)
(1,4)
(4,2)
(2,8)
```

Swap if order incorrect.

---

# CONSTRAINT UNDERSTANDING

Typical:

```
1 ≤ n ≤ 10^4
```

Bubble Sort complexity:

```
O(n²)
```

Not suitable for very large arrays.

Properties:

| Property         | Value |
| ---------------- | ----- |
| Time Complexity  | O(n²) |
| Space Complexity | O(1)  |
| Stable           | Yes   |
| In-place         | Yes   |

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Idea:

Keep comparing neighbors and swapping.

After one full pass:

```
largest element reaches the end
```

Then ignore last element and repeat.

---

## Thought Process (Step-wise)

Example:

```
[5,1,4,2,8]
```

Pass 1:

```
5 1 swap → [1,5,4,2,8]
5 4 swap → [1,4,5,2,8]
5 2 swap → [1,4,2,5,8]
5 8 no swap
```

Largest element now fixed.

---

## Pseudocode

```
for i from 0 to n-1

    for j from 0 to n-i-2

        if arr[j] > arr[j+1]
            swap(arr[j], arr[j+1])
```

---

## Algorithm

1. Traverse array multiple times
2. Compare adjacent elements
3. Swap if wrong order
4. After each pass, largest element reaches end

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
void bubbleSort(vector<int>& arr) {

    int n = arr.size();

    for(int i = 0; i < n - 1; i++) {

        for(int j = 0; j < n - i - 1; j++) {

            if(arr[j] > arr[j + 1]) {

                swap(arr[j], arr[j + 1]);

            }
        }
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

    vector<int> arr = {5,1,4,2,8};

    int n = arr.size();

    for(int i = 0; i < n - 1; i++) {

        for(int j = 0; j < n - i - 1; j++) {

            if(arr[j] > arr[j + 1]) {

                swap(arr[j], arr[j + 1]);

            }

        }
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

Worst case:

```
O(n²)
```

Example:

```
[5,4,3,2,1]
```

Many swaps needed.

---

Best case:

```
O(n²)
```

Even if sorted, algorithm still runs loops.

(Optimized version improves this)

---

## Space Complexity

```
O(1)
```

Sorting done in-place.

---

# Dry Run

Example:

```
[5,1,4,2,8]
```

Pass 1:

```
1 5 4 2 8
1 4 5 2 8
1 4 2 5 8
1 4 2 5 8
```

Pass 2:

```
1 4 2 5 8
1 2 4 5 8
```

Pass 3:

```
1 2 4 5 8
```

Sorted.

---

# Edge Cases

Single element

```
[7]
```

Already sorted.

---

Already sorted

```
[1,2,3,4]
```

Still runs loops.

---

All elements same

```
[5,5,5,5]
```

No swaps needed.

---

# How This Approach Handles the Problem

Each pass pushes the **largest unsorted element to the end**.

Eventually the array becomes sorted.

---

# Does This Approach Fail?

Not logically.

But performance problem exists.

For large arrays:

```
n = 100000
```

Operations:

```
10¹⁰ comparisons
```

Too slow.

---

# Important Interview Improvement (Better Bubble Sort)

We add **swap flag optimization**.

If no swaps happen in a pass:

```
array already sorted
```

Stop early.

---
