# PROBLEM (Original Statement)

Implement **Insertion Sort** to sort an array in **ascending order**.

Insertion Sort builds the sorted array **one element at a time** by inserting each element into its correct position in the already sorted part of the array.

Example:

```
Input:
arr = [8,3,5,2]

Output:
[2,3,5,8]
```

---

# Topics / Patterns

## Topic

Sorting Algorithms (Basic Sorting)

## Patterns

### Pattern 1 — Sorted Prefix Pattern

At any moment the array is divided into:

```
Sorted Part | Unsorted Part
```

Example:

```
[3,8] | [5,2]
```

We insert the next element into the correct position in the sorted part.

---

### Pattern 2 — Shifting Pattern

Instead of swapping repeatedly like bubble sort, we **shift elements to make space**.

Example:

```
[3,8,5]

shift 8 right
insert 5
```

---

# BREAKDOWN PROBLEM

We have an unsorted array.

Example:

```
[8,3,5,2]
```

Goal:

```
Sort ascending
```

Idea:

Take elements one by one and insert them in the correct place.

Example:

```
8
```

Already sorted.

Next element:

```
3
```

Insert before 8.

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ n ≤ 10⁴
```

Insertion Sort complexity:

```
Worst case → O(n²)
Best case → O(n)
```

Properties:

| Property         | Value |
| ---------------- | ----- |
| Time Complexity  | O(n²) |
| Best Case        | O(n)  |
| Space Complexity | O(1)  |
| Stable           | Yes   |
| In-place         | Yes   |

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Imagine sorting playing cards in your hand.

When you pick a new card:

```
insert it into correct position
```

Example:

```
cards: 8 3 5
```

Insert 3 before 8.

---

## Thought Process (Step-wise)

Example:

```
[8,3,5,2]
```

Iteration 1:

```
[8]
```

Sorted.

Iteration 2:

Insert 3.

```
[3,8]
```

Iteration 3:

Insert 5.

```
[3,5,8]
```

Iteration 4:

Insert 2.

```
[2,3,5,8]
```

---

# Pseudocode

```
for i from 1 to n-1

    key = arr[i]
    j = i-1

    while j >= 0 and arr[j] > key

        arr[j+1] = arr[j]
        j--

    arr[j+1] = key
```

---

# Algorithm

Step 1
Start from second element.

Step 2
Store element as **key**.

Step 3
Compare with elements before it.

Step 4
Shift larger elements right.

Step 5
Insert key in correct position.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
void insertionSort(vector<int>& arr) {

    int n = arr.size();

    for(int i = 1; i < n; i++) {

        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key) {

            arr[j + 1] = arr[j];
            j--;

        }

        arr[j + 1] = key;
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

    vector<int> arr = {8,3,5,2};

    int n = arr.size();

    for(int i = 1; i < n; i++) {

        int key = arr[i];
        int j = i - 1;

        // shift larger elements
        while(j >= 0 && arr[j] > key) {

            arr[j + 1] = arr[j];
            j--;

        }

        // insert element
        arr[j + 1] = key;
    }

    cout << "Sorted array: ";

    for(int num : arr)
        cout << num << " ";

}
```

---

# Time and Space Complexity

## Worst Case

Example:

```
[5,4,3,2,1]
```

Every element shifts many times.

```
O(n²)
```

---

## Best Case

Example:

```
[1,2,3,4]
```

Only comparisons.

```
O(n)
```

---

## Space Complexity

```
O(1)
```

In-place sorting.

---

# Dry Run

Example:

```
[8,3,5,2]
```

Step 1

```
[8]
```

Step 2

Insert 3.

```
[3,8,5,2]
```

Step 3

Insert 5.

```
[3,5,8,2]
```

Step 4

Insert 2.

```
[2,3,5,8]
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

Already sorted

```
[1,2,3,4]
```

Fast execution.

---

All elements same

```
[7,7,7]
```

No shifts required.

---

# How This Approach Handles the Problem

It keeps growing the sorted portion of the array.

Each element is inserted into the correct location.

---

# Why This Is Important

Insertion Sort is important because:

1. It is used in **real libraries for small arrays**
2. It teaches **shifting instead of swapping**
3. It introduces the concept of **sorted prefix**

Example:

```
TimSort (Python / Java)
```

uses insertion sort for small chunks.

---

# Key Intuition Summary

Bubble Sort → push largest to end
Selection Sort → select smallest and place
Insertion Sort → insert element into sorted prefix

---
