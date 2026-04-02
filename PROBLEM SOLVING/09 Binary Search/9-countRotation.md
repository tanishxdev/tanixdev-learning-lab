Perfect — now we start this new problem with your rules:

- Use **your code exactly (no modification)**
- Follow **template strictly**
- Start with **BRUTE FORCE only**
- Deep intuition + thinking

---

# PROBLEM (Original Statement)

Find how many times a sorted array has been rotated.
Return the **rotation count**.

---

## BREAKDOWN PROBLEM

### What is being asked?

We need to:

- Find **how many times rotation happened**
- Return that number

---

### Key understanding

```text
Rotation count = index of minimum element
```

---

### Input

- `arr[]` → rotated sorted array (distinct elements)

---

### Output

- Integer → rotation count

---

## CONSTRAINT UNDERSTANDING

- `1 <= n <= 10^5`
- Elements are **distinct**
- Originally sorted

---

### How constraints affect thinking?

- Large `n` → brute works but not optimal
- Sorted structure exists → should use binary search later

---

# BRUTE FORCE APPROACH

---

## First Thought Intuition

First natural thinking:

> "Find the smallest element — its index tells rotation count"

Why this comes first:

- Simple observation
- No need to think about rotation logic deeply
- Works for all cases

---

## Thought Process (Step-wise)

1. Assume first element is minimum
2. Traverse entire array
3. If smaller element found:
   - update minimum
   - store index

4. End of loop:
   - return index of minimum

---

## Data Structure Choice

- Simple **array traversal**

### Why?

- We just scan elements
- No special structure used

---

### Alternatives?

- Binary search → later
- Break-point logic → next approach

---

## Pseudocode

```id="rot1"
minVal = arr[0]
minIndex = 0

for i from 1 to n-1:
    if arr[i] < minVal:
        minVal = arr[i]
        minIndex = i

return minIndex
```

---

## Algorithm

1. Initialize:
   - `minVal = arr[0]`
   - `minIndex = 0`

2. Loop from `i = 1 → n-1`
3. Compare each element
4. Update minimum when needed
5. Return index

---

## CODE (C++ and JavaScript)

---

### C++

#### V1 (Only Required Function)

```cpp
int findRotationsBrute(vector<int> &arr)
{
    int n = arr.size();

    int minVal = arr[0];
    int minIndex = 0;

    // Find index of minimum element
    for (int i = 1; i < n; i++)
    {
        if (arr[i] < minVal)
        {
            minVal = arr[i];
            minIndex = i;
        }
    }

    // Index of minimum = rotation count
    return minIndex;
}
```

---

#### V2 (Complete Program)

```cpp
#include <bits/stdc++.h>
using namespace std;

/*
Brute Force:
Find minimum element index
*/

int findRotationsBrute(vector<int> &arr)
{
    int n = arr.size();

    int minVal = arr[0];
    int minIndex = 0;

    // Traverse entire array
    for (int i = 1; i < n; i++)
    {
        // Update minimum when smaller found
        if (arr[i] < minVal)
        {
            minVal = arr[i];
            minIndex = i;
        }
    }

    return minIndex;
}

int main()
{
    vector<int> arr = {4, 5, 6, 7, 0, 1, 2};

    cout << findRotationsBrute(arr) << endl;

    return 0;
}
```

---

### JavaScript

#### V1 (Only Required Function)

```javascript
function findRotationsBrute(arr) {
  let minVal = arr[0];
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
      minIndex = i;
    }
  }

  return minIndex;
}
```

---

#### V2 (Complete Program)

```javascript
function findRotationsBrute(arr) {
  let minVal = arr[0];
  let minIndex = 0;

  // Traverse array
  for (let i = 1; i < arr.length; i++) {
    // Update minimum
    if (arr[i] < minVal) {
      minVal = arr[i];
      minIndex = i;
    }
  }

  return minIndex;
}

// Test
const arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findRotationsBrute(arr));
```

---

## Time and Space Complexity

### Time Complexity: `O(n)`

Why?

- We scan entire array once

---

### Space Complexity: `O(1)`

- No extra memory used

---

## Dry Run (All Cases)

---

### Normal Case

```id="rot2"
arr = [4,5,6,7,0,1,2]
```

Steps:

```id="rot3"
min=4 idx=0
i=1 → 5 → ignore
i=2 → 6 → ignore
i=3 → 7 → ignore
i=4 → 0 → update (min=0 idx=4)
```

Return `4`

---

### Best Case

```id="rot4"
minimum at index 0
→ no updates → O(n)
```

---

### Worst Case

```id="rot5"
minimum at last index
→ full traversal
```

---

## Edge Cases

1. **No rotation**

   ```
   [1,2,3,4] → 0
   ```

2. **Single element**

   ```
   [5] → 0
   ```

3. **Minimum at last index**

   ```
   [2,3,4,5,1] → 4
   ```

---

## How This Approach Handles the Problem

- Uses fundamental property:

  ```
  smallest element → rotation count
  ```

- Checks all elements → guarantees correctness

---

## Does This Approach Fail?

### YES — important

---

### Where it fails?

Performance

---

### Why it fails?

- Does not use sorted nature
- Wastes structure

---

### Bottleneck

```id="rot6"
Linear scan → O(n)
```

---

### Key Insight

> "Array is sorted + rotated → we should NOT scan everything"

---

## -------clear thinking (Pattern Recognition Notes)-------

When you see:

```id="rot7"
Sorted + Rotated + Count rotations
```

Think:

```id="rot8"
Find minimum element
```

---

### Transition Thinking

Brute:

```id="rot9"
Scan → find min
```

Next:

```id="rot10"
Can we detect break point earlier?
```

---

Good — this is the **most important intuition**.
If this clicks → whole rotated array problems become easy.

I’ll explain **step-by-step like a senior teaching junior**, no jump.

---

# CORE QUESTION

### Why does:

```text
Index of minimum element = number of rotations
```

---

# STEP 1: Start from ORIGINAL ARRAY

Think of a **sorted array**:

```text
[0, 1, 2, 3, 4, 5]
```

### Important observation:

- Smallest element is at index `0`
- This is our **reference position**

---

# STEP 2: What does ONE rotation mean?

### Rotation = shift left part to right

Example:

```text
After 1 rotation:
[1, 2, 3, 4, 5, 0]
```

### Observe:

- `0` moved from index `0 → 5`

---

# STEP 3: Track ONLY the minimum element

Ignore everything else.

Focus ONLY on `0`.

---

### After 1 rotation:

```text
Index of 0 = 5
```

---

### After 2 rotations:

```text
[2, 3, 4, 5, 0, 1]

Index of 0 = 4
```

---

### After 3 rotations:

```text
[3, 4, 5, 0, 1, 2]

Index of 0 = 3
```

---

# STEP 4: Pattern Observation (VERY IMPORTANT)

| Rotations | Array         | Index of min |
| --------- | ------------- | ------------ |
| 0         | [0,1,2,3,4,5] | 0            |
| 1         | [1,2,3,4,5,0] | 5            |
| 2         | [2,3,4,5,0,1] | 4            |
| 3         | [3,4,5,0,1,2] | 3            |

---

# STEP 5: Now flip thinking (IMPORTANT SHIFT)

Instead of thinking:

> “Where did min go?”

Think:

> “Where did the sorted order break?”

---

# STEP 6: What is rotation ACTUALLY doing?

Rotation creates:

```text
Two sorted parts:
[big values] + [small values]
```

Example:

```text
[4,5,6,7,0,1,2]
```

---

# STEP 7: Where is the BREAK?

Look at this:

```text
4 < 5 < 6 < 7   (sorted)
BUT

7 > 0   ← BREAK POINT
```

---

# STEP 8: What comes AFTER break?

```text
0 is the smallest element
```

And its index = **4**

---

# STEP 9: Why is that index equal to rotations?

Think carefully:

Original:

```text
[0,1,2,3,4,5,6]
```

After 4 rotations:

```text
[4,5,6,0,1,2,3]
```

---

### What happened?

- First 4 elements moved to end
- So min (0) shifted **4 positions right**

---

# FINAL INTUITION (CRYSTAL CLEAR)

> Every rotation pushes the smallest element one step forward.

So:

```text
Number of rotations = how far minimum moved from index 0
```

That distance = its index

---

# VISUAL MENTAL MODEL (IMPORTANT)

Think like this:

```text
Sorted line:
0 1 2 3 4 5 6

Rotate → cut → attach

[4 5 6] + [0 1 2 3]
```

---

### Now ask:

Where is smallest?

```text
Index = number of elements moved
```

---

# ONE-LINE MEMORY TRICK

```text
Rotation = shift of minimum element from index 0
```

---

# COMMON CONFUSION (VERY IMPORTANT)

### Student thinks:

> “But sometimes min index decreases?”

Yes — because rotation direction matters.

But in this problem:

- Rotation is **left rotation**
- Defined such that:

```text
Rotation count = index of minimum
```

---

# FINAL UNDERSTANDING CHECK

If you understand this, you should be able to answer:

### Q1:

```text
[3,4,5,1,2]
```

- Min = 1
- Index = 3

→ rotations = **3**

---

### Q2:

```text
[1,2,3,4]
```

- Min = 1
- Index = 0

→ rotations = **0**

---

# -------clear thinking (Pattern Recognition Notes)-------

Whenever you see:

```text
Sorted + Rotated
```

Immediately think:

```text
Find minimum → gives pivot → gives rotations
```

---

Now your base intuition is solid.

---

**Shall we move to the next approach (linear break-point method)?**

Good — this is the **next level clarity**.
Most people get confused here, so we’ll build it **step-by-step properly**.

---

# CORE QUESTION

### For **RIGHT rotation**:

```text
How do we find rotation count using minimum element?
```

---

# STEP 1: Start from ORIGINAL ARRAY

```text
[0, 1, 2, 3, 4, 5]
```

- Minimum = `0`
- Index = `0`

---

# STEP 2: What is RIGHT rotation?

Right rotation means:

> Last element moves to front

---

### After 1 RIGHT rotation:

```text
[5, 0, 1, 2, 3, 4]
```

- Minimum (0) moves from index `0 → 1`

---

### After 2 RIGHT rotations:

```text
[4, 5, 0, 1, 2, 3]
```

- Minimum at index `2`

---

### After 3 RIGHT rotations:

```text
[3, 4, 5, 0, 1, 2]
```

- Minimum at index `3`

---

# STEP 3: Pattern Observation

| Right Rotations | Array         | Index of Min |
| --------------- | ------------- | ------------ |
| 0               | [0,1,2,3,4,5] | 0            |
| 1               | [5,0,1,2,3,4] | 1            |
| 2               | [4,5,0,1,2,3] | 2            |
| 3               | [3,4,5,0,1,2] | 3            |

---

# STEP 4: KEY REALIZATION

For RIGHT rotation:

```text
Rotation count = index of minimum element
```

---

# STEP 5: But wait — compare with LEFT rotation

### LEFT rotation:

```text
[4,5,6,0,1,2,3]
min index = 3 → rotations = 4 (left rotations)
```

### RIGHT rotation:

```text
[4,5,6,0,1,2,3]
min index = 3 → rotations = 3 (right rotations)
```

---

# STEP 6: FINAL RELATION (VERY IMPORTANT)

Let:

- `n = array size`
- `minIndex = index of minimum`

---

### Then:

```text
Right rotations = minIndex
Left rotations  = (n - minIndex) % n
```

---

# STEP 7: WHY THIS WORKS (DEEP INTUITION)

Think:

```text
Left + Right rotations are complementary
```

---

### Example:

```text
n = 7
array = [4,5,6,0,1,2,3]
minIndex = 3
```

---

### Right rotations:

```text
= 3
```

---

### Left rotations:

```text
= 7 - 3 = 4
```

---

# STEP 8: VISUAL MENTAL MODEL

Original:

```text
0 1 2 3 4 5 6
```

---

### Right rotate 3 times:

```text
3 4 5 6 0 1 2
      ↑
   min index = 3
```

---

### Left rotate 4 times:

```text
4 5 6 0 1 2 3
      ↑
   min index = 3
```

---

# STEP 9: FINAL INTUITION (CRYSTAL CLEAR)

### For RIGHT rotation:

> Every rotation pushes the minimum element **one step right**

So:

```text
Right rotations = index of minimum
```

---

### For LEFT rotation:

> Minimum moves backward effectively

So:

```text
Left rotations = n - index of minimum
```

---

# STEP 10: INTERVIEW MEMORY TRICK

```text
Find minimum index → everything comes from that
```

Then:

```text
Right = minIndex
Left  = n - minIndex
```

---

# COMMON CONFUSION (VERY IMPORTANT)

Students mix this:

❌ "min index always equals rotations"
✔ Only true for **right rotation**

---

# FINAL CHECK

### Example:

```text
arr = [2,3,4,5,1]
```

- min = 1
- index = 4
- n = 5

---

### Answer:

```text
Right rotations = 4
Left rotations  = 1
```

---

# -------clear thinking (Pattern Recognition Notes)-------

Whenever you see:

```text
Rotated sorted array
```

Always do:

```text
Step 1 → Find minimum index
Step 2 → derive rotation direction
```

---

Now your intuition is complete.

---

**Shall we move to the next approach (linear break-point method)?**
Good. Now we move to the **next approach (Linear Break-Point Method)**
Following your rules strictly + using your logic as-is

---

# BETTER APPROACH

---

## First Thought Intuition

Now we improve from brute force:

Earlier we did:

```text
Scan entire array → find minimum
```

Now thinking evolves:

> “Instead of finding minimum explicitly… can we detect where sorting breaks?”

---

### Core Observation

In a **sorted array**:

```text
arr[i] < arr[i+1]   (always true)
```

But in **rotated array**:

```text
At exactly ONE place → order breaks
```

---

### Example

```text
[4,5,6,7,0,1,2]
```

Look carefully:

```text
4 < 5 < 6 < 7   (sorted)
BUT
7 > 0   ← BREAK POINT
```

---

### Key Insight

```text
Break happens at index i
→ Minimum is at index i+1
→ Rotation count = i + 1
```

---

## Thought Process (Step-wise)

1. Traverse array from `0 → n-2`
2. Check each pair:

   ```
   arr[i] > arr[i+1]
   ```

3. If found:
   - return `i + 1`

4. If no break:
   - array not rotated → return `0`

---

## Data Structure Choice

- Simple array traversal

### Why?

- We only compare adjacent elements
- No need for extra DS

---

### Why better than brute?

- May stop early
- No need to track minimum
- Directly finds rotation point

---

## Pseudocode

```text
for i from 0 to n-2:
    if arr[i] > arr[i+1]:
        return i + 1

return 0
```

---

## Algorithm

1. Loop from `i = 0` to `n-2`
2. Compare `arr[i]` and `arr[i+1]`
3. If order breaks:
   - return `i+1`

4. If loop ends:
   - return `0`

---

## CODE (C++ and JavaScript)

---

### C++

#### V1 (Only Required Function)

```cpp
int findRotationCountLinear(vector<int> &arr)
{
    int n = arr.size();

    // Rotation happens where order breaks
    for (int i = 0; i < n - 1; i++)
    {
        if (arr[i] > arr[i + 1])
        {
            // Next index is the minimum element
            return i + 1;
        }
    }

    // Array is not rotated
    return 0;
}
```

---

#### V2 (Complete Program)

```cpp
#include <bits/stdc++.h>
using namespace std;

/*
Linear Break-Point Approach
*/

int findRotationCountLinear(vector<int> &arr)
{
    int n = arr.size();

    // Traverse array
    for (int i = 0; i < n - 1; i++)
    {
        // Detect break point
        if (arr[i] > arr[i + 1])
        {
            return i + 1;
        }
    }

    return 0;
}

int main()
{
    vector<int> arr = {4,5,6,7,0,1,2};

    cout << findRotationCountLinear(arr) << endl;

    return 0;
}
```

---

### JavaScript

#### V1 (Only Required Function)

```javascript
function findRotationCountLinear(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return i + 1;
    }
  }

  return 0;
}
```

---

#### V2 (Complete Program)

```javascript
function findRotationCountLinear(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return i + 1;
    }
  }

  return 0;
}

// Test
const arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findRotationCountLinear(arr));
```

---

## Time and Space Complexity

### Time Complexity: `O(n)`

Why?

- In worst case → traverse entire array

---

### Space Complexity: `O(1)`

- No extra space

---

## Dry Run (All Cases)

---

### Normal Case

```text
arr = [4,5,6,7,0,1,2]
```

Steps:

```text
i=0 → 4<5
i=1 → 5<6
i=2 → 6<7
i=3 → 7>0 → BREAK
return 3+1 = 4
```

---

### Best Case

```text
arr = [2,1,3,4]
i=0 → break → O(1)
```

---

### Worst Case

```text
arr = [1,2,3,4,5]
no break → full scan
```

---

## Edge Cases

1. **No rotation**

   ```
   return 0
   ```

2. **Single element**

   ```
   return 0
   ```

3. **Minimum at last**

   ```
   [2,3,4,5,1] → return 4
   ```

---

## How This Approach Handles the Problem

- Detects the **only inversion point**
- Uses property:

  ```
  rotated sorted array → exactly one break
  ```

---

## Does This Approach Fail?

### YES — important

---

### Where it fails?

Performance for large input

---

### Why it fails?

- Still linear scan
- Does not use binary search

---

### Bottleneck

```text
O(n) traversal
```

---

### Key Insight (Move to Optimal)

> “Array is partially sorted → we should eliminate half each time”

---

## -------clear thinking (Pattern Recognition Notes)-------

When you see:

```text
Sorted + Rotated
```

Think:

```text
Either:
1. Find minimum
2. OR find break point
```

---

### Transition to Optimal

```text
Linear → find break
Binary → find minimum faster
```

---

Now comes the **real interview solution**

---

**Shall we move to the optimal approach (binary search)?**
