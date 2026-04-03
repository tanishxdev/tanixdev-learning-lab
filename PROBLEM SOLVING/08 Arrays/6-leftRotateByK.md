# PROBLEM (Original Statement)

Given an array of integers, rotate the array by **k elements** either **left or right**.

---

# BREAKDOWN PROBLEM

## What is being asked?

We need to:

- Rotate array by **k steps**
- Direction:
  - LEFT
  - RIGHT

---

## Visual Understanding

### Right Rotation (k = 2)

```text
[1,2,3,4,5,6,7]

Step 1 → [7,1,2,3,4,5,6]
Step 2 → [6,7,1,2,3,4,5]
```

---

### Left Rotation (k = 2)

```text
[1,2,3,4,5,6]

Step 1 → [2,3,4,5,6,1]
Step 2 → [3,4,5,6,1,2]
```

---

## Input

- array `nums`
- integer `k`
- direction ("left" / "right")

## Output

- modified array

---

# CONSTRAINT UNDERSTANDING

- n can be large → O(N²) not allowed
- k can be > n → IMPORTANT

### Key Insight

```text
k = k % n
```

Because:

- rotating n times = same array

---

# BRUTE FORCE APPROACH

## First Thought Intuition

"Just rotate one-by-one k times"

Simple but costly.

---

## Thought Process

1. Repeat k times:
   - do single rotation (like previous problem)

---

## Pseudocode

```text
repeat k times:
    store first/last
    shift array
    place stored value
```

---

## CODE (C++)

### V1

```cpp
void rotateRight(vector<int>& nums, int k) {
    int n = nums.size();
    k = k % n;

    for(int step = 0; step < k; step++) {
        int last = nums[n-1];

        for(int i = n-1; i > 0; i--) {
            nums[i] = nums[i-1];
        }

        nums[0] = last;
    }
}
```

---

### V2 (Complete Program)

```cpp
#include<bits/stdc++.h>
using namespace std;

void rotateRight(vector<int>& nums, int k) {
    int n = nums.size();
    k = k % n;

    for(int step = 0; step < k; step++) {
        int last = nums[n-1]; // store last

        // shift right
        for(int i = n-1; i > 0; i--) {
            nums[i] = nums[i-1];
        }

        nums[0] = last; // place at front
    }
}

int main() {
    vector<int> nums = {1,2,3,4,5,6,7};
    int k = 2;

    rotateRight(nums, k);

    for(int x : nums) cout << x << " ";
}
```

---

## Time and Space Complexity

- TC → O(N \* K)
- SC → O(1)

---

## Dry Run

```text
k = 2

Step1 → [7,1,2,3,4,5,6]
Step2 → [6,7,1,2,3,4,5]
```

---

## Does This Approach Fail?

YES

### Why?

- If k = 10^5 → too slow

---

# BETTER APPROACH

## First Thought Intuition

"Instead of rotating k times, move blocks directly"

---

## Thought Process

### Right Rotation

1. Store last k elements
2. Shift rest right
3. Put stored at front

---

## Pseudocode

```text
temp = last k elements

shift remaining elements right

put temp at beginning
```

---

## CODE (C++)

### V1

```cpp
void rotateRight(int arr[], int n, int k) {
    k = k % n;

    int temp[k];

    // store last k
    for(int i = 0; i < k; i++) {
        temp[i] = arr[n-k+i];
    }

    // shift
    for(int i = n-k-1; i >= 0; i--) {
        arr[i+k] = arr[i];
    }

    // place temp
    for(int i = 0; i < k; i++) {
        arr[i] = temp[i];
    }
}
```

---

### V2 (Complete)

```cpp
#include<bits/stdc++.h>
using namespace std;

void rotateRight(int arr[], int n, int k) {
    k = k % n;

    int temp[k];

    // Step 1: store last k elements
    for(int i = 0; i < k; i++) {
        temp[i] = arr[n-k+i];
    }

    // Step 2: shift rest to right
    for(int i = n-k-1; i >= 0; i--) {
        arr[i+k] = arr[i];
    }

    // Step 3: copy temp to front
    for(int i = 0; i < k; i++) {
        arr[i] = temp[i];
    }
}

int main() {
    int arr[] = {1,2,3,4,5,6,7};
    int n = 7, k = 2;

    rotateRight(arr, n, k);

    for(int i=0;i<n;i++) cout<<arr[i]<<" ";
}
```

---

## Time and Space Complexity

- TC → O(N)
- SC → O(K)

---

## Does This Approach Fail?

YES

### Why?

- Extra space used → not optimal

---

# OPTIMAL APPROACH (REVERSAL ALGORITHM)

## First Thought Intuition

"Rotation is just rearrangement of blocks"

Instead of moving elements → **reverse blocks**

---

## Thought Process

### RIGHT ROTATION

Original:

```text
[1 2 3 4 5 6 7]
```

Split:

```text
[1 2 3 4 5] + [6 7]
```

Now reverse logic:

```text
Step1: reverse whole
→ [7 6 5 4 3 2 1]

Step2: reverse first k
→ [6 7 | 5 4 3 2 1]

Step3: reverse remaining
→ [6 7 | 1 2 3 4 5]
```

---

## Pseudocode

```text
k = k % n

reverse(0, n-1)
reverse(0, k-1)
reverse(k, n-1)
```

---

## Algorithm

1. Normalize k
2. Reverse whole array
3. Reverse first k
4. Reverse remaining

---

## CODE (C++)

### V1

```cpp
void reverseArr(vector<int>& nums, int l, int r) {
    while(l < r) {
        swap(nums[l], nums[r]);
        l++;
        r--;
    }
}

void rotateRight(vector<int>& nums, int k) {
    int n = nums.size();
    k = k % n;

    reverseArr(nums, 0, n-1);
    reverseArr(nums, 0, k-1);
    reverseArr(nums, k, n-1);
}
```

---

### V2 (Complete Program)

```cpp
#include<bits/stdc++.h>
using namespace std;

// Helper function to reverse part of array
void reverseArr(vector<int>& nums, int l, int r) {
    while(l < r) {
        swap(nums[l], nums[r]);
        l++;
        r--;
    }
}

void rotateRight(vector<int>& nums, int k) {
    int n = nums.size();
    k = k % n;

    // Step 1: reverse whole array
    reverseArr(nums, 0, n-1);

    // Step 2: reverse first k elements
    reverseArr(nums, 0, k-1);

    // Step 3: reverse remaining
    reverseArr(nums, k, n-1);
}

int main() {
    vector<int> nums = {1,2,3,4,5,6,7};
    int k = 2;

    rotateRight(nums, k);

    for(int x : nums) cout << x << " ";
}
```

---

## Time and Space Complexity

- TC → O(N)
- SC → O(1)

---

## Dry Run

```text
nums = [1,2,3,4,5,6,7]

reverse all:
[7,6,5,4,3,2,1]

reverse first k=2:
[6,7,5,4,3,2,1]

reverse rest:
[6,7,1,2,3,4,5]
```

---

## Edge Cases

- k = 0 → no change
- k > n → handled using %
- n = 1 → same array

---

## How This Approach Handles the Problem

- Uses **reversal symmetry**
- No shifting needed
- No extra memory

---

## Why This Is Optimal

- O(N) minimum traversal
- O(1) space
- Clean mathematical transformation

---

# FINAL PATTERN RECOGNITION

## Pattern Type

**Array Rotation → Reversal Pattern**

---

## Key Signal

If problem says:

- rotate by k
- shift k times

→ THINK:

```text
REVERSE METHOD
```

---

## Core Formula

### RIGHT ROTATE

```text
reverse(all)
reverse(0 → k-1)
reverse(k → n-1)
```

---

### LEFT ROTATE

```text
reverse(0 → k-1)
reverse(k → n-1)
reverse(all)
```

---

## Mental Model

```text
Array = A + B

Right rotate:
→ B + A

Reversal is just a trick to convert:
A+B → B+A
```

---

## Interview Insight

- This is **TOP 10 array question**
- Asked in:
  - Google
  - Amazon
  - Microsoft

---
