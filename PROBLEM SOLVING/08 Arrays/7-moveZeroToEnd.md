Following your **STRICT template + rules**
Using your notes **without modifying logic/code/pseudocode**
Starting with **BRUTE FORCE ONLY**

---

# PROBLEM (Original Statement)

Given an array of integers, move **all `0`s to the end** while **preserving the relative order** of non-zero elements.
Do it **in-place** (without extra array).

---

## BREAKDOWN PROBLEM

### What is being asked?

We need to rearrange the array such that:

- All non-zero elements stay in same order
- All zeros move to the end

---

### Input:

- Integer array `arr`

### Output:

- Same array modified (in-place ideally)

---

### Example:

```
arr = [1, 0, 2, 3, 0, 4, 0, 1]
Output = [1, 2, 3, 4, 1, 0, 0, 0]
```

---

## CONSTRAINT UNDERSTANDING

- `1 ≤ n ≤ 10^5` → large input → need efficient solution
- Values can be negative, positive, zero
- Order of non-zero must remain SAME → very important

---

### Impact on approach:

- Cannot sort
- Cannot reorder freely
- Stability required
- In-place preferred

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Sabse pehla simple thought:

> "Non-zero elements alag nikaal lo, fir array me wapas daal do, baaki jagah 0 bhar do"

Why this comes first?

- Easy to visualize
- No risk of order breaking
- Direct filtering idea

---

## Thought Process (Step-wise)

1. Ek temporary array `temp` bana lo
2. Saare non-zero elements collect karo (same order)
3. Original array ke start me copy karo
4. Remaining positions me `0` fill karo

---

## Data Structure Choice

- `vector / array (temp)`

### Why?

- Order preserve karna hai → sequential storage needed

### Alternative?

- In-place shifting → complex for beginner
- So temp easiest

---

## Pseudocode

```
function brute(arr):
    temp = []

    for x in arr:
        if x != 0:
            temp.push(x)

    for i from 0 to temp.size()-1:
        arr[i] = temp[i]

    for i from temp.size() to n-1:
        arr[i] = 0
```

---

## Algorithm

1. Create temp array
2. Traverse original array
3. Store all non-zero elements
4. Copy temp into original array
5. Fill rest with zero

---

## CODE (C++ and JavaScript)

### C++

#### V1 (Only Required Function)

```cpp
void brute(vector<int>& arr) {
    vector<int> temp;

    // Step 1: Collect non-zero elements
    for (int x : arr) {
        if (x != 0) temp.push_back(x);
    }

    // Step 2: Copy back to original array
    for (int i = 0; i < temp.size(); i++) {
        arr[i] = temp[i];
    }

    // Step 3: Fill remaining with zero
    for (int i = temp.size(); i < arr.size(); i++) {
        arr[i] = 0;
    }
}
```

---

#### V2 (Complete Program)

```cpp
#include <bits/stdc++.h>
using namespace std;

void brute(vector<int>& arr) {

    vector<int> temp;

    // Step 1: Collect non-zero elements
    for (int x : arr) {
        if (x != 0) {
            temp.push_back(x);  // store only non-zero
        }
    }

    // Step 2: Place non-zero elements back
    for (int i = 0; i < temp.size(); i++) {
        arr[i] = temp[i];
    }

    // Step 3: Fill remaining positions with zero
    for (int i = temp.size(); i < arr.size(); i++) {
        arr[i] = 0;
    }
}

int main() {
    vector<int> arr = {1,0,2,3,0,4,0,1};

    brute(arr);

    for (int x : arr) cout << x << " ";
}
```

---

### JavaScript

#### V1

```javascript
function brute(arr) {
  let temp = [];

  // Step 1: collect non-zero
  for (let x of arr) {
    if (x !== 0) temp.push(x);
  }

  // Step 2: copy back
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }

  // Step 3: fill zeros
  for (let i = temp.length; i < arr.length; i++) {
    arr[i] = 0;
  }
}
```

---

#### V2

```javascript
function brute(arr) {
  let temp = [];

  // Collect non-zero elements
  for (let x of arr) {
    if (x !== 0) {
      temp.push(x);
    }
  }

  // Copy back to original array
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }

  // Fill remaining with zero
  for (let i = temp.length; i < arr.length; i++) {
    arr[i] = 0;
  }

  console.log(arr);
}

// Test
brute([1, 0, 2, 3, 0, 4, 0, 1]);
```

---

## Time and Space Complexity

### Time Complexity

```
O(n)
```

Why?

- One pass to collect → O(n)
- One pass to copy → O(n)
- One pass to fill → O(n)

Total = O(n)

---

### Space Complexity

```
O(n)
```

Why?

- Temp array stores up to all elements

---

## Dry Run (All Cases)

### Normal Case

```
arr = [1,0,2,3,0,4,0,1]

temp = [1,2,3,4,1]

after copy:
[1,2,3,4,1,4,0,1]

after fill:
[1,2,3,4,1,0,0,0]
```

---

### Best Case

```
No zeros → still traverse → O(n)
```

---

### Worst Case

```
All zeros → temp empty → fill all zeros
```

---

## Edge Cases

- Empty array → works
- All zeros → works
- No zeros → works
- Single element → works

---

## How This Approach Handles the Problem

- Order preserved
- Simple logic
- Easy implementation

---

## Does This Approach Fail?

### YES

---

### Where it fails:

- Uses extra space

---

### Why it fails:

- Temp array created → violates in-place constraint

---

### Which constraint breaks:

> "Do it in-place (without extra array)"

---

### Core Bottleneck

> Space Complexity = O(n)

---

### Why we need better approach

We want:

- Same result
- No extra space
- In-place shifting

---

# -------clear thinking-------

## Pattern Recognition Notes

- "Move something to end" → think **filter + rebuild**
- First approach → always **extra array**
- Optimization direction → **in-place shifting / two pointers**

---

# BETTER APPROACH

## First Thought Intuition

Ab hum sochte hain:

> "Kya hum bina extra array ke same kaam kar sakte hain?"

Core idea:

> "Non-zero elements ko front me place karte jao, aur end me zeros bhar do"

---

### Key Insight

- Hume order maintain karna hai
- Iska matlab: **left to right scan**
- Har non-zero ko correct jagah pe place karna hai

---

### Mental Model

Socho:

> "Main ek pointer rakhta hoon jaha next non-zero aayega"

- `i` → next position to place non-zero
- `j` → current traversal pointer

---

## Thought Process (Step-wise)

1. Start with `i = 0`
2. Traverse array using `j`
3. Jab bhi `arr[j] != 0`:
   - usko `arr[i]` pe place karo
   - `i++`

4. End me:
   - `i` se end tak sabko `0` fill karo

---

### Important Observation

- Hum overwrite kar rahe hain
- Par order safe hai because:
  - left to right process ho raha hai

---

## Data Structure Choice

- Same array use ho raha hai

### Why?

- In-place requirement
- No extra memory

### Alternative?

- Temp array → rejected

---

## Pseudocode

```id="h1tz0r"
function optimal(arr):
    i = 0

    for j from 0 to n-1:
        if arr[j] != 0:
            arr[i] = arr[j]
            i++

    while i < n:
        arr[i] = 0
        i++
```

---

## Algorithm

1. Initialize pointer `i = 0`
2. Traverse array using `j`
3. If element non-zero:
   - place at index `i`
   - increment `i`

4. Fill remaining indices with `0`

---

## CODE (C++ and JavaScript)

### C++

#### V1 (Only Required Function)

```cpp id="blx6um"
void moveZeroes(vector<int>& nums) {
    int i = 0;

    // Step 1: Move non-zero elements forward
    for (int j = 0; j < nums.size(); j++) {
        if (nums[j] != 0) {
            nums[i++] = nums[j];
        }
    }

    // Step 2: Fill remaining with zeros
    while (i < nums.size()) {
        nums[i++] = 0;
    }
}
```

---

#### V2 (Complete Program)

```cpp id="b7jv48"
#include <bits/stdc++.h>
using namespace std;

void moveZeroes(vector<int>& nums) {

    int i = 0; // position to place next non-zero

    // Traverse array
    for (int j = 0; j < nums.size(); j++) {

        // If current element is non-zero
        if (nums[j] != 0) {

            nums[i] = nums[j]; // place it at correct position
            i++;               // move pointer forward
        }
    }

    // Fill remaining positions with zero
    while (i < nums.size()) {
        nums[i] = 0;
        i++;
    }
}

int main() {
    vector<int> arr = {1,0,2,3,0,4,0,1};

    moveZeroes(arr);

    for (int x : arr) cout << x << " ";
}
```

---

### JavaScript

#### V1

```javascript id="j7y3ci"
function moveZeroes(arr) {
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      arr[i++] = arr[j];
    }
  }

  while (i < arr.length) {
    arr[i++] = 0;
  }
}
```

---

#### V2

```javascript id="icm2cl"
function moveZeroes(arr) {
  let i = 0; // next position for non-zero

  // Step 1: Move non-zero elements
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      arr[i] = arr[j];
      i++;
    }
  }

  // Step 2: Fill zeros
  while (i < arr.length) {
    arr[i] = 0;
    i++;
  }

  console.log(arr);
}

// Test
moveZeroes([1, 0, 2, 3, 0, 4, 0, 1]);
```

---

## Time and Space Complexity

### Time Complexity

```id="9f6c1m"
O(n)
```

Why?

- Single traversal → O(n)
- Filling zeros → O(n)
- Combined → O(n)

---

### Space Complexity

```id="b0k4mz"
O(1)
```

Why?

- No extra data structure used

---

## Dry Run (All Cases)

### Normal Case

```id="6hwnx4"
arr = [1,0,2,3,0,4,0,1]

i = 0

j=0 → 1 → place → arr[0]=1 → i=1
j=1 → 0 → skip
j=2 → 2 → arr[1]=2 → i=2
j=3 → 3 → arr[2]=3 → i=3
j=4 → 0 → skip
j=5 → 4 → arr[3]=4 → i=4
j=6 → 0 → skip
j=7 → 1 → arr[4]=1 → i=5

Now fill zeros:
i=5 → 0
i=6 → 0
i=7 → 0

Final:
[1,2,3,4,1,0,0,0]
```

---

### Best Case

```id="zv2b7h"
No zeros → only overwrite → still O(n)
```

---

### Worst Case

```id="1o9m6r"
All zeros → fill entire array → O(n)
```

---

## Edge Cases

- No zeros → unchanged
- All zeros → unchanged
- Single element → works
- Empty → works

---

## How This Approach Handles the Problem

- Maintains order
- Uses in-place overwrite
- Efficient and clean

---

## Does This Approach Fail?

### NO

---

### Why it does NOT fail:

- Meets all constraints:
  - In-place
  - O(n)
  - Order preserved

---

# -------clear thinking-------

## Pattern Recognition Notes

- "Move X to end while preserving order" → **Two Pointer Pattern**
- Use:
  - One pointer → write position
  - One pointer → traversal

- Avoid swap if overwrite works

---
