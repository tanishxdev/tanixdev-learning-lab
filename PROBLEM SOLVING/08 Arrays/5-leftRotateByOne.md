# PROBLEM (Original Statement)

Given an integer array `nums`, rotate the array to the **left by one position**.

You must modify the array in-place (no return required).

---

# BREAKDOWN PROBLEM

## What is being asked?

- Shift every element **one step left**
- First element goes to the **end**

## Example Thinking

```
[1, 2, 3, 4, 5]

Step:
1 → goes to end
others shift left

Result:
[2, 3, 4, 5, 1]
```

## Input

- Array of integers

## Output

- Same array modified

---

# CONSTRAINT UNDERSTANDING

Typical constraints (assumed):

- 1 ≤ n ≤ 10^5
- Must be efficient
- In-place preferred

### Impact on Approach

- Brute (extra array) → OK but uses space
- Optimal → must be O(1) space

---

# BRUTE FORCE APPROACH

## First Thought Intuition

"Let’s create a new array and shift everything there"

This is natural because:

- Easy to visualize
- No overwriting issues

---

## Thought Process (Step-wise)

1. Create temp array
2. Move elements:
   - arr[i] → temp[i-1]

3. Put first element at last
4. Copy back

---

## Pseudocode

```
create temp[n]

for i = 1 → n-1
    temp[i-1] = arr[i]

temp[n-1] = arr[0]

copy temp → arr
```

---

## Algorithm

1. Store shifted values in temp
2. Handle last element separately
3. Copy back to original array

---

## CODE (C++)

### V1 (Only Required Function)

```cpp
void leftRotateByOne(int arr[], int n) {
    int temp[n];

    for (int i = 1; i < n; i++) {
        temp[i - 1] = arr[i];
    }

    temp[n - 1] = arr[0];

    // Copy back
    for (int i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
}
```

---

### V2 (Complete Program)

```cpp
#include<bits/stdc++.h>
using namespace std;

void leftRotateByOne(int arr[], int n) {
    int temp[n]; // temporary array to store result

    // Shift elements left
    for (int i = 1; i < n; i++) {
        temp[i - 1] = arr[i]; // move element one step left
    }

    temp[n - 1] = arr[0]; // first element goes to last

    // Copy temp back to original array
    for (int i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;

    leftRotateByOne(arr, n);

    // Print result
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
```

---

## Time and Space Complexity

- TC → O(N)
- SC → O(N)

Why?

- One loop for shifting
- Extra array used

---

## Dry Run (All Cases)

### Normal Case

```
[1,2,3,4,5]

temp:
[2,3,4,5,_]

last:
[2,3,4,5,1]
```

### Best Case

- n = 1 → same array

### Worst Case

- large n → still O(N)

---

## Edge Cases

- n = 1 → no change
- negative numbers → no issue
- duplicates → works fine

---

## How This Approach Handles the Problem

- Avoids overwriting using temp
- Clean and simple logic

---

## Does This Approach Fail?

YES

### Why?

- Uses extra space O(N)

### Constraint Broken

- Not in-place

→ Move to better approach

---

# BETTER APPROACH

(No significant improvement beyond brute except minor optimizations)

We directly move to optimal

---

# OPTIMAL APPROACH

## First Thought Intuition

"Can I shift elements inside same array without extra space?"

Key idea:

- Save first element
- Shift everything left
- Put saved at end

---

## Thought Process (Step-wise)

1. Store arr[0]
2. Shift elements left:
   - arr[i] → arr[i-1]

3. Put stored element at last

---

## Pseudocode

```
temp = arr[0]

for i = 1 → n-1
    arr[i-1] = arr[i]

arr[n-1] = temp
```

---

## Algorithm

1. Store first element
2. Shift elements left
3. Place stored value at end

---

## CODE (C++)

### V1 (Only Required Function)

```cpp
void leftRotateByOne(vector<int>& nums) {
    int temp = nums[0];

    for (int i = 1; i < nums.size(); i++) {
        nums[i - 1] = nums[i];
    }

    nums[nums.size() - 1] = temp;
}
```

---

### V2 (Complete Program)

```cpp
#include<bits/stdc++.h>
using namespace std;

void leftRotateByOne(vector<int>& nums) {
    // Step 1: Store first element
    int temp = nums[0];

    // Step 2: Shift elements left
    for (int i = 1; i < nums.size(); i++) {
        nums[i - 1] = nums[i];
        // Each element moves one step left
    }

    // Step 3: Place first element at end
    nums[nums.size() - 1] = temp;
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};

    leftRotateByOne(nums);

    // Print result
    for (int i = 0; i < nums.size(); i++) {
        cout << nums[i] << " ";
    }

    return 0;
}
```

---

## Time and Space Complexity

- TC → O(N)
- SC → O(1)

Why?

- Only one loop
- No extra array

---

## Dry Run

```
nums = [1,2,3,4,5]

temp = 1

Shift:
[2,3,4,5,5]

Final:
[2,3,4,5,1]
```

---

## Edge Cases

- n = 1 → same
- n = 0 → handle separately if needed
- large input → efficient

---

## How This Approach Handles the Problem

- No extra memory
- In-place shifting
- Minimal operations

---

## Why This Is Optimal

Because:

- Meets constraint → O(1) space
- Minimum required operations → O(N)
- Cannot do better than O(N) (must visit all elements)

---

# FINAL PATTERN RECOGNITION (MOST IMPORTANT)

## Pattern Type

**Array Rotation / Shifting**

---

## Key Signals

If you see:

- "rotate array"
- "shift elements"
- "move first/last element"

→ Think:

```
store → shift → place back
```

---

## Mental Model

```
Breaking array into:
[ FIRST ELEMENT ] + [ REST ]

Then:
REST shifts left
FIRST goes to end
```

---

## When to Use This

- Left rotate by 1
- Right rotate by 1 (reverse logic)
- Cyclic shifts

---

## Upgrade Path (Future)

This problem evolves into:

- Rotate by K
- Reversal algorithm
- Cyclic replacements

---
