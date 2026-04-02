# String Problems - Complete Lecture Notes

## 📚 Table of Contents

1.  [Problem 1: Sorting Vowels in a String](#problem-1-sorting-vowels-in-a-string)
2.  [Problem 2: Adding Two Large Numbers (String Addition)](#problem-2-adding-two-large-numbers-string-addition)
3.  [Complexity Analysis Summary](#complexity-analysis-summary)
4.  [Key Takeaways & Homework](#key-takeaways--homework)

---

# Problem 1: Sorting Vowels in a String

## Problem Statement

Given a string containing both uppercase and lowercase letters, sort only the vowels (a, e, i, o, u) in non-decreasing order based on their ASCII values. Consonants must remain in their original positions.

### Examples

#### Example 1 (Lowercase Only)

```
Input:  "eo"
Output: "eo" // Already sorted

Explanation:
- Vowels present: e, o
- Sorted order: e, o
```

#### Example 2 (Mixed Case)

```
Input:  "lEetcOde"
Output: "lEtcOde"

Explanation:
- Original: l E e t c O d e
- Vowels present: E, e, O, e
- Sorted ASCII order: E (69), O (79), e (101), e (101)
- Placing sorted vowels back: l E t c O d e
- Final: "lEtcOde"
```

## Visual Representation

### Approach: Counting Sort with Placeholder

We use a two-pass approach:

1.  **First Pass:** Identify and count vowels, replacing them with a placeholder (e.g., `#`) in the original string.
2.  **Second Pass:** Build a sorted string of all vowels using counting sort.
3.  **Third Pass:** Merge the sorted vowels back into the original string by replacing the placeholders.

```
Original String: "lEetcOde"

Step 1: Identify Vowels and use Placeholder
String: l E e t c O d e
Index:  0 1 2 3 4 5 6 7

i=0: 'l' (consonant) -> keep
i=1: 'E' (vowel) -> replace with '#', store 'E' in count
i=2: 'e' (vowel) -> replace with '#', store 'e' in count
i=3: 't' (consonant) -> keep
i=4: 'c' (consonant) -> keep
i=5: 'O' (vowel) -> replace with '#', store 'O' in count
i=6: 'd' (consonant) -> keep
i=7: 'e' (vowel) -> replace with '#', store 'e' in count

Result after step 1: "l##tc#d#" (String with placeholders)
Counts: Uppercase: E:1, O:1. Lowercase: e:2.

Step 2: Build Sorted Vowel String
Sorted order: E (69), O (79), e (101), e (101)
Sorted Vowel String = "EOee"

Step 3: Merge back into placeholder string
String with placeholders: l # # t c # d #
Sorted Vowel String:    E O e e
Pointer j=0

i=0: 'l' -> keep 'l'
i=1: '#' -> replace with vowel[j]='E', j++ -> "lE"
i=2: '#' -> replace with vowel[j]='O', j++ -> "lEO"
i=3: 't' -> keep 't' -> "lEOt"
i=4: 'c' -> keep 'c' -> "lEOtc"
i=5: '#' -> replace with vowel[j]='e', j++ -> "lEOtce"
i=6: 'd' -> keep 'd' -> "lEOtced"
i=7: '#' -> replace with vowel[j]='e', j++ -> "lEOtced e?" Wait, careful.

Let's do it systematically:

Placeholder String: l # # t c # d #
Vowel String:      E O e e

Final Result: l E O t c e d e
              0 1 2 3 4 5 6 7
```

## Algorithm

```
function sortVowels(s):
    // 1. Count frequencies
    upperCount[26] = {0}
    lowerCount[26] = {0}

    for i = 0 to s.length-1:
        if s[i] is vowel (A, E, I, O, U, a, e, i, o, u):
            if s[i] is uppercase:
                upperCount[s[i] - 'A']++
            else:
                lowerCount[s[i] - 'a']++
            s[i] = '#'  // Replace with placeholder

    // 2. Build sorted vowel string
    vowelString = ""
    // Add uppercase vowels first (smaller ASCII)
    for i = 0 to 25:
        char c = 'A' + i
        while upperCount[i] > 0:
            vowelString += c
            upperCount[i]--

    // Add lowercase vowels
    for i = 0 to 25:
        char c = 'a' + i
        while lowerCount[i] > 0:
            vowelString += c
            lowerCount[i]--

    // 3. Merge back
    j = 0
    for i = 0 to s.length-1:
        if s[i] == '#':
            s[i] = vowelString[j]
            j++

    return s
```

## Code Implementation

```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    string sortVowels(string s) {
        // 1. Count frequencies and replace vowels with placeholder
        vector<int> upperCount(26, 0);
        vector<int> lowerCount(26, 0);

        for (int i = 0; i < s.size(); i++) {
            char ch = s[i];
            // Check for uppercase vowels
            if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
                upperCount[ch - 'A']++;
                s[i] = '#'; // Placeholder
            }
            // Check for lowercase vowels
            else if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                lowerCount[ch - 'a']++;
                s[i] = '#'; // Placeholder
            }
        }

        // 2. Build the sorted vowel string
        string vowelString = "";
        // Add uppercase vowels first (smaller ASCII values)
        for (int i = 0; i < 26; i++) {
            char c = 'A' + i;
            while (upperCount[i] > 0) {
                vowelString += c;
                upperCount[i]--;
            }
        }
        // Add lowercase vowels
        for (int i = 0; i < 26; i++) {
            char c = 'a' + i;
            while (lowerCount[i] > 0) {
                vowelString += c;
                lowerCount[i]--;
            }
        }

        // 3. Merge back into the original string
        int j = 0; // Pointer for vowelString
        for (int i = 0; i < s.size(); i++) {
            if (s[i] == '#') {
                s[i] = vowelString[j];
                j++;
            }
        }

        return s;
    }
};
```

## Complexity Analysis

| Complexity | Value | Explanation                                                                     |
| ---------- | ----- | ------------------------------------------------------------------------------- |
| **Time**   | O(n)  | Three passes through the string (n) and constant passes over the 26 count array |
| **Space**  | O(n)  | Extra space for `vowelString` in worst case (if all characters are vowels)      |

---

# Problem 2: Adding Two Large Numbers (String Addition)

## Problem Statement

Given two non-negative integers represented as strings `num1` and `num2`, return the sum of `num1` and `num2` as a string. You must not use any built-in BigInteger library or convert the inputs to integers directly.

### Examples

#### Example 1

```
Input:  num1 = "11", num2 = "123"
Output: "134"
```

#### Example 2

```
Input:  num1 = "456", num2 = "77"
Output: "533"
```

#### Example 3

```
Input:  num1 = "0", num2 = "0"
Output: "0"
```

## Visual Representation

### Approach: Elementary School Addition

We simulate the manual addition process, starting from the least significant digit (rightmost).

```
Example: "456" + "77"

num1: 4 5 6
num2:     7 7
            ^
Start from the last digit (units place).

Step 1: i1 = 2, i2 = 1
        digit1 = 6, digit2 = 7
        sum = 6 + 7 + carry(0) = 13
        result_digit = 13 % 10 = 3
        carry = 13 / 10 = 1
        result = "3"

Step 2: i1 = 1, i2 = 0
        digit1 = 5, digit2 = 7
        sum = 5 + 7 + carry(1) = 13
        result_digit = 13 % 10 = 3
        carry = 13 / 10 = 1
        result = "33" (3 + previous "3")

Step 3: i1 = 0, i2 = -1 (num2 is exhausted)
        digit1 = 4, digit2 = 0 (since num2 is exhausted)
        sum = 4 + 0 + carry(1) = 5
        result_digit = 5 % 10 = 5
        carry = 5 / 10 = 0
        result = "533" (5 + previous "33")

Final: Reverse "533" -> "533"
```

### Handling Different Lengths and Final Carry

```
Example: "999" + "1"

num1: 9 9 9
num2:     1

Step 1: 9 + 1 = 10, digit=0, carry=1 -> result="0"
Step 2: 9 + 0 + 1 = 10, digit=0, carry=1 -> result="00"
Step 3: 9 + 0 + 1 = 10, digit=0, carry=1 -> result="000"
After loop, carry=1 -> result="0001"
Reverse -> "1000"
```

## Algorithm

```
function addStrings(num1, num2):
    // Ensure num1 is the longer string for simpler logic
    if num1.length < num2.length:
        swap(num1, num2)

    i = num1.length - 1  // Pointer for num1 (longer string)
    j = num2.length - 1  // Pointer for num2 (shorter string)
    carry = 0
    result = ""

    while i >= 0:
        digit1 = num1[i] - '0'
        digit2 = (j >= 0) ? (num2[j] - '0') : 0

        sum = digit1 + digit2 + carry
        result += (sum % 10) + '0'   // Append the last digit
        carry = sum / 10

        i--
        j--

    // Handle the final carry
    if carry > 0:
        result += carry + '0'

    reverse(result)  // Since we built the string in reverse order
    return result
```

## Code Implementation

```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string addStrings(string num1, string num2) {
        // Ensure num1 is the longer string
        if (num1.size() < num2.size()) {
            swap(num1, num2);
        }

        int i = num1.size() - 1;
        int j = num2.size() - 1;
        int carry = 0;
        string result = "";

        while (i >= 0) {
            int digit1 = num1[i] - '0';
            int digit2 = (j >= 0) ? (num2[j] - '0') : 0;

            int sum = digit1 + digit2 + carry;
            result += (sum % 10) + '0'; // Append the unit digit
            carry = sum / 10;

            i--;
            j--;
        }

        // Handle the final carry
        if (carry > 0) {
            result += carry + '0';
        }

        // Reverse the result
        reverse(result.begin(), result.end());
        return result;
    }
};
```

### Alternative Implementation (Without Swapping)

```cpp
class Solution {
public:
    string addStrings(string num1, string num2) {
        int i = num1.size() - 1;
        int j = num2.size() - 1;
        int carry = 0;
        string result = "";

        while (i >= 0 || j >= 0 || carry > 0) {
            int digit1 = (i >= 0) ? num1[i] - '0' : 0;
            int digit2 = (j >= 0) ? num2[j] - '0' : 0;

            int sum = digit1 + digit2 + carry;
            result += (sum % 10) + '0';
            carry = sum / 10;

            i--;
            j--;
        }

        reverse(result.begin(), result.end());
        return result;
    }
};
```

## Complexity Analysis

| Complexity | Value | Explanation                                                              |
| ---------- | ----- | ------------------------------------------------------------------------ |
| **Time**   | O(n)  | Single pass through the digits of the longer string (n = max(len1, len2) |
| **Space**  | O(n)  | Space for the result string of length O(n)                               |

---

# Complexity Analysis Summary

| Problem                    | Time Complexity | Space Complexity | Key Technique               |
| -------------------------- | --------------- | ---------------- | --------------------------- |
| Sorting Vowels in a String | O(n)            | O(n)             | Counting Sort, Placeholders |
| Adding Two Large Numbers   | O(n)            | O(n)             | Digit-by-digit addition     |

---

## Key Takeaways

1.  **Character to Integer Mapping:** Always use `ch - '0'` or `ch - 'a'`/`ch - 'A'` for reliable conversion, not just `(int)ch`.
2.  **Handling Large Numbers:** Strings are the standard way to handle numbers that exceed integer limits. This is the foundation for problems involving factorials, sums, and products of very large numbers.
3.  **Placeholder Technique:** Using a placeholder (like `#`) is a great way to "remember" positions when you need to filter or modify a string in one pass and then merge back in another.
4.  **Manual Arithmetic:** Many complex problems are just a simulation of how we perform basic arithmetic by hand.

---

## Homework

1.  Solve the "Sorting Vowels" problem using a single pass with two pointers.
2.  Implement string subtraction for large numbers.
3.  Read about the "Big Integer" concept and how it is implemented in languages like Python or Java.
4.  Solve the problem "Multiply Strings" on LeetCode, which builds on the addition concept we learned.

> **"Mastering the basics of string manipulation is the key to unlocking complex algorithms like KMP and string hashing."**
