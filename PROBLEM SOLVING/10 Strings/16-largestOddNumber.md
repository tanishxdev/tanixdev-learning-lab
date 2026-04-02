I will strictly follow your template and **use your given code/logic exactly (no modification)**

We will do **ONLY ONE APPROACH (your given approach → treated as Brute Force style linear scan)**
Then I will **STOP**.

---

# PROBLEM (Original Statement)

Given a string `s`, representing a large integer, return the largest-valued odd integer (as a string) that is a substring of `s`. The result should not contain leading zeros.

---

## BREAKDOWN PROBLEM

### What is being asked?

- From given string number → find a **substring**
- That substring should:
  - Represent an **odd number**
  - Be the **largest possible**

### Input

- String `s` (may contain leading zeros)
- Example: `"504"`

### Output

- Largest odd substring
- Example: `"5"`

---

## CONSTRAINT UNDERSTANDING

- String length can be large → O(N) expected
- Number can be very large → cannot convert to integer
- Must work on **string only**
- Leading zeros exist → must remove

### Impact on approach

- Cannot use numeric operations → must use **character logic**
- Need efficient scan → **single pass preferred**

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Sabse basic thought:

> "Har substring check karo → jo odd ho → max choose karo"

But this is too expensive.

Then better natural thought:

> "Largest odd number ka last digit odd hona chahiye"

So:

- We only care about **last odd digit**
- Largest number → longest prefix till that digit

---

## Thought Process (Step-wise)

Let’s think step by step:

### Step 1: What defines an odd number?

- Last digit must be **odd**
- (1, 3, 5, 7, 9)

### Step 2: How to get largest?

- Larger number → longer substring
- So we want **maximum prefix ending at last odd digit**

### Step 3: Strategy

1. Traverse from right → find **last odd digit index**
2. That gives us **maximum possible endpoint**
3. Now remove leading zeros
4. Extract substring

---

## Data Structure Choice

- Only string used
- No extra DS required

Why?

- We only scan and slice → O(1) space

---

## Pseudocode

```id="kjrkr3"
ind = -1

for i from n-1 to 0:
    if digit is odd:
        ind = i
        break

i = 0
while i <= ind AND s[i] == '0':
    i++

return substring(i, ind)
```

---

## Algorithm

1. Start from end
2. Find last odd digit index (`ind`)
3. Start from beginning:
   - skip leading zeroes

4. Return substring from first non-zero to `ind`

---

## CODE (C++ and JavaScript)

### C++

#### V1 (Only Required Function as per Platform)

```cpp id="mn47rg"
string largeOddNum(string& s) {
    int ind = -1;

    int i;
    for (i = s.length() - 1; i >= 0; i--) {
        if ((s[i] - '0') % 2 == 1) {
            ind = i;
            break;
        }
    }

    i = 0;
    while (i <= ind && s[i] == '0') i++;

    return s.substr(i, ind - i + 1);
}
```

---

#### V2 (Complete Program)

```cpp id="c9h1a7"
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    string largeOddNum(string& s) {
        int ind = -1;

        // Find last odd digit
        int i;
        for (i = s.length() - 1; i >= 0; i--) {
            if ((s[i] - '0') % 2 == 1) {
                ind = i;
                break;
            }
        }

        // Skip leading zeroes
        i = 0;
        while (i <= ind && s[i] == '0') i++;

        // Return substring
        return s.substr(i, ind - i + 1);
    }
};

int main() {
    Solution solution;

    string num = "504";

    string result = solution.largeOddNum(num);

    cout << "Largest odd number: " << result << endl;

    return 0;
}
```

---

### JavaScript

#### V1 (Only Required Function as per Platform)

```javascript id="fc3cd6"
function largeOddNum(s) {
  let ind = -1;

  for (let i = s.length - 1; i >= 0; i--) {
    if ((s[i] - "0") % 2 === 1) {
      ind = i;
      break;
    }
  }

  let i = 0;
  while (i <= ind && s[i] === "0") i++;

  return s.substring(i, ind + 1);
}
```

---

#### V2 (Complete Program)

```javascript id="5hlos5"
function largeOddNum(s) {
  let ind = -1;

  // Find last odd digit
  for (let i = s.length - 1; i >= 0; i--) {
    if ((s[i] - "0") % 2 === 1) {
      ind = i;
      break;
    }
  }

  // Skip leading zeroes
  let i = 0;
  while (i <= ind && s[i] === "0") i++;

  // Extract substring
  return s.substring(i, ind + 1);
}

// Test
let num = "504";
console.log("Largest odd number:", largeOddNum(num));
```

---

## Time and Space Complexity

### Time Complexity → O(N)

Why?

- One loop from end → O(N)
- One loop from start → O(N)
- Total → O(N)

### Space Complexity → O(1)

- No extra space used
- Only indices

---

## Dry Run (All Cases)

### Normal Case

```id="g73gsd"
s = "504"

Scan from right:
4 → even
0 → even
5 → odd → ind = 0

Skip leading zeros:
i = 0 → not zero

Substring(0,0) → "5"
```

---

### Best Case

```id="fhvzn0"
s = "135"

Last digit already odd → ind = 2

No leading zero

Return full string → "135"
```

---

### Worst Case

```id="1ubotb"
s = "222222"

No odd digit found → ind = -1

Loop ends → substring invalid → returns ""
```

---

## Edge Cases

1. No odd number → `"222"` → output `""`
2. Leading zeros → `"000135"` → output `"135"`
3. Single char odd → `"7"` → `"7"`
4. All zeros → `"0000"` → `""`
5. Odd at start → `"100"` → `"1"`

---

## How This Approach Handles the Problem

- Uses key rule:

  > Odd number depends only on last digit

- Maximizes value:
  - by taking longest prefix till last odd digit

- Removes unnecessary zeros

---

## Does This Approach Fail?

### NO (for this problem)

- Already optimal → O(N)
- Cannot do better than linear scan

### Important Insight

> Binary search not possible because no monotonic property

---

Shall we move to the next approach?
