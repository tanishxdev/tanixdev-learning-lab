# PROBLEM (Original Statement)

Given an array of integers and a target number `num`, return the **index** of `num` if it exists.
If not found, return `-1`.

---

## BREAKDOWN PROBLEM

### What is being asked?

- We need to **find a number inside an array**
- If found → return its **index**
- If not found → return `-1`

---

### Input:

- Array `arr`
- Target `num`

### Output:

- Index of `num` OR `-1`

---

### Example:

```id="n0f8ak"
arr = [1,2,3,4,5], num = 3
Output = 2
```

---

## CONSTRAINT UNDERSTANDING

- `1 ≤ n ≤ 10^5` → large size
- Array is **unsorted**
- Duplicates possible

---

### Impact on approach:

- Cannot use binary search (array not sorted)
- Cannot skip elements
- Must check **each element**

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Sabse basic thought:

> "Ek-ek element check karte jao jab tak mil na jaye"

Why this comes first?

- No structure in array
- No sorting
- Only safe option → check everything

---

## Thought Process (Step-wise)

1. Start from index `0`
2. Har element check karo
3. Agar element == num:
   - return index

4. Agar pura loop khatam ho jaye:
   - return `-1`

---

## Data Structure Choice

- Same array

### Why?

- No modification needed
- Only traversal

### Alternative?

- Hashing → possible but unnecessary for single query

---

## Pseudocode

```id="m3s9ld"
function linearSearch(arr, num):
    for i from 0 to n-1:
        if arr[i] == num:
            return i
    return -1
```

---

## Algorithm

1. Traverse array from left to right
2. Compare each element with target
3. If match → return index
4. If no match → return -1

---

## CODE (C++ and JavaScript)

### C++

#### V1 (Only Required Function)

```cpp id="8w4ftr"
int linearSearch(vector<int>& arr, int num) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == num) return i;
    }
    return -1;
}
```

---

#### V2 (Complete Program)

```cpp id="3l5qvj"
#include <bits/stdc++.h>
using namespace std;

int linearSearch(vector<int>& arr, int num) {

    // Traverse array
    for (int i = 0; i < arr.size(); i++) {

        // If element matches target
        if (arr[i] == num) {
            return i; // return index
        }
    }

    // If not found
    return -1;
}

int main() {

    vector<int> arr = {1,2,3,4,5};
    int num = 4;

    int result = linearSearch(arr, num);

    cout << result;
}
```

---

### JavaScript

#### V1

```javascript id="c4l7ws"
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}
```

---

#### V2

```javascript id="v0p8nd"
function linearSearch(arr, num) {
  // Traverse array
  for (let i = 0; i < arr.length; i++) {
    // Check match
    if (arr[i] === num) {
      return i;
    }
  }

  // Not found
  return -1;
}

// Test
console.log(linearSearch([1, 2, 3, 4, 5], 4));
```

---

## Time and Space Complexity

### Time Complexity

```id="2wzjpf"
O(n)
```

Why?

- Worst case: element not present → check all elements

---

### Space Complexity

```id="y7m3re"
O(1)
```

Why?

- No extra space used

---

## Dry Run (All Cases)

### Normal Case

```id="s8r3yo"
arr = [1,2,3,4,5], num = 4

i=0 → 1 != 4
i=1 → 2 != 4
i=2 → 3 != 4
i=3 → 4 == 4 → return 3
```

---

### Best Case

```id="p4x8mk"
Element at index 0 → O(1)
```

---

### Worst Case

```id="d2l9vs"
Element not present OR at last → O(n)
```

---

## Edge Cases

- Empty array → return -1
- Single element → check once
- Duplicates → return first occurrence
- Not found → return -1

---

## How This Approach Handles the Problem

- Checks all possibilities
- Guarantees correctness
- Works for unsorted arrays

---

## Does This Approach Fail?

### NO (for this problem)

---

### Important Insight

- This is **not actually "brute"**
- This is the **only valid approach**

---

### Why no better approach?

- Array is unsorted
- No structure to exploit
- Must check each element

---

# -------clear thinking-------

## Pattern Recognition Notes

- "Find element in unsorted array" → **Linear Search**
- No sorting → no binary search
- Single query → hashing not needed
- Always think:
  - Can I skip elements? → NO → linear scan

---
