I will strictly follow your template and **use your provided code + logic exactly (no modification)**

We will do **ONLY BRUTE FORCE (Approach 1)** completely.
No XOR, no Binary Search yet.

---

# PROBLEM (Original Statement)

Given a sorted array where every element appears twice except one element which appears exactly once. Find that single element.

---

## BREAKDOWN PROBLEM

### What is being asked?

- We need to find **one unique element**
- All other elements appear **exactly twice**

### Input

- Sorted array of integers
- Example: `[1,1,2,3,3,4,4,8,8]`

### Output

- Return the **single non-duplicate element**
- Example output: `2`

---

## CONSTRAINT UNDERSTANDING

- Array is **sorted**
- Exactly **one unique element exists**
- All others appear **twice**
- Size can be large → affects performance

### Impact on approach

- Sorted → helps optimization (later)
- But brute force → ignore sorted advantage
- We just **scan linearly**

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Sabse natural thought:

> "Har element check karo — jo apne neighbors se match nahi karega wahi answer hoga"

Why this comes first?

- Sorted array → duplicates always **adjacent**
- So:
  - Duplicate → equal neighbor
  - Unique → different from both neighbors

---

## Thought Process (Step-wise)

Let’s think like beginner:

1. Traverse entire array
2. For each element:
   - Check left neighbor
   - Check right neighbor

3. If both different → found unique

BUT careful:

- First element → no left neighbor
- Last element → no right neighbor

So handle 3 cases:

### Case 1: First index (i = 0)

- Compare only with next

### Case 2: Last index (i = n-1)

- Compare only with previous

### Case 3: Middle elements

- Compare with both sides

---

## Pseudocode

```
if size == 1:
    return element

for i from 0 to n-1:
    if i == 0:
        if arr[i] != arr[i+1]:
            return arr[i]

    else if i == n-1:
        if arr[i] != arr[i-1]:
            return arr[i]

    else:
        if arr[i] != arr[i-1] AND arr[i] != arr[i+1]:
            return arr[i]

return -1
```

---

## Algorithm

1. Check if only one element → return it
2. Loop through array
3. At each index:
   - Handle boundary separately
   - Compare neighbors

4. Return the element which doesn't match neighbors

---

## CODE (C++ and JavaScript)

### C++

#### V1 (Only Required Function as per Platform)

```cpp
int singleNonDuplicate(vector<int> &arr)
{
    int n = arr.size();

    if (n == 1)
        return arr[0];

    for (int i = 0; i < n; i++)
    {
        if (i == 0)
        {
            if (arr[i] != arr[i + 1])
                return arr[i];
        }
        else if (i == n - 1)
        {
            if (arr[i] != arr[i - 1])
                return arr[i];
        }
        else
        {
            if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1])
                return arr[i];
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

int singleNonDuplicate(vector<int> &arr)
{
    int n = arr.size();

    // If only one element exists
    if (n == 1)
        return arr[0];

    // Traverse the array
    for (int i = 0; i < n; i++)
    {
        // First element
        if (i == 0)
        {
            if (arr[i] != arr[i + 1])
                return arr[i];
        }
        // Last element
        else if (i == n - 1)
        {
            if (arr[i] != arr[i - 1])
                return arr[i];
        }
        // Middle elements
        else
        {
            if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1])
                return arr[i];
        }
    }

    return -1; // Should never reach here
}

int main()
{
    vector<int> arr = {1, 1, 2, 3, 3, 4, 4, 8, 8};

    cout << "Single element: " << singleNonDuplicate(arr) << endl;

    return 0;
}
```

---

### JavaScript

#### V1 (Only Required Function as per Platform)

```javascript
function singleNonDuplicate(arr) {
  let n = arr.length;

  if (n === 1) return arr[0];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      if (arr[i] !== arr[i + 1]) return arr[i];
    } else if (i === n - 1) {
      if (arr[i] !== arr[i - 1]) return arr[i];
    } else {
      if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) return arr[i];
    }
  }

  return -1;
}
```

---

#### V2 (Complete Program)

```javascript
function singleNonDuplicate(arr) {
  let n = arr.length;

  // If only one element exists
  if (n === 1) return arr[0];

  for (let i = 0; i < n; i++) {
    // First element
    if (i === 0) {
      if (arr[i] !== arr[i + 1]) return arr[i];
    }
    // Last element
    else if (i === n - 1) {
      if (arr[i] !== arr[i - 1]) return arr[i];
    }
    // Middle elements
    else {
      if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) return arr[i];
    }
  }

  return -1;
}

// Test
let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log("Single element:", singleNonDuplicate(arr));
```

---

## Time and Space Complexity

### Time Complexity → O(N)

Why?

- We traverse entire array once
- In worst case → unique element at end

### Space Complexity → O(1)

- No extra space used
- Only variables

---

## Dry Run (All Cases)

### Normal Case

```
arr = [1,1,2,3,3]

i=0 → 1 == 1 → skip
i=1 → 1 == 1 → skip
i=2 → 2 != 1 AND 2 != 3 → return 2
```

---

### Best Case

```
arr = [2,3,3,4,4]

i=0 → 2 != 3 → return 2
```

Time → O(1)

---

### Worst Case

```
arr = [1,1,2,2,3]

i=0 → skip
i=1 → skip
i=2 → skip
i=3 → skip
i=4 → 3 != 2 → return 3
```

Time → O(N)

---

## Edge Cases

1. Single element array → `[5]`
2. Unique at start → `[2,3,3]`
3. Unique at end → `[1,1,2]`
4. Minimum size → `n = 1`
5. All pairs except one → always valid

---

## How This Approach Handles the Problem

- Uses **sorted property indirectly**
- Ensures:
  - duplicates → adjacent
  - unique → mismatch

So detection becomes simple **neighbor comparison**

---

## Does This Approach Fail?

### YES

### Where it fails?

- Large input sizes

### Why it fails?

- Time complexity is **O(N)**
- We are scanning entire array even though:
  - array is sorted
  - pattern exists

### Which constraint breaks it?

- If `N` is large (like 10^5 or 10^6)
- Interview expectation → **O(log N)**

### Core Bottleneck

> We are not using sorted structure efficiently

---

Good. Now we move to the **next approach (Better)** using your notes exactly (XOR).

---

# BETTER APPROACH

## First Thought Intuition

Ab next natural improvement kya ho sakta hai?

> "Pairs cancel ho jaye somehow… aur sirf unique bach jaye"

Yahan XOR trick aata hai.

### Why XOR?

Because:

- `a ^ a = 0` → duplicate cancel
- `a ^ 0 = a` → unique remains

So:

> "Agar sab elements XOR kar diye → duplicates remove ho jayenge → single element bach jayega"

---

## Thought Process (Step-wise)

Step-by-step thinking:

1. Initialize a variable `ans = 0`

2. Traverse array

3. Har element ko XOR karo:

   ```
   ans = ans ^ arr[i]
   ```

4. Duplicate elements cancel ho jayenge

5. End me sirf unique element bachega

---

## Pseudocode

```
ans = 0

for each element in array:
    ans = ans XOR element

return ans
```

---

## Algorithm

1. Set `ans = 0`
2. Loop through array
3. XOR each element with `ans`
4. Return final `ans`

---

## CODE (C++ and JavaScript)

### C++

#### V1 (Only Required Function)

```cpp
int singleNonDuplicate(vector<int>& arr)
{
    int ans = 0;

    for (int num : arr)
    {
        ans ^= num; // XOR operation
    }

    return ans;
}
```

---

#### V2 (Complete Program with main and tests)

```cpp
#include <bits/stdc++.h>
using namespace std;

int singleNonDuplicate(vector<int>& arr)
{
    int ans = 0;

    // Traverse and XOR all elements
    for (int num : arr)
    {
        ans ^= num; // duplicates cancel out
    }

    return ans;
}

int main()
{
    vector<int> arr = {1,1,2,3,3,4,4,8,8};

    cout << "Single element (XOR): "
         << singleNonDuplicate(arr) << endl;

    return 0;
}
```

---

### JavaScript

#### V1 (Only Required Function)

```javascript
function singleNonDuplicate(arr) {
  let ans = 0;

  for (let num of arr) {
    ans ^= num; // XOR
  }

  return ans;
}
```

---

#### V2 (Complete Program with tests)

```javascript
function singleNonDuplicate(arr) {
  let ans = 0;

  for (let num of arr) {
    ans ^= num; // duplicates cancel
  }

  return ans;
}

// Test
let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log("Single element (XOR):", singleNonDuplicate(arr));
```

---

## Time and Space Complexity

### Time Complexity → O(N)

- We traverse entire array once

### Space Complexity → O(1)

- No extra memory used

---

## Dry Run (All Cases)

### Example

```
arr = [1,1,2,3,3]

Step-by-step XOR:

ans = 0
ans = 0 ^ 1 = 1
ans = 1 ^ 1 = 0
ans = 0 ^ 2 = 2
ans = 2 ^ 3 = 1
ans = 1 ^ 3 = 2

Final answer = 2
```

---

### Best Case

Still O(N) → no shortcut

---

### Worst Case

Still O(N)

---

## Edge Cases

1. Single element → `[5]`
2. Large values → XOR still works
3. Any order → works (sorting not needed)

---

## How This Approach Handles the Problem

- Uses XOR property:
  - duplicates cancel out
  - unique remains

- Works for **any array**, not just sorted

---

## Does This Approach Fail?

### YES (Important for Interview)

### Where it fails?

- **Does not use sorted property**

### Why it fails?

- Problem is designed to test:
  - Binary Search
  - Pattern observation

### Which constraint breaks it?

- Interview expectation:
  - Time → **O(log N)**

- XOR gives only **O(N)**

### Core Bottleneck

> "We are ignoring sorted structure completely"

---

### Interview Insight (Very Important)

> XOR is correct but NOT expected optimal solution.

---

Now we move to the **OPTIMAL APPROACH (Binary Search)** — using your exact logic and explanation.

---

# OPTIMAL APPROACH

## First Thought Intuition

Ab sabse important jump yahan aata hai.

We ask:

> "Sorted array hai → kya binary search apply kar sakte hain?"

But problem:

- We are NOT searching a value
- We are searching a **pattern break**

### Core idea:

> "Pairing pattern break ho raha hai — usko detect karo"

---

## Thought Process (Step-wise)

### Step 1: Understand Pair Pattern

Before single element:

```
index:  0 1 | 2 3 | 4 5
values: a a | b b | c c
```

- Pairs start at **even index**

After single element:

```
index:  0 1 | 2 | 3 4 | 5 6
values: a a | x | b b | c c
```

- Pairs shift → start at **odd index**

---

### Step 2: What does this mean?

If pairing is **correct**:

- We are on the **left side**

If pairing is **broken**:

- We are on the **right side / near answer**

---

### Step 3: Use Binary Search

We check at `mid`:

#### Condition:

```
If mid is even → should match next
If mid is odd  → should match previous
```

---

### Step 4: Decision

```
If pairing is correct:
    move right

Else:
    move left
```

---

## Pseudocode

```
if n == 1:
    return arr[0]

if arr[0] != arr[1]:
    return arr[0]

if arr[n-1] != arr[n-2]:
    return arr[n-1]

low = 1
high = n - 2

while low <= high:

    mid = (low + high) // 2

    if arr[mid] != arr[mid-1] AND arr[mid] != arr[mid+1]:
        return arr[mid]

    if (mid even AND arr[mid] == arr[mid+1]) OR
       (mid odd  AND arr[mid] == arr[mid-1]):
        low = mid + 1
    else:
        high = mid - 1

return -1
```

---

## Algorithm

1. Handle edge cases:
   - Single element
   - Unique at start
   - Unique at end

2. Apply binary search between `1` and `n-2`
3. At each step:
   - Check if mid is answer
   - Check pairing pattern
   - Move left or right accordingly

4. Return result

---

## CODE (C++ and JavaScript)

### C++

#### V1 (Only Required Function)

```cpp
int singleNonDuplicate(vector<int> &arr)
{
    int n = arr.size();

    if (n == 1)
        return arr[0];
    if (arr[0] != arr[1])
        return arr[0];
    if (arr[n - 1] != arr[n - 2])
        return arr[n - 1];

    int low = 1, high = n - 2;

    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        if (arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1])
            return arr[mid];

        if ((mid % 2 == 0 && arr[mid] == arr[mid + 1]) ||
            (mid % 2 == 1 && arr[mid] == arr[mid - 1]))
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }

    return -1;
}
```

---

#### V2 (Complete Program with main and tests)

```cpp
#include <bits/stdc++.h>
using namespace std;

int singleNonDuplicate(vector<int> &arr)
{
    int n = arr.size();

    // Edge cases
    if (n == 1)
        return arr[0];
    if (arr[0] != arr[1])
        return arr[0];
    if (arr[n - 1] != arr[n - 2])
        return arr[n - 1];

    int low = 1, high = n - 2;

    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        // Check if mid is the answer
        if (arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1])
            return arr[mid];

        // Check pairing pattern
        if ((mid % 2 == 0 && arr[mid] == arr[mid + 1]) ||
            (mid % 2 == 1 && arr[mid] == arr[mid - 1]))
        {
            low = mid + 1; // move right
        }
        else
        {
            high = mid - 1; // move left
        }
    }

    return -1;
}

int main()
{
    vector<int> arr = {1,1,2,3,3,4,4,8,8};

    cout << "Single element (Binary Search): "
         << singleNonDuplicate(arr) << endl;

    return 0;
}
```

---

### JavaScript

#### V1 (Only Required Function)

```javascript
function singleNonDuplicate(arr) {
  let n = arr.length;

  if (n === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 1,
    high = n - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) return arr[mid];

    if (
      (mid % 2 === 0 && arr[mid] === arr[mid + 1]) ||
      (mid % 2 === 1 && arr[mid] === arr[mid - 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
```

---

#### V2 (Complete Program with tests)

```javascript
function singleNonDuplicate(arr) {
  let n = arr.length;

  if (n === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 1,
    high = n - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) return arr[mid];

    if (
      (mid % 2 === 0 && arr[mid] === arr[mid + 1]) ||
      (mid % 2 === 1 && arr[mid] === arr[mid - 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// Test
let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log("Single element:", singleNonDuplicate(arr));
```

---

## Time and Space Complexity

### Time Complexity → O(log N)

Why?

- Each step halves the search space
- Binary search

### Space Complexity → O(1)

- No extra memory

---

## Dry Run (All Cases)

### Example

```
arr = [1,1,2,3,3,4,4,8,8]

low = 1, high = 7

mid = 4 → arr[4] = 3

mid is even
arr[4] == arr[5]? → NO

→ pattern broken → move left

high = 3

mid = 2 → arr[2] = 2

arr[2] != arr[1] AND arr[2] != arr[3]

→ FOUND → return 2
```

---

## Edge Cases

1. Single element
2. Unique at start
3. Unique at end
4. Minimum input size
5. Large arrays

---

## How This Approach Handles the Problem

- Uses **sorted structure**
- Detects **pair pattern break**
- Narrows search space efficiently

---

## Why This Is Optimal

- Uses:
  - Sorted property
  - Pattern observation

- Reduces:
  - O(N) → O(log N)

### Key Insight

> We are NOT searching a number
> We are searching a **pattern violation**

---

## FINAL PATTERN RECOGNITION (IMPORTANT)

Lock this in your brain:

```
even index → match next → go right
odd index  → match prev → go right
otherwise → go left
```

---

Good — now we go **deep** into optimal intuition. No code first. Only **thinking → mental model → clarity**.

---

# OPTIMAL APPROACH — DEEP INTUITION (STEP-BY-STEP)

## STEP 0: What are we actually searching?

Important shift:

> We are NOT searching a value
> We are searching **where the pattern breaks**

---

## STEP 1: Build the Mental Model (Most Important)

Take example:

```
arr = [1,1,2,3,3,4,4,8,8]
```

Let’s mark indices:

```
index:  0 1 2 3 4 5 6 7 8
value:  1 1 2 3 3 4 4 8 8
              ↑
           answer = 2
```

---

## STEP 2: Observe Pair Structure Carefully

### BEFORE the single element

```
(0,1) → 1,1
(2,3) → ❌ broken (because 2 is single)
```

But in a perfect world (if no single existed):

```
(0,1), (2,3), (4,5), ...
```

So:

> **Pairs start at EVEN indices**

---

### AFTER the single element

```
(3,4) → 3,3
(5,6) → 4,4
(7,8) → 8,8
```

Now:

> **Pairs start at ODD indices**

---

## STEP 3: The Key Shift (THIS IS THE WHOLE PROBLEM)

```
Before single → even index pairing
After single  → odd index pairing
```

This shift is the **only thing we detect**

---

## STEP 4: What does Binary Search need?

Binary search needs:

- A condition to decide:
  - Go left
  - Go right

So we ask:

> "At index `mid`, are we before the single or after the single?"

---

## STEP 5: How do we detect that?

We check:

```
Is current index following correct pairing pattern?
```

---

## STEP 6: Define “Correct Pattern”

### Case 1: mid is EVEN

Correct pairing should be:

```
arr[mid] == arr[mid + 1]
```

Example:

```
index: 2 (even)
arr[2] should match arr[3]
```

---

### Case 2: mid is ODD

Correct pairing should be:

```
arr[mid] == arr[mid - 1]
```

Example:

```
index: 3 (odd)
arr[3] should match arr[2]
```

---

## STEP 7: Decision Logic (CORE)

### If pattern is CORRECT

Means:

> We are still BEFORE the single element

So:

```
Move RIGHT
```

---

### If pattern is BROKEN

Means:

> We are AT or AFTER the single element

So:

```
Move LEFT
```

---

## STEP 8: Why does this work? (Deep Reason)

Think like this:

### Before single element:

Everything is perfectly paired.

So:

```
even → next match
odd  → prev match
```

---

### After single element:

Index shifts by 1.

So pairing breaks:

```
even → mismatch
odd  → mismatch
```

---

## STEP 9: The Exact Condition (Decoded)

```
(mid even AND arr[mid] == arr[mid+1])
OR
(mid odd  AND arr[mid] == arr[mid-1])
```

### Meaning:

> "Pairing is correct → go right"

Else:

> "Pairing broken → go left"

---

## STEP 10: Full Binary Search Flow

1. Ignore edges (handled separately)
2. Start search in middle
3. At each mid:
   - Check if it's the answer
   - Else check pattern

4. Based on pattern:
   - Move left / right

---

## STEP 11: Visual Binary Search Movement

Example:

```
[1,1,2,3,3,4,4,8,8]
         ↑ mid=4
```

Check:

- mid = 4 (even)
- arr[4] = 3
- arr[5] = 4 → mismatch

→ pattern broken → go LEFT

---

Next:

```
low=1, high=3
mid=2
```

Check:

- arr[2] != neighbors → FOUND

---

## STEP 12: One-Line Brain Formula

Lock this:

```
Correct pairing → go right
Broken pairing → go left
```

---

## STEP 13: Why Binary Search Works Here

Because:

- Left side → fully sorted + correct pattern
- Right side → pattern shifted

So:

> Problem becomes **monotonic pattern problem**

Which is perfect for binary search.

---

## STEP 14: Ultimate Intuition Summary

Think like this in interview:

> "I’m not searching the number.
> I’m searching the first index where pairing pattern breaks."

---

## STEP 15: Super Short Memory Trick

```
even → check next
odd  → check prev

match → right
no match → left
```

---

## STEP 16: Common Mistake (VERY IMPORTANT)

People think:

> "We are comparing values"

Wrong.

We are actually checking:

> "Is index following expected pairing pattern?"

---

## STEP 17: Final Mental Model

```
LEFT SIDE  → perfect pairing
RIGHT SIDE → broken pairing

Find boundary → that's the answer
```

---

