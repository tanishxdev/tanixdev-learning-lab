# PROBLEM (Original Statement)

https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1?page=1&company=Microsoft&sortBy=submissions

Given an array `arr[]` where each element represents the maximum jump length from that position, find the **minimum number of jumps** to reach the last index.

Return `-1` if not possible.

---

## BREAKDOWN PROBLEM

### What is being asked?

- Start from index `0`
- Reach index `n-1`
- Each position tells how far you can jump
- Find **minimum jumps**

---

### Input:

`arr = [1,3,5,8,9,2,6,7,6,8,9]`

### Output:

`3`

---

## CONSTRAINT UNDERSTANDING

- `n ≤ 10^5` → large → O(n²) risky
- Values ≥ 0 → 0 means stuck

### Impact:

- Need to avoid exploring all paths blindly (later)
- But brute will try all

---

# BRUTE FORCE APPROACH

---

## First Thought Intuition

Most natural thought:

> “Try all possible jumps and pick minimum”

At each index:

- You can jump from `1` to `arr[i]`
- Try all → recursively solve

---

## Thought Process (Step-wise)

From index `i`:

1. Try all jumps:
   - `i+1`, `i+2`, ..., `i+arr[i]`

2. Recursively find jumps needed from each
3. Take minimum

---

## Data Structure Choice

### Used:

- Recursion (call stack)

### Why?

- Problem is naturally branching → decision tree

### Alternative:

- DP (memoization) → next approach

---

## Pseudocode

```id="7z9u4d"
function solve(i):
    if i >= n-1:
        return 0

    if arr[i] == 0:
        return infinity

    minSteps = infinity

    for jump from 1 to arr[i]:
        steps = 1 + solve(i + jump)
        minSteps = min(minSteps, steps)

    return minSteps
```

---

## Algorithm

1. Start from index 0
2. Explore all reachable indices
3. Choose path with minimum jumps

---

## CODE

---

### C++

#### V1

```cpp
int solve(int i, vector<int>& arr) {
    int n = arr.size();

    // Base case: reached end
    if (i >= n - 1) return 0;

    // If stuck
    if (arr[i] == 0) return INT_MAX;

    int minSteps = INT_MAX;

    // Try all jumps
    for (int j = 1; j <= arr[i]; j++) {
        int res = solve(i + j, arr);

        if (res != INT_MAX) {
            minSteps = min(minSteps, 1 + res);
        }
    }

    return minSteps;
}
```

---

#### V2

```cpp
#include <bits/stdc++.h>
using namespace std;

int solve(int i, vector<int>& arr) {
    int n = arr.size();

    if (i >= n - 1) return 0;

    if (arr[i] == 0) return INT_MAX;

    int minSteps = INT_MAX;

    for (int j = 1; j <= arr[i]; j++) {
        int res = solve(i + j, arr);

        if (res != INT_MAX) {
            minSteps = min(minSteps, 1 + res);
        }
    }

    return minSteps;
}

int minJumps(vector<int>& arr) {
    int ans = solve(0, arr);
    return (ans == INT_MAX) ? -1 : ans;
}

int main() {
    vector<int> arr = {1,3,5,8,9,2,6,7,6,8,9};
    cout << minJumps(arr);
}
```

---

### JavaScript

```javascript
function solve(i, arr) {
  let n = arr.length;

  if (i >= n - 1) return 0;

  if (arr[i] === 0) return Infinity;

  let minSteps = Infinity;

  for (let j = 1; j <= arr[i]; j++) {
    let res = solve(i + j, arr);

    if (res !== Infinity) {
      minSteps = Math.min(minSteps, 1 + res);
    }
  }

  return minSteps;
}
```

---

## Time and Space Complexity

### Time Complexity

```id="f2y7ka"
O(exponential)
```

Why:

- At each index → multiple branches
- Tree grows exponentially

---

### Space Complexity

```id="zjwq2u"
O(n)
```

- Recursive stack depth

---

## Dry Run

Example: `[1,3,5]`

Tree:

```
0 → 1 → 2
  → 2
```

Minimum path = 2 jumps

---

## Edge Cases

- arr[0] = 0 → cannot move → return -1
- single element → 0 jumps
- unreachable path → return -1

---

## How This Approach Handles the Problem

- Tries all possible paths
- Guarantees correct answer

---

## Does This Approach Fail?

### YES (CRITICAL)

### Where it fails:

- Time complexity

### Why it fails:

```id="0r0h0g"
Explores all possible paths (exponential growth)
```

### Constraint breaking:

```id="zdfxmq"
n up to 10^5 → impossible to run
```

---

## Pattern Insight

When you see:

- “Minimum steps”
- “Multiple choices per step”

→ Think:

> Recursion → then optimize

---

# NOW: BETTER + OPTIMAL (TOGETHER as you requested)

---

# BETTER APPROACH (DP - Memoization)

## Idea

Store results of subproblems

### Improvement:

- Avoid recomputation

### TC:

```id="g6q4c7"
O(n^2)
```

Still slow → but better than exponential

---

# OPTIMAL APPROACH (GREEDY)

---

## First Thought Intuition

Key idea:

> “We don’t need to try all paths — just track the **farthest reachable**”

---

## Thought Process

We maintain:

- `farthest` → max reachable index
- `currentEnd` → boundary of current jump
- `jumps`

---

## Algorithm

1. Traverse array
2. Update farthest = max(farthest, i + arr[i])
3. If i reaches currentEnd:
   - increment jump
   - update currentEnd = farthest

---

## CODE (C++)

```cpp
int minJumps(vector<int>& arr) {
    int n = arr.size();

    if (n <= 1) return 0;
    if (arr[0] == 0) return -1;

    int jumps = 0;
    int currentEnd = 0;
    int farthest = 0;

    for (int i = 0; i < n - 1; i++) {

        // Update farthest reachable index
        farthest = max(farthest, i + arr[i]);

        // When we reach end of current jump
        if (i == currentEnd) {
            jumps++;
            currentEnd = farthest;

            // Cannot move further
            if (currentEnd <= i) return -1;
        }
    }

    return jumps;
}
```

---

## Time & Space

```id="t2lgkm"
Time: O(n)
Space: O(1)
```

---

## Why This Is Optimal

- No recursion
- No DP array
- Single pass
- Always chooses best reachable range

---

# Dry Run — Minimum Jumps

## Input

```
arr = [1,3,5,8,9,2,6,7,6,8,9]
```

---

# Variables (Remember Meaning)

| Variable     | Meaning               |
| ------------ | --------------------- |
| `jumps`      | number of jumps taken |
| `currentEnd` | current jump boundary |
| `farthest`   | max reachable index   |

---

# Step-by-Step Execution

### Initial State

```
jumps = 0
currentEnd = 0
farthest = 0
```

---

## i = 0

```
arr[0] = 1
farthest = max(0, 0 + 1) = 1
```

Check:

```
i == currentEnd → 0 == 0 → YES
```

Take jump:

```
jumps = 1
currentEnd = 1
```

---

## i = 1

```
arr[1] = 3
farthest = max(1, 1 + 3) = 4
```

Check:

```
i == currentEnd → 1 == 1 → YES
```

Take jump:

```
jumps = 2
currentEnd = 4
```

---

## i = 2

```
arr[2] = 5
farthest = max(4, 2 + 5) = 7
```

No jump (2 != 4)

---

## i = 3

```
arr[3] = 8
farthest = max(7, 3 + 8) = 11
```

No jump

---

## i = 4

```
arr[4] = 9
farthest = max(11, 4 + 9) = 13
```

Check:

```
i == currentEnd → 4 == 4 → YES
```

Take jump:

```
jumps = 3
currentEnd = 13
```

---

## Stop Condition

```
currentEnd >= n-1 → 13 >= 10 → YES
```

We can reach end

---

# Final Answer

```
Minimum jumps = 3
```

---

# Intuition Summary (Most Important)

Think like this:

```
Each jump = a RANGE

Jump 1 → [0 → 1]
Jump 2 → [1 → 4]
Jump 3 → [4 → end]
```

Inside each range, we choose the **best future reach**

---

# Where People Go Wrong (You also did)

- Thinking: "jump from index to index"
- Correct: "expand range, then jump"

---

# Pattern Lock (Important)

When you see:

- "minimum steps"
- "array jump"
- "max reach"

Immediately think:

```
Greedy + Range Expansion
```
