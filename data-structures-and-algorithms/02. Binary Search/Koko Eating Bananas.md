# PROBLEM (Original Statement)

Koko loves to eat bananas. There are `n` piles of bananas, where the `i-th` pile has `piles[i]` bananas.

The guards will return in `h` hours.

Koko can decide her banana-eating speed `k` (bananas per hour).

Each hour:

- She chooses one pile.
- Eats up to `k` bananas from that pile.
- If the pile has less than `k`, she eats all and does not continue to another pile in that hour.

Return the minimum integer `k` such that she can eat all bananas within `h` hours.

---

## Topics / Patterns

**Topic:** Binary Search

**Pattern:** Binary Search on Answer

Why?

- We are not searching inside array.
- We are searching for minimum valid speed `k`.
- Condition:
  - If speed works → try smaller.
  - If speed fails → increase speed.

This is classic **monotonic condition**.

---

## BREAKDOWN PROBLEM

Given:

- Array `piles`
- Integer `h`

Find:

- Minimum integer `k` such that total hours needed ≤ `h`.

Key Observation:

If speed `k` increases:

- Required time decreases.

If speed `k` decreases:

- Required time increases.

This is monotonic.

---

## CONSTRAINT UNDERSTANDING

Typical constraints:

- 1 ≤ piles.length ≤ 10⁴
- 1 ≤ piles[i] ≤ 10⁹
- piles.length ≤ h ≤ 10⁹

Important:

- Max pile can be 10⁹.
- Speed range: 1 → max(piles)

Brute force from 1 to 10⁹ is impossible.

We must binary search.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Try all possible speeds from 1 to max(piles).

For each speed:

- Calculate total hours needed.
- If ≤ h → return speed.

Feels natural but expensive.

---

## Thought Process (Step-wise)

1. Find maxPile.
2. For k from 1 to maxPile:
   - Compute total hours required.
   - If totalHours ≤ h:
     return k.

To compute hours:
For each pile:

```
hours += ceil(pile / k)
```

---

## Pseudocode

```
maxPile = maximum element

for k from 1 to maxPile:
    totalHours = 0
    for each pile:
        totalHours += ceil(pile / k)

    if totalHours <= h:
        return k
```

---

## Algorithm

1. Try all speeds.
2. Check feasibility.
3. Return first valid.

---

## CODE

### C++

#### V1 (Only Required Function)

```cpp
int minEatingSpeed(vector<int>& piles, int h) {

    int maxPile = *max_element(piles.begin(), piles.end());

    for (int k = 1; k <= maxPile; k++) {

        long long totalHours = 0;

        for (int pile : piles) {

            // Ceil division formula
            totalHours += (pile + k - 1) / k;
        }

        if (totalHours <= h)
            return k;
    }

    return maxPile;
}
```

---

#### V2 (Complete Program)

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int minEatingSpeed(vector<int>& piles, int h) {

    int maxPile = *max_element(piles.begin(), piles.end());

    for (int k = 1; k <= maxPile; k++) {

        long long totalHours = 0;

        for (int pile : piles) {

            // Compute ceil(pile / k)
            totalHours += (pile + k - 1) / k;
        }

        if (totalHours <= h)
            return k;
    }

    return maxPile;
}

int main() {

    vector<int> piles = {3, 6, 7, 11};
    int h = 8;

    cout << minEatingSpeed(piles, h);

    return 0;
}
```

---

## Time and Space Complexity

Time:
Worst case:
O(maxPile × n)

If maxPile = 10⁹ → impossible.

Space:
O(1)

---

## Dry Run

piles = [3,6,7,11]
h = 8

Try k=1 → too slow
k=2 → slow
k=3 → slow
k=4 → works → answer

---

## Does This Approach Fail?

YES.

Fails due to huge search space (up to 10⁹).

We need optimization.

---

# BETTER APPROACH

Actually brute idea reveals something:

We are searching for **minimum k** that satisfies condition.

Observe:

If k works → any k' > k also works.

This is monotonic.

That means:

Binary Search on answer.

---

# OPTIMAL APPROACH

## First Thought Intuition

Search space:

Minimum speed = 1
Maximum speed = max(piles)

Binary search between them.

At each mid:

- Check if feasible.
- If feasible → move left.
- Else → move right.

---

## Thought Process (Step-wise)

1. low = 1
2. high = maxPile
3. While low <= high:
   - mid = (low + high) / 2
   - compute totalHours
   - if totalHours <= h:
     - store answer
     - try smaller → high = mid - 1

   - else:
     - increase speed → low = mid + 1

Return answer.

---

## Why Ceil Formula Works

Instead of:

```
ceil(pile / k)
```

We use:

```
(pile + k - 1) / k
```

Avoids floating point.

---

## Pseudocode

```
low = 1
high = maxPile
ans = high

while low <= high:
    mid = (low + high) / 2

    totalHours = 0
    for each pile:
        totalHours += ceil(pile / mid)

    if totalHours <= h:
        ans = mid
        high = mid - 1
    else:
        low = mid + 1

return ans
```

---

## CODE

### C++

#### V1 (Only Required Function)

```cpp
int minEatingSpeed(vector<int>& piles, int h) {

    int low = 1;
    int high = *max_element(piles.begin(), piles.end());

    int ans = high;

    while (low <= high) {

        int mid = low + (high - low) / 2;

        long long totalHours = 0;

        for (int pile : piles) {

            totalHours += (pile + mid - 1) / mid;
        }

        if (totalHours <= h) {

            ans = mid;        // Possible answer
            high = mid - 1;   // Try smaller speed
        }
        else {
            low = mid + 1;    // Increase speed
        }
    }

    return ans;
}
```

---

#### V2 (Complete Program)

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int minEatingSpeed(vector<int>& piles, int h) {

    int low = 1;  // Minimum possible speed

    int high = *max_element(piles.begin(), piles.end());  // Max possible speed

    int ans = high;  // Store best answer

    while (low <= high) {

        int mid = low + (high - low) / 2;  // Avoid overflow

        long long totalHours = 0;  // May exceed int

        // Calculate hours needed at speed mid
        for (int pile : piles) {

            totalHours += (pile + mid - 1) / mid;  // Ceil division
        }

        // If Koko can finish within h hours
        if (totalHours <= h) {

            ans = mid;       // Store this speed

            high = mid - 1;  // Try smaller speed
        }
        else {

            low = mid + 1;   // Need higher speed
        }
    }

    return ans;
}

int main() {

    vector<int> piles = {3, 6, 7, 11};

    int h = 8;

    cout << "Minimum Speed: " << minEatingSpeed(piles, h);

    return 0;
}
```

---

## Time and Space Complexity

Binary search range: log(maxPile)

Each check: O(n)

Total:

O(n log maxPile)

Which is efficient.

Space:
O(1)

---

## Dry Run

piles = [3,6,7,11]
h = 8

low=1 high=11

mid=6
hours=1+1+2+2=6 ≤8 → valid
try smaller

mid=3
hours=1+2+3+4=10 >8 → too slow

mid=4
hours=1+2+2+3=8 → valid

mid=3 invalid

Answer=4

---

## Edge Cases

1. h == piles.size()
   → speed must be max(pile)

2. h very large
   → speed = 1

3. Single pile
   → ceil(pile / h)

All handled.

---

## How This Approach Handles the Problem

Binary search narrows search space from 10⁹ possibilities to log₂(10⁹) ≈ 30 checks.

Each check O(n).

Very efficient.

---

## Why This Is Optimal

Lower bound:

We must inspect all piles at least once → O(n)

Search space large → must use log factor.

So best possible is:

O(n log maxPile)

Cannot do better.

---

# Pattern Recognition Mindset

When you see:

- "Minimum X such that condition satisfied"
- "If X works, bigger X also works"
- Monotonic feasibility

Immediately think:

Binary Search on Answer.

Other problems same pattern:

- Capacity to Ship Packages
- Allocate Books
- Aggressive Cows
- Painter Partition
- Minimum Days to Make Bouquets
- Split Array Largest Sum

---
