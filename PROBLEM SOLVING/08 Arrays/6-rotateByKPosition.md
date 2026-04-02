# PROBLEM (Original Statement)

Given an array, rotate the array to the left or right by `k` steps.

- Right rotation → shift elements towards right
- Left rotation → shift elements towards left

---

## BREAKDOWN PROBLEM

### What is being asked?

We need to rotate an array by `k` positions.

### Input:

- Array `arr`
- Integer `k`

### Output:

- Modified array after rotation

### Example:

```
arr = [10,20,30,40,50], k = 2

Right Rotation → [40,50,10,20,30]
Left Rotation  → [30,40,50,10,20]
```

---

## CONSTRAINT UNDERSTANDING

- `n` = size of array
- `k` can be **greater than n**
  → So we use `k % n`
- Array can be empty

### Impact:

- Need to handle `k > n`
- Avoid unnecessary rotations
- Try to optimize space if possible

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Sabse pehla natural thought:

> "Jo elements move ho rahe hain unko temporarily store kar lo, phir baaki shift kar do"

Why this comes first?

- Simple thinking
- Direct simulation
- Easy to visualize

---

## Thought Process (Step-wise)

### Right Rotation

1. Last `k` elements important hain
2. Unko temp array me store karo
3. Baaki elements ko right shift karo
4. Temp elements ko front me daal do

---

### Left Rotation

1. First `k` elements important hain
2. Unko temp me store karo
3. Remaining elements ko left shift karo
4. Temp ko end me daal do

---

## Pseudocode

### Right Rotation

```
k = k % n
store last k elements in temp

for i from n-1 to k:
    arr[i] = arr[i-k]

for i from 0 to k-1:
    arr[i] = temp[i]
```

---

### Left Rotation

```
k = k % n
store first k elements in temp

for i from 0 to n-k-1:
    arr[i] = arr[i+k]

for i from 0 to k-1:
    arr[n-k+i] = temp[i]
```

---

## Algorithm

### Right Rotation

1. Normalize k
2. Store last k elements
3. Shift rest to right
4. Insert temp at front

### Left Rotation

1. Normalize k
2. Store first k elements
3. Shift rest to left
4. Insert temp at end

---

## CODE (C++ and JavaScript)

### C++

#### V1 (Only Required Function)

```cpp
void rotateRightBrute(vector<int>& arr, int k) {
    int n = arr.size();
    if (n == 0) return;

    k %= n;
    if (k == 0) return;

    vector<int> temp(k);

    // Store last k elements
    for (int i = 0; i < k; i++) {
        temp[i] = arr[n - k + i];
    }

    // Shift elements to right
    for (int i = n - 1; i >= k; i--) {
        arr[i] = arr[i - k];
    }

    // Place temp at front
    for (int i = 0; i < k; i++) {
        arr[i] = temp[i];
    }
}
```

---

#### V2 (Complete Program)

```cpp
#include <bits/stdc++.h>
using namespace std;

void rotateRightBrute(vector<int>& arr, int k) {
    int n = arr.size();

    // Edge case: empty array
    if (n == 0) return;

    // Normalize k
    k %= n;

    // If k becomes 0, no rotation needed
    if (k == 0) return;

    // Temp array to store last k elements
    vector<int> temp(k);

    // Step 1: Copy last k elements
    for (int i = 0; i < k; i++) {
        temp[i] = arr[n - k + i];
    }

    // Step 2: Shift remaining elements to right
    for (int i = n - 1; i >= k; i--) {
        arr[i] = arr[i - k];
    }

    // Step 3: Place temp elements at front
    for (int i = 0; i < k; i++) {
        arr[i] = temp[i];
    }
}

int main() {
    vector<int> arr = {10, 20, 30, 40, 50};
    int k = 2;

    rotateRightBrute(arr, k);

    for (int x : arr) cout << x << " ";
}
```

---

### JavaScript

#### V1

```javascript
function rotateRightBrute(arr, k) {
  let n = arr.length;
  if (n === 0) return;

  k = k % n;
  if (k === 0) return;

  let temp = new Array(k);

  // Store last k elements
  for (let i = 0; i < k; i++) {
    temp[i] = arr[n - k + i];
  }

  // Shift elements
  for (let i = n - 1; i >= k; i--) {
    arr[i] = arr[i - k];
  }

  // Place temp
  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }
}
```

---

#### V2

```javascript
function rotateRightBrute(arr, k) {
  let n = arr.length;

  if (n === 0) return;

  k = k % n;
  if (k === 0) return;

  let temp = new Array(k);

  // Step 1: Store last k elements
  for (let i = 0; i < k; i++) {
    temp[i] = arr[n - k + i];
  }

  // Step 2: Shift elements right
  for (let i = n - 1; i >= k; i--) {
    arr[i] = arr[i - k];
  }

  // Step 3: Insert temp
  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }

  console.log(arr);
}

// Test
rotateRightBrute([10, 20, 30, 40, 50], 2);
```

---

## Time and Space Complexity

### Time Complexity

- Copy → O(k)
- Shift → O(n-k)
- Insert → O(k)

Total:

```
O(n)
```

Why?
Because every element is touched at least once.

---

### Space Complexity

```
O(k)
```

Why?
Because we use temp array of size k.

---

## Dry Run (All Cases)

### Normal Case

```
arr = [10,20,30,40,50], k = 2

temp = [40,50]

After shift:
[10,20,10,20,30]

After insert:
[40,50,10,20,30]
```

---

### Best Case

```
k = 0 → no work → O(1)
```

---

### Worst Case

```
k = n → k % n = 0 → no rotation
But if k ~ n/2 → full shifting happens
```

---

## Edge Cases

- Empty array → handled
- k = 0 → no rotation
- k > n → handled via k % n
- n = 1 → no change

---

## How This Approach Handles the Problem

- Direct simulation of rotation
- No complex logic
- Easy to understand and implement

---

## Does This Approach Fail?

### YES

#### Where it fails:

- Uses extra space O(k)

#### Why it fails:

- We create temp array
- Not in-place

#### Constraint breaking:

- If problem demands **O(1) space**
- This solution is not acceptable

---

### Core Bottleneck

> Extra space usage

---

### Why we need better approach

We want:

- Same result
- Without extra space
- In-place modification

---

# -------clear thinking-------

## Pattern Recognition Notes

- Rotation problems = **movement + preservation**
- First instinct → **store + shift**
- Optimization direction → **in-place transformation**
- Key idea → "Can we rearrange without extra memory?"

---

# BETTER APPROACH

## First Thought Intuition

Ab hum sochte hain:

> "Kya hum bina extra array ke same kaam kar sakte hain?"

Observation:

- Rotation = rearrangement
- Rearrangement = reversal se achieve ho sakta hai

### Key Insight

Instead of shifting elements one by one:

> "Reverse karke bhi rotation achieve ho sakta hai"

Why this idea comes?

- Reverse is **in-place**
- No extra memory needed
- Powerful transformation

---

## Thought Process (Step-wise)

### Right Rotation Example

```id="s6f2lw"
arr = [10,20,30,40,50], k = 2
Expected → [40,50,10,20,30]
```

### Step-by-step thinking:

1. Break array into 2 parts:
   - First part → `[10,20,30]`
   - Second part → `[40,50]`

2. Reverse both parts:

```id="a8m7zp"
[30,20,10]  [50,40]
```

3. Reverse whole array:

```id="kl3e1q"
[40,50,10,20,30]
```

---

### Left Rotation Thinking

```id="p2f0lm"
arr = [10,20,30,40,50], k = 2
Expected → [30,40,50,10,20]
```

1. Split:
   - `[10,20]`
   - `[30,40,50]`

2. Reverse both:

```id="n5j4wy"
[20,10] [50,40,30]
```

3. Reverse whole:

```id="y1v0bc"
[30,40,50,10,20]
```

---

## Data Structure Choice

- Using same array
- No extra DS

### Why?

- Reverse works in-place
- Swap operation enough

### Alternative?

- Temp array → rejected (extra space)

---

## Pseudocode

### Right Rotation

```id="o7t8yz"
k = k % n

reverse(n-k to n-1)
reverse(0 to n-k-1)
reverse(0 to n-1)
```

---

### Left Rotation

```id="1u6bgh"
k = k % n

reverse(0 to k-1)
reverse(k to n-1)
reverse(0 to n-1)
```

---

## Algorithm

### Right Rotation

1. Normalize k
2. Reverse last k elements
3. Reverse first n-k elements
4. Reverse entire array

---

### Left Rotation

1. Normalize k
2. Reverse first k elements
3. Reverse remaining elements
4. Reverse whole array

---

## CODE (C++ and JavaScript)

### C++

#### V1 (Only Required Function)

```cpp id="ksm2xv"
void rotate(vector<int>& arr, int k) {
    int n = arr.size();
    if (n == 0) return;

    k %= n;
    if (k == 0) return;

    // Reverse last k elements
    reverse(arr.begin() + (n - k), arr.end());

    // Reverse first n-k elements
    reverse(arr.begin(), arr.begin() + (n - k));

    // Reverse whole array
    reverse(arr.begin(), arr.end());
}
```

---

#### V2 (Complete Program)

```cpp id="wq9yru"
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    // Helper function to reverse part of array
    void reverseArray(vector<int>& arr, int start, int end) {
        // Two pointer approach
        while (start < end) {
            swap(arr[start], arr[end]);
            start++;
            end--;
        }
    }

    void rotate(vector<int>& arr, int k) {
        int n = arr.size();

        // Edge case
        if (n == 0) return;

        // Normalize k
        k %= n;

        // No rotation needed
        if (k == 0) return;

        // Step 1: Reverse last k elements
        reverseArray(arr, n - k, n - 1);

        // Step 2: Reverse first n-k elements
        reverseArray(arr, 0, n - k - 1);

        // Step 3: Reverse entire array
        reverseArray(arr, 0, n - 1);
    }
};

int main() {
    vector<int> arr = {10,20,30,40,50};
    int k = 2;

    Solution s;
    s.rotate(arr, k);

    for (int x : arr) cout << x << " ";
}
```

---

### JavaScript

#### V1

```javascript id="h6w9ql"
function rotate(arr, k) {
  let n = arr.length;
  if (n === 0) return;

  k = k % n;
  if (k === 0) return;

  // Reverse helper
  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  reverse(arr, n - k, n - 1);
  reverse(arr, 0, n - k - 1);
  reverse(arr, 0, n - 1);
}
```

---

#### V2

```javascript id="k3h9vn"
function rotate(arr, k) {
  let n = arr.length;

  if (n === 0) return;

  k = k % n;
  if (k === 0) return;

  // Reverse helper
  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  // Step 1
  reverse(arr, n - k, n - 1);

  // Step 2
  reverse(arr, 0, n - k - 1);

  // Step 3
  reverse(arr, 0, n - 1);

  console.log(arr);
}

// Test
rotate([10, 20, 30, 40, 50], 2);
```

---

## Time and Space Complexity

### Time Complexity

```id="iz7l8a"
O(n)
```

Why?

- Each reverse → O(n)
- Total 3 reversals → still O(n)

---

### Space Complexity

```id="3mn8dk"
O(1)
```

Why?

- In-place swapping
- No extra array

---

## Dry Run (All Cases)

### Normal Case

```id="pr4y1s"
arr = [10,20,30,40,50], k = 2

Step 1: reverse last 2
[10,20,30,50,40]

Step 2: reverse first 3
[30,20,10,50,40]

Step 3: reverse all
[40,50,10,20,30]
```

---

### Best Case

```id="t5m1gq"
k = 0 → no operations
```

---

### Worst Case

```id="g2k7xr"
Full 3 reversals → still O(n)
```

---

## Edge Cases

- k = 0 → handled
- k > n → handled
- n = 1 → no change
- empty array → handled

---

## How This Approach Handles the Problem

- Uses mathematical rearrangement
- No extra space
- Efficient transformation using reverse

---

## Does This Approach Fail?

### NO (Practically Optimal)

But technically:

#### Minor limitation:

- Requires understanding of reverse trick
- Not intuitive for beginners

---

### Conclusion

- No extra space
- Linear time
- Works for all constraints

---

# -------clear thinking-------

## Pattern Recognition Notes

- Rotation → can be converted to **reverse operations**
- Whenever shifting looks costly → think **reverse / swap**
- In-place optimization → **two pointers + reverse**

---
