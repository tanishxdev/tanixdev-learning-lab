# String Problems - Complete Lecture Notes

## 📚 Table of Contents

1. [Problem 1: Defanging an IP Address](#problem-1-defanging-an-ip-address)
2. [Problem 2: Check if String is Rotated by Two Places](#problem-2-check-if-string-is-rotated-by-two-places)
3. [Problem 3: Check if Sentence is Pangram](#problem-3-check-if-sentence-is-pangram)
4. [Problem 4: Sort a String](#problem-4-sort-a-string)
5. [Complexity Analysis Summary](#complexity-analysis-summary)

---

# Problem 1: Defanging an IP Address

## Problem Statement

Given a valid IP address, defang it by replacing every period `.` with `[.]`.

### Examples

#### Example 1

```
Input:  "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Explanation:
- First character '1' → keep as '1'
- Second character '.' → replace with "[.]"
- Third character '1' → keep as '1'
- Fourth character '.' → replace with "[.]"
- Fifth character '1' → keep as '1'
- Sixth character '.' → replace with "[.]"
- Seventh character '1' → keep as '1'
```

#### Example 2

```
Input:  "255.100.50.0"
Output: "255[.]100[.]50[.]0"
```

## Visual Representation

```
Original String: 1 . 1 . 1 . 1
Index:           0 1 2 3 4 5 6

Step-by-step construction:
i=0: '1' → answer = "1"
i=1: '.' → answer = "1[.]"
i=2: '1' → answer = "1[.]1"
i=3: '.' → answer = "1[.]1[.]"
i=4: '1' → answer = "1[.]1[.]1"
i=5: '.' → answer = "1[.]1[.]1[.]"
i=6: '1' → answer = "1[.]1[.]1[.]1"
```

## Algorithm

```
function defangIPaddr(address):
    answer = ""                    // Empty string
    for i = 0 to address.length-1:
        if address[i] == '.':
            answer += "[.]"        // Replace dot with [.]
        else:
            answer += address[i]   // Keep character as is
    return answer
```

## Code Implementation

```cpp
#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    string defangIPaddr(string address) {
        string answer = "";

        for (int i = 0; i < address.size(); i++) {
            if (address[i] == '.') {
                answer += "[.]";
            } else {
                answer += address[i];
            }
        }

        return answer;
    }
};
```

## Complexity Analysis

| Complexity | Value | Explanation                                                                    |
| ---------- | ----- | ------------------------------------------------------------------------------ |
| **Time**   | O(n)  | Single pass through the string of length n                                     |
| **Space**  | O(n)  | New string of approximately same size (slightly larger due to [.] replacing .) |

---

# Problem 2: Check if String is Rotated by Two Places

## Problem Statement

Given two strings, check if one string can be obtained by rotating the other string by **exactly two places** (either clockwise or anticlockwise).

### What is Rotation?

#### Clockwise Rotation (Right Rotation)

Moving each character forward by k positions, with characters at the end wrapping around to the beginning.

```
Original:  amazon
            ↓  ↓  ↓  ↓  ↓  ↓
Clockwise 1 place:  namazo
            ↓  ↓  ↓  ↓  ↓  ↓
Clockwise 2 places:  onamaz
```

#### Anticlockwise Rotation (Left Rotation)

Moving each character backward by k positions, with characters at the beginning wrapping around to the end.

```
Original:    amazon
              ↓  ↓  ↓  ↓  ↓  ↓
Anticlockwise 1 place:  azonam
              ↓  ↓  ↓  ↓  ↓  ↓
Anticlockwise 2 places:  amaz on? Wait, let's calculate properly...
```

Let's do it systematically:

**Anticlockwise 1 place:**

```
Original: a m a z o n
Step 1: Take first char 'a' to end → m a z o n a
Result:  m a z o n a
```

**Anticlockwise 2 places:**

```
Original: a m a z o n
Step 1 (1 place): m a z o n a
Step 2 (2 places): a z o n a m
Result: a z o n a m
```

### Examples

#### Example 1

```
Input:  string1 = "amazon", string2 = "azonam"
Output: 1 (true)

Explanation:
- Rotating "amazon" anticlockwise by 2 places gives "azonam"
- So they match!
```

#### Example 2

```
Input:  string1 = "amazon", string2 = "onamaz"
Output: 1 (true)

Explanation:
- Rotating "amazon" clockwise by 2 places gives "onamaz"
- So they match!
```

## Visual Dry Run

### Clockwise Rotation by 2 Places

```
Original: a m a z o n
Index:    0 1 2 3 4 5

After 1 clockwise rotation:
Step 1: Store last char 'n' in temp
Step 2: Shift all characters right by 1
Step 3: Place 'n' at beginning

Result after 1 rotation: n a m a z o

After 2 clockwise rotations (repeat process):
Step 1: Store last char 'o' in temp
Step 2: Shift all characters right by 1
Step 3: Place 'o' at beginning

Final: o n a m a z  ✓ matches "onamaz"
```

### Anticlockwise Rotation by 2 Places

```
Original: a m a z o n
Index:    0 1 2 3 4 5

After 1 anticlockwise rotation:
Step 1: Store first char 'a' in temp
Step 2: Shift all characters left by 1
Step 3: Place 'a' at end

Result after 1 rotation: m a z o n a

After 2 anticlockwise rotations (repeat process):
Step 1: Store first char 'm' in temp
Step 2: Shift all characters left by 1
Step 3: Place 'm' at end

Final: a z o n a m  ✓ matches "azonam"
```

## Algorithm

```
function isRotated(str1, str2):
    if str1.length != str2.length:
        return false

    // Check clockwise rotation
    clockwise = str1
    rotateClockwise(clockwise)  // 1st rotation
    rotateClockwise(clockwise)  // 2nd rotation
    if clockwise == str2:
        return true

    // Check anticlockwise rotation
    anticlockwise = str1
    rotateAnticlockwise(anticlockwise)  // 1st rotation
    rotateAnticlockwise(anticlockwise)  // 2nd rotation
    if anticlockwise == str2:
        return true

    return false
```

### Clockwise Rotation Function (One Place)

```
function rotateClockwise(s):
    char last = s[s.length-1]      // Store last character
    for i = s.length-2 down to 0:  // Shift right
        s[i+1] = s[i]
    s[0] = last                     // Place last at beginning
```

### Anticlockwise Rotation Function (One Place)

```
function rotateAnticlockwise(s):
    char first = s[0]               // Store first character
    for i = 1 to s.length-1:        // Shift left
        s[i-1] = s[i]
    s[s.length-1] = first            // Place first at end
```

## Code Implementation

```cpp
#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    // Function to rotate string clockwise by 1 place
    void rotateClockwise(string &s) {
        char last = s[s.size() - 1];  // Store last character

        // Shift all characters right by 1 position
        for (int i = s.size() - 2; i >= 0; i--) {
            s[i + 1] = s[i];
        }

        s[0] = last;  // Place last character at beginning
    }

    // Function to rotate string anticlockwise by 1 place
    void rotateAnticlockwise(string &s) {
        char first = s[0];  // Store first character

        // Shift all characters left by 1 position
        for (int i = 1; i < s.size(); i++) {
            s[i - 1] = s[i];
        }

        s[s.size() - 1] = first;  // Place first character at end
    }

    // Main function to check if string is rotated by two places
    bool isRotated(string str1, string str2) {
        if (str1.size() != str2.size()) {
            return false;
        }

        // Check clockwise rotation
        string clockwise = str1;
        rotateClockwise(clockwise);  // First rotation
        rotateClockwise(clockwise);  // Second rotation
        if (clockwise == str2) {
            return true;
        }

        // Check anticlockwise rotation
        string anticlockwise = str1;
        rotateAnticlockwise(anticlockwise);  // First rotation
        rotateAnticlockwise(anticlockwise);  // Second rotation
        if (anticlockwise == str2) {
            return true;
        }

        return false;
    }
};
```

### Visualizing the Rotation Functions

#### Clockwise Rotation (One Place) - Detailed Example

```
String: "amazon"
Indices: 0:a, 1:m, 2:a, 3:z, 4:o, 5:n

Step 1: last = s[5] = 'n'

Step 2: Shift right (i from 4 down to 0)
i=4: s[5] = s[4] → s[5] = 'o'  →  a m a z o o
i=3: s[4] = s[3] → s[4] = 'z'  →  a m a z z o
i=2: s[3] = s[2] → s[3] = 'a'  →  a m a a z o
i=1: s[2] = s[1] → s[2] = 'm'  →  a m m a z o
i=0: s[1] = s[0] → s[1] = 'a'  →  a a m a z o

Step 3: s[0] = last = 'n'  →  n a m a z o

Result after 1 clockwise rotation: "namazo"
```

#### Anticlockwise Rotation (One Place) - Detailed Example

```
String: "amazon"
Indices: 0:a, 1:m, 2:a, 3:z, 4:o, 5:n

Step 1: first = s[0] = 'a'

Step 2: Shift left (i from 1 to 5)
i=1: s[0] = s[1] → s[0] = 'm'  →  m a a z o n
i=2: s[1] = s[2] → s[1] = 'a'  →  m a a z o n
i=3: s[2] = s[3] → s[2] = 'z'  →  m a z z o n
i=4: s[3] = s[4] → s[3] = 'o'  →  m a z o o n
i=5: s[4] = s[5] → s[4] = 'n'  →  m a z o n n

Step 3: s[5] = first = 'a'  →  m a z o n a

Result after 1 anticlockwise rotation: "mazona"
```

## Complexity Analysis

| Complexity | Value | Explanation                                                                                  |
| ---------- | ----- | -------------------------------------------------------------------------------------------- |
| **Time**   | O(n)  | Each rotation takes O(n), we do at most 4 rotations (2 each for clockwise and anticlockwise) |
| **Space**  | O(n)  | We create copies of strings for testing                                                      |

---

# Problem 3: Check if Sentence is Pangram

## Problem Statement

A pangram is a sentence that contains **every letter of the English alphabet at least once**. Given a string, check if it is a pangram.

### What is a Pangram?

- Contains all 26 lowercase English letters: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
- Order doesn't matter
- Each letter must appear **at least once**

### Examples

#### Example 1 (Pangram)

```
Input:  "thequickbrownfoxjumpsoverthelazydog"
Output: true

Explanation: Contains all letters a-z
```

#### Example 2 (Not a Pangram)

```
Input:  "leetcode"
Output: false

Explanation: Missing many letters like a, b, f, g, etc.
```

## Visual Representation

### Approach: Boolean Array Tracking

We create an array of size 26, one slot for each letter:

```
Index: 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
Letter: a   b   c   d   e   f   g   h   i   j   k   l   m   n   o   p   q   r   s   t   u   v   w   x   y   z
Value: 0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
```

As we encounter each letter, we mark its slot as 1 (seen):

```
Example: "thequickbrownfoxjumpsoverthelazydog"

After processing all letters, check if all slots are 1:
Index: 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
Value: 1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1
All are 1 → Pangram!
```

## Algorithm

```
function checkIfPangram(sentence):
    // Create array to track which letters we've seen
    bool seen[26] = {false}

    // Mark letters we've seen
    for i = 0 to sentence.length-1:
        index = sentence[i] - 'a'  // Convert char to index (0-25)
        seen[index] = true

    // Check if all letters were seen
    for i = 0 to 25:
        if seen[i] == false:
            return false

    return true
```

### Character to Index Mapping

```
Character: a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
Index:     0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

Formula: index = character - 'a'
Example: 'c' - 'a' = 99 - 97 = 2
         'z' - 'a' = 122 - 97 = 25
```

## Code Implementation

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    bool checkIfPangram(string sentence) {
        // Boolean array to track seen letters (size 26 for a-z)
        vector<bool> seen(26, false);

        // Mark each character we see
        for (int i = 0; i < sentence.size(); i++) {
            int index = sentence[i] - 'a';
            seen[index] = true;
        }

        // Check if all 26 letters were seen
        for (int i = 0; i < 26; i++) {
            if (seen[i] == false) {
                return false;
            }
        }

        return true;
    }
};
```

### Alternative Implementation (Using Integer Array)

```cpp
bool checkIfPangram(string sentence) {
    int count[26] = {0};  // Array to count occurrences

    for (char c : sentence) {
        count[c - 'a']++;
    }

    for (int i = 0; i < 26; i++) {
        if (count[i] == 0) {
            return false;
        }
    }

    return true;
}
```

## Complexity Analysis

| Complexity | Value | Explanation                                                          |
| ---------- | ----- | -------------------------------------------------------------------- |
| **Time**   | O(n)  | One pass to mark letters (n = sentence length) + constant loop of 26 |
| **Space**  | O(1)  | Fixed array of size 26 (constant space)                              |

### Detailed Time Breakdown

- First loop: O(n) where n is sentence length
- Second loop: O(26) = O(1) constant
- **Total: O(n) + O(1) = O(n)**

---

# Problem 4: Sort a String

## Problem Statement

Given a string containing only lowercase letters, sort it in **ascending order**.

### Example

```
Input:  "ecbad"
Output: "abcde"

Explanation:
Original: e c b a d
Sorted:   a b c d e
```

## Approach 1: Counting Sort (Optimal)

### Key Insight

Since we only have 26 possible characters (a-z), we can use **counting sort** which is more efficient than comparison-based sorts (O(n log n)).

### How Counting Sort Works

```
Step 1: Count frequency of each character
String: "e c b a d"

Count array (size 26):
Index: 0(a) 1(b) 2(c) 3(d) 4(e) 5(f) ... 25(z)
Count: 1    1    1    1    1    0    ... 0

Step 2: Build sorted string
For i=0 (a): count=1 → add 'a' once → result = "a"
For i=1 (b): count=1 → add 'b' once → result = "ab"
For i=2 (c): count=1 → add 'c' once → result = "abc"
For i=3 (d): count=1 → add 'd' once → result = "abcd"
For i=4 (e): count=1 → add 'e' once → result = "abcde"
For i=5 to 25: count=0 → add nothing

Final: "abcde"
```

### Visual Dry Run for "aabdcce"

```
String: a a b d c c e

Step 1: Count frequencies
a: 2 times
b: 1 time
c: 2 times
d: 1 time
e: 1 time
f-z: 0 times

Count array:
Index: 0   1   2   3   4   5   6   7   8   9 ... 25
Value: 2   1   2   1   1   0   0   0   0   0 ... 0

Step 2: Build result
i=0 (a): count=2 → add 'a' twice → "aa"
i=1 (b): count=1 → add 'b' once → "aab"
i=2 (c): count=2 → add 'c' twice → "aabcc"
i=3 (d): count=1 → add 'd' once → "aabccd"
i=4 (e): count=1 → add 'e' once → "aabccde"
i=5-25: count=0 → add nothing

Result: "aabccde"
```

## Algorithm (Counting Sort)

```
function sortString(s):
    // Count frequencies
    vector<int> count(26, 0)
    for i = 0 to s.length-1:
        count[s[i] - 'a']++

    // Build sorted string
    string result = ""
    for i = 0 to 25:
        char c = 'a' + i  // Convert index to character
        while count[i] > 0:
            result += c
            count[i]--

    return result
```

## Code Implementation

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    string sortString(string s) {
        // Count frequency of each character
        vector<int> count(26, 0);

        for (int i = 0; i < s.size(); i++) {
            count[s[i] - 'a']++;
        }

        // Build sorted string
        string result = "";

        for (int i = 0; i < 26; i++) {
            // Convert index to character
            char c = 'a' + i;

            // Add character count[i] times
            while (count[i] > 0) {
                result += c;
                count[i]--;
            }
        }

        return result;
    }
};
```

### Alternative: Using while loop with counter

```cpp
string sortString(string s) {
    vector<int> count(26, 0);

    for (char ch : s) {
        count[ch - 'a']++;
    }

    string result = "";

    for (int i = 0; i < 26; i++) {
        for (int j = 0; j < count[i]; j++) {
            result += (char)('a' + i);
        }
    }

    return result;
}
```

## Comparison with Other Sorting Methods

| Method            | Time Complexity | Space Complexity | When to Use                                 |
| ----------------- | --------------- | ---------------- | ------------------------------------------- |
| **Counting Sort** | O(n)            | O(1)             | When character set is small and known (a-z) |
| Bubble Sort       | O(n²)           | O(1)             | Small input, educational purposes           |
| Quick Sort        | O(n log n)      | O(log n)         | General purpose sorting                     |
| Merge Sort        | O(n log n)      | O(n)             | Stable sort required                        |

## Complexity Analysis

| Complexity | Value | Explanation                                                               |
| ---------- | ----- | ------------------------------------------------------------------------- |
| **Time**   | O(n)  | One pass to count frequencies + one pass through 26 characters (constant) |
| **Space**  | O(1)  | Count array of fixed size 26 (constant)                                   |

### Detailed Time Breakdown

- Counting frequencies: O(n)
- Building result: O(26 \* average count) = O(n) because total characters = n
- **Total: O(n) + O(n) = O(n)**

---

# Complexity Analysis Summary

| Problem                     | Time Complexity | Space Complexity | Key Technique          |
| --------------------------- | --------------- | ---------------- | ---------------------- |
| Defanging IP Address        | O(n)            | O(n)             | String traversal       |
| Check Rotated by Two Places | O(n)            | O(n)             | Rotation functions     |
| Check Pangram               | O(n)            | O(1)             | Boolean tracking array |
| Sort a String               | O(n)            | O(1)             | Counting sort          |

---

## Key Takeaways

1. **Defanging IP Address**: Simple string traversal and replacement
2. **Rotation Check**: Break down into smaller rotation functions (clockwise and anticlockwise)
3. **Pangram Check**: Use boolean array to track seen letters
4. **Sort String**: Counting sort is optimal when character set is limited and known

## Common Patterns

- **Character to Index Mapping**: `index = ch - 'a'` for lowercase letters
- **Frequency Counting**: Using array of size 26 for a-z
- **Pass by Reference**: When modifying strings in functions
- **String Building**: Using `+=` operator for efficient concatenation

---

## Homework

1. Solve the rotation problem without creating separate functions (in one step)
2. Sort the string without using any extra space (in-place)
3. Try implementing pangram check using bit manipulation (single integer as bitmask)

> **"Understanding the pattern is more important than memorizing the code!"**
