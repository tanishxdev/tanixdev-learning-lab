# PROBLEM (Original Statement)

Search for a target element in a rotated sorted array of distinct integers.
Return its index if found, otherwise return `-1`.

---

## BREAKDOWN PROBLEM

### What is being asked?

We need to:

- Find the **position (index)** of a given target `k`
- In an array that is:
  - Sorted initially
  - Then **rotated at some unknown pivot**

---

### Input

- `nums[]` → rotated sorted array (distinct integers)
- `target` → integer to search

---

### Output

- Index of `target` if found
- Otherwise `-1`

---

## CONSTRAINT UNDERSTANDING

Typical constraints (important for thinking):

- `1 <= n <= 10^5`
- Elements are **distinct**
- Array is **rotated sorted**

---

### How constraints affect approach?

- Since `n` can be large → `O(n)` might pass but **not optimal**
- Better solutions exist → `O(log n)`
- But **first thought (brute force)** = linear scan

---

# BRUTE FORCE APPROACH

## First Thought Intuition

### What is the most basic idea?

"Just scan the array and check each element."

Why this comes first:

- No need to think about rotation
- No need to think about sorting
- Just treat array as **normal unsorted array**

This is the **natural beginner thought**

---

## Thought Process (Step-wise)

1. Start from index `0`
2. Traverse till `n-1`
3. At each index:
   - Check → `nums[i] == target`

4. If found:
   - Return index `i`

5. If not found till end:
   - Return `-1`

---

## Data Structure Choice

- Using simple **array traversal**
- No extra DS needed

### Why?

- We are checking every element sequentially
- No optimization yet

### Alternatives?

- Hashing → not needed
- Binary Search → not applicable in brute force thinking

---

## Pseudocode

```
for i from 0 to n-1:
    if nums[i] == target:
        return i

return -1
```

---

## Algorithm

1. Initialize loop from `i = 0` to `n-1`
2. Compare each element with target
3. If match found → return index
4. If loop ends → return `-1`

---

## CODE (C++ and JavaScript)

---

### C++

#### V1 (Only Required Function as per Platform)

```cpp
int search(vector<int>& nums, int target) {
    int n = nums.size();

    // Traverse entire array
    for (int i = 0; i < n; i++) {

        // Check if current element matches target
        if (nums[i] == target) {
            return i;  // Found → return index
        }
    }

    // Target not found
    return -1;
}
```

---

#### V2 (Complete Program)

```cpp
#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    int n = nums.size();

    // Traverse each element one by one
    for (int i = 0; i < n; i++) {

        // Compare current element with target
        if (nums[i] == target) {
            return i;  // Return index if found
        }
    }

    // If target is not present
    return -1;
}

int main() {
    vector<int> nums = {4,5,6,7,0,1,2};
    int target = 0;

    int result = search(nums, target);

    cout << "Index: " << result << endl;

    return 0;
}
```

---

### JavaScript

#### V1 (Only Required Function as per Platform)

```javascript
function search(nums, target) {
  // Traverse array
  for (let i = 0; i < nums.length; i++) {
    // Check if element matches target
    if (nums[i] === target) {
      return i;
    }
  }

  // Not found
  return -1;
}
```

---

#### V2 (Complete Program)

```javascript
function search(nums, target) {
  // Loop through entire array
  for (let i = 0; i < nums.length; i++) {
    // Compare current value with target
    if (nums[i] === target) {
      return i; // Return index if found
    }
  }

  // Return -1 if target does not exist
  return -1;
}

// Test case
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;

console.log("Index:", search(nums, target));
```

---

## Time and Space Complexity

### Time Complexity: `O(n)`

Why?

- We may need to check **every element**
- Worst case → target is not present OR at last index

---

### Space Complexity: `O(1)`

Why?

- No extra space used
- Only variables like `i`

---

## Dry Run (All Cases)

### Normal Case

```
nums = [4,5,6,7,0,1,2], target = 0
```

Step-by-step:

```
i=0 → 4 != 0
i=1 → 5 != 0
i=2 → 6 != 0
i=3 → 7 != 0
i=4 → 0 == target → return 4
```

---

### Best Case

```
target at index 0
```

```
i=0 → found → O(1)
```

---

### Worst Case

```
target not present OR at last index
```

```
Traverse full array → O(n)
```

---

## Edge Cases

1. **Single element array**

   ```
   [5], target=5 → return 0
   ```

2. **Target not present**

   ```
   return -1
   ```

3. **Array not rotated**

   ```
   [1,2,3,4,5]
   still works
   ```

4. **Empty array (if allowed)**

   ```
   return -1
   ```

---

## How This Approach Handles the Problem

- It ignores rotation completely
- Treats array as normal list
- Since we check all elements → correctness guaranteed

---

## Does This Approach Fail?

### YES — This is where thinking evolves

---

### Where it fails?

- When `n` is large (like `10^5` or more)

---

### Why it fails?

- It **does not use sorted property at all**
- We are wasting the advantage of:
  - Sorted array
  - Binary search possibility

---

### Bottleneck

```
Linear traversal → O(n)
```

---

### What constraint breaks it?

- Large input size
- Need faster search → `O(log n)`

---

### Key realization

> "Array is rotated… but still partially sorted…
> We should somehow use binary search"

---

## -------clear thinking (Pattern Recognition Notes)-------

- If problem says:
  - **Sorted**
  - **Rotated**
  - **Search element**

→ Immediately think:

```
Binary Search on Modified Structure
```

---

# BETTER APPROACH

_(This is NOT optimal yet — we improve step by step)_

---

## First Thought Intuition

### What improvement comes after brute force?

We realize:

> "Array was originally sorted… so maybe we can somehow bring it back to sorted form"

So next natural idea:

### Step 1:

Find the **pivot (rotation point)**

### Step 2:

Now array becomes:

```
Two sorted parts:
[Left Sorted] + [Right Sorted]
```

Example:

```
[4,5,6,7,0,1,2]
        ↑
      pivot
```

---

### Why this idea comes?

- Binary search works only on sorted arrays
- So instead of adapting search…
- We first **fix the array structure**

---

## Thought Process (Step-wise)

1. Find **pivot index**
   - Point where rotation happened
   - Smallest element

2. After pivot:
   - Array splits into 2 sorted parts

3. Now decide:
   - If target lies in left sorted part → binary search there
   - Else → binary search in right part

---

## Data Structure Choice

- Still using **array**
- Using **binary search logic**

### Why?

- Sorted nature exists → exploit it

### Alternative?

- Linear search → already rejected
- Direct modified binary search → comes in optimal

---

## Pseudocode

```id="bet1"
find pivot index

if target >= nums[0] and target <= nums[pivot-1]:
    do binary search in left part
else:
    do binary search in right part
```

---

## Algorithm

### Step 1: Find Pivot (Smallest Element)

- Use binary search
- Compare mid with high

---

### Step 2: Decide Region

- If target lies between:

  ```
  nums[0] → nums[pivot-1]
  ```

  → search left

- Else:

  ```
  nums[pivot] → nums[n-1]
  ```

  → search right

---

### Step 3: Apply Binary Search

---

## CODE (C++ and JavaScript)

---

### C++

#### V1 (Only Required Function)

```cpp
int findPivot(vector<int>& nums) {
    int low = 0, high = nums.size() - 1;

    while (low < high) {
        int mid = low + (high - low) / 2;

        // Pivot is in right half
        if (nums[mid] > nums[high])
            low = mid + 1;
        else
            high = mid;
    }

    return low; // index of smallest element
}

int binarySearch(vector<int>& nums, int low, int high, int target) {
    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (nums[mid] == target)
            return mid;
        else if (nums[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}

int search(vector<int>& nums, int target) {

    int n = nums.size();

    int pivot = findPivot(nums);

    // Decide which half to search
    if (target >= nums[0] && target <= nums[pivot - 1]) {
        return binarySearch(nums, 0, pivot - 1, target);
    }

    return binarySearch(nums, pivot, n - 1, target);
}
```

---

#### V2 (Complete Program)

```cpp
#include <iostream>
#include <vector>
using namespace std;

// Step 1: Find pivot (smallest element index)
int findPivot(vector<int>& nums) {
    int low = 0, high = nums.size() - 1;

    while (low < high) {
        int mid = low + (high - low) / 2;

        // If mid element is greater than high,
        // pivot must be in right half
        if (nums[mid] > nums[high])
            low = mid + 1;
        else
            high = mid;
    }

    return low;
}

// Standard binary search
int binarySearch(vector<int>& nums, int low, int high, int target) {

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (nums[mid] == target)
            return mid;
        else if (nums[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }

    return -1;
}

// Main function
int search(vector<int>& nums, int target) {

    int n = nums.size();

    int pivot = findPivot(nums);

    // Decide correct sorted half
    if (target >= nums[0] && target <= nums[pivot - 1]) {
        return binarySearch(nums, 0, pivot - 1, target);
    }

    return binarySearch(nums, pivot, n - 1, target);
}

int main() {
    vector<int> nums = {4,5,6,7,0,1,2};
    int target = 0;

    int result = search(nums, target);

    cout << "Index: " << result << endl;

    return 0;
}
```

---

### JavaScript

#### V1 (Only Required Function)

```javascript
function findPivot(nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] > nums[high]) low = mid + 1;
    else high = mid;
  }

  return low;
}

function binarySearch(nums, low, high, target) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

function search(nums, target) {
  let pivot = findPivot(nums);

  if (target >= nums[0] && target <= nums[pivot - 1]) {
    return binarySearch(nums, 0, pivot - 1, target);
  }

  return binarySearch(nums, pivot, nums.length - 1, target);
}
```

---

#### V2 (Complete Program)

```javascript
function findPivot(nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] > nums[high]) low = mid + 1;
    else high = mid;
  }

  return low;
}

function binarySearch(nums, low, high, target) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

function search(nums, target) {
  let pivot = findPivot(nums);

  if (target >= nums[0] && target <= nums[pivot - 1]) {
    return binarySearch(nums, 0, pivot - 1, target);
  }

  return binarySearch(nums, pivot, nums.length - 1, target);
}

// Test
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;

console.log("Index:", search(nums, target));
```

---

## Time and Space Complexity

### Time Complexity

- Find pivot → `O(log n)`
- Binary search → `O(log n)`

```
Total = O(log n) + O(log n) = O(log n)
```

---

### Space Complexity

```
O(1)
```

---

## Dry Run (All Cases)

### Input

```
nums = [4,5,6,7,0,1,2]
target = 0
```

---

### Step 1: Find Pivot

```
Pivot = index 4 (value = 0)
```

---

### Step 2: Decide Range

```
target = 0

Check:
target >= nums[0] (4)? → NO

So go right half
```

---

### Step 3: Binary Search

```
Search in [0,1,2]

→ Found at index 4
```

---

## Edge Cases

1. **No rotation**

   ```
   pivot = 0
   works fine
   ```

2. **Single element**

   ```
   handled in binary search
   ```

3. **Target not present**

   ```
   returns -1
   ```

---

## How This Approach Handles the Problem

- Converts problem into:

  ```
  Search in sorted array
  ```

- Uses:
  - pivot detection
  - binary search

---

## Does This Approach Fail?

### YES — and THIS is the key learning

---

### Where it fails?

Not in correctness — but in **design efficiency**

---

### Why it fails?

We are doing **extra work**

```
Step 1 → Find pivot
Step 2 → Search again
```

But actually:

> "We don’t need pivot explicitly"

---

### Bottleneck

- Two separate binary searches
- More logic, more chances of bug

---

### Key Insight (Transition to Optimal)

> "Instead of finding pivot first…
> We can detect sorted half ON THE GO"

This leads to:

```
Single-pass binary search
```

---

## -------clear thinking (Pattern Recognition Notes)-------

- If problem involves:
  - Rotated sorted array
  - Search element

Two ways:

1. Pivot + Binary Search (Better)
2. **Direct Modified Binary Search (Optimal)**

---

# OPTIMAL APPROACH

---

## First Thought Intuition

Earlier we did:

- Brute → linear scan
- Better → find pivot + binary search

Now key realization:

> "Why find pivot separately… when we can detect sorted side during search?"

---

### Core Insight

At any `mid`:

```
At least ONE half is always sorted
```

So instead of:

- Finding pivot
- Then searching

We do:

```
Search + detect sorted half at same time
```

---

## Thought Process (Step-wise)

1. Start normal binary search:

   ```
   low = 0, high = n-1
   ```

2. Find `mid`

3. If `nums[mid] == target`
   → return

4. Check which side is sorted:

   ### Case A: Left sorted

   ```
   nums[low] <= nums[mid]
   ```

   Now:
   - If target in left → go left
   - Else → go right

---

### Case B: Right sorted

Otherwise:

```
nums[mid] <= nums[high]
```

Now:

- If target in right → go right
- Else → go left

---

5. Repeat until found or exhausted

---

## Pseudocode

```
while low <= high:

    mid = (low + high) / 2

    if nums[mid] == target:
        return mid

    if left side is sorted:
        if target in left range:
            high = mid - 1
        else:
            low = mid + 1

    else:
        if target in right range:
            low = mid + 1
        else:
            high = mid - 1

return -1
```

---

## Algorithm

1. Initialize `low`, `high`
2. Loop while `low <= high`
3. Calculate `mid`
4. Check:
   - If found → return

5. Identify sorted half:
   - Left sorted → use range check
   - Else → right sorted

6. Eliminate half
7. Continue

---

## CODE (C++ and JavaScript)

---

### C++

#### V1 (Only Required Function)

```cpp
int searchBinary(vector<int> &nums, int target)
{
    int low = 0, high = nums.size() - 1;

    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        // Case 1: Found
        if (nums[mid] == target)
            return mid;

        // Case 2: Left half is sorted
        if (nums[low] <= nums[mid])
        {
            // Target lies in left half
            if (nums[low] <= target && target < nums[mid])
                high = mid - 1;
            else
                low = mid + 1;
        }
        // Case 3: Right half is sorted
        else
        {
            // Target lies in right half
            if (nums[mid] < target && target <= nums[high])
                low = mid + 1;
            else
                high = mid - 1;
        }
    }

    return -1;
}
```

---

#### V2 (Complete Program)

```cpp
#include <bits/stdc++.h>
using namespace std;

/*
Optimal Binary Search on Rotated Sorted Array
*/

int searchBinary(vector<int> &nums, int target)
{
    int low = 0, high = nums.size() - 1;

    // Standard binary search loop
    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        // If target found
        if (nums[mid] == target)
            return mid;

        // Check if left half is sorted
        if (nums[low] <= nums[mid])
        {
            // Check if target lies in left half
            if (nums[low] <= target && target < nums[mid])
                high = mid - 1;  // eliminate right half
            else
                low = mid + 1;   // eliminate left half
        }
        else
        {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[high])
                low = mid + 1;   // eliminate left half
            else
                high = mid - 1;  // eliminate right half
        }
    }

    // If not found
    return -1;
}

int main()
{
    vector<int> nums = {4,5,6,7,0,1,2};
    int target = 0;

    cout << "Index: " << searchBinary(nums, target) << endl;

    return 0;
}
```

---

### JavaScript

#### V1 (Only Required Function)

```javascript
function searchBinary(nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[high]) low = mid + 1;
      else high = mid - 1;
    }
  }

  return -1;
}
```

---

#### V2 (Complete Program)

```javascript
function searchBinary(nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[high]) low = mid + 1;
      else high = mid - 1;
    }
  }

  return -1;
}

// Test
const nums = [4, 5, 6, 7, 0, 1, 2];
console.log(searchBinary(nums, 0));
```

---

## Time and Space Complexity

### Time Complexity: `O(log n)`

Why?

- Each step eliminates **half of the array**
- Same as binary search

---

### Space Complexity: `O(1)`

- No extra memory used

---

## Dry Run (All Cases)

### Input

```
nums = [4,5,6,7,0,1,2]
target = 0
```

---

### Step 1

```
low=0, high=6
mid=3 → 7
```

Left sorted? YES
Target in [4,7)? NO

→ move right

```
low=4
```

---

### Step 2

```
low=4, high=6
mid=5 → 1
```

Left sorted? YES
Target in [0,1)? YES

→ move left

```
high=4
```

---

### Step 3

```
low=4, high=4
mid=4 → 0
FOUND
```

---

## Edge Cases

1. **Single element**
2. **No rotation**
3. **Target not present**
4. **Target at pivot**
5. **Target at boundaries**

All handled correctly

---

## How This Approach Handles the Problem

- Uses sorted property **dynamically**
- No need to explicitly find pivot
- Eliminates half every time

---

## Why This Is Optimal

Because:

- Uses **binary search fully**
- No extra passes
- No unnecessary computation

---

## -------clear thinking (Pattern Recognition Notes)-------

When you see:

```
Sorted + Rotated + Search
```

Immediately think:

```
Binary Search with condition check
```

---

### Mental Model

Instead of:

```
Find pivot → then search
```

Think:

```
At every step → detect sorted half → eliminate
```

---

### Final Pattern

```
If array is partially sorted:
→ One side is always sorted
→ Use that to eliminate
```

---
