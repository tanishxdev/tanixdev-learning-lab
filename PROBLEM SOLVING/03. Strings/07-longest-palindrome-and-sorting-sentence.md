# String Problems - Complete Lecture Notes

## 📚 Table of Contents

1. [Problem 1: Longest Palindrome](#problem-1-longest-palindrome)
   - [Understanding the Problem](#understanding-the-problem)
   - [Pattern Recognition](#pattern-recognition)
   - [Handling Uppercase & Lowercase](#handling-uppercase--lowercase)
   - [Algorithm](#algorithm-for-longest-palindrome)
   - [Code Implementation](#code-implementation-for-longest-palindrome)
   - [Complexity Analysis](#complexity-analysis)

2. [Problem 2: Sorting the Sentence](#problem-2-sorting-the-sentence)
   - [Understanding the Problem](#understanding-the-problem-1)
   - [Approach](#approach)
   - [Algorithm](#algorithm-for-sorting-sentence)
   - [Code Implementation](#code-implementation-for-sorting-sentence)
   - [Edge Cases](#edge-cases)
   - [Complexity Analysis](#complexity-analysis-1)

---

# Problem 1: Longest Palindrome

## Understanding the Problem

### What is a Palindrome?

A word that reads the **same forwards and backwards**:

- ✅ `"naman"` → n a m a n (same from both ends)
- ✅ `"madam"` → m a d a m
- ✅ `"racecar"` → r a c e c a r
- ❌ `"rohit"` → r o h i t ≠ t i h o r

### Problem Statement

Given a string, you need to **select characters** from it and form the **longest possible palindrome**. Return the **size** of that longest palindrome.

### Example 1

```
Input:  string = "abccccdd"
Output: 7

Explanation:
Characters available: a(1), b(1), c(4), d(2)
Longest palindrome possible: "dccaccd" (size 7)
```

### Example 2

```
Input:  string = "aabbsc"
Output: 6

Explanation:
Characters available: a(2), b(2), s(1), c(1)
Longest palindrome possible: "abc cba" or "bac cab" (size 6)
```

---

## Pattern Recognition

### Structure of a Palindrome

```
Palindrome Pattern:   X Y Z ... Z Y X
                     ↑ ↑ ↑       ↑ ↑ ↑
                     Same pairs   Middle (optional)
```

### Key Observations

1. **Even Count Characters**: Can always be used in pairs

   ```
   If a character appears 4 times → can use all 4
   If a character appears 6 times → can use all 6
   ```

2. **Odd Count Characters**: Can only use the **even part**

   ```
   If a character appears 3 times → can use 2 (1 left unused)
   If a character appears 5 times → can use 4 (1 left unused)
   If a character appears 1 time → can use 0 (1 left unused)
   ```

3. **Middle Element**: At most **ONE** odd-count character can be placed in the middle

### Visual Pattern Analysis

#### Example: "a a a a b b b c c c c"

```
Character counts:
a: 4 (even) → can use all 4
b: 3 (odd) → can use 2 (1 left)
c: 4 (even) → can use all 4
d: 1 (odd) → can use 0 (1 left)

Palindrome construction:
Left half: a a b c c
Middle:    b (choose one from odd-count characters)
Right half: c c b a a

Result: "a a b c c b c c b a a" (size = 4+2+4+1 = 11)
        even   even  even middle
```

### Mathematical Formula

```
Total = Sum of (even counts) + Sum of (odd counts - 1) + (1 if any odd exists else 0)

Or more simply:
total = 0
for each character count:
    total += (count / 2) * 2  // Add the even part
if any character has odd count:
    total += 1
```

---

## Handling Uppercase & Lowercase

### The Twist

The problem states that the string can contain **both uppercase and lowercase letters**, and they are treated as **different characters**:

- `'a'` ≠ `'A'`
- `'b'` ≠ `'B'`

### Example with Mixed Case

```
Input: "aAAbBba"  (a:1, A:2, b:2, B:1)

Counts:
Lowercase a: 1 (odd) → can use 0
Uppercase A: 2 (even) → can use 2
Lowercase b: 2 (even) → can use 2
Uppercase B: 1 (odd) → can use 0

Even total = 2 + 2 = 4
Odd exists? Yes (lowercase a or uppercase B) → add 1
Final = 4 + 1 = 5
```

### Data Structure for Counting

We need separate counters for:

- **Lowercase letters**: 26 slots (a-z)
- **Uppercase letters**: 26 slots (A-Z)

```
Lower array: [a_count, b_count, c_count, ..., z_count]
Index:          0       1       2    ...    25

Upper array: [A_count, B_count, C_count, ..., Z_count]
Index:          0       1       2    ...    25
```

---

## Algorithm for Longest Palindrome

### Step-by-Step Approach

```
1. Initialize two count arrays of size 26 (for lowercase and uppercase)
2. Count frequency of each character in the string
3. Initialize total = 0 and oddExists = false
4. For each lowercase letter (i = 0 to 25):
     if count[i] is even:
         total += count[i]
     else:
         total += (count[i] - 1)  // add even part
         oddExists = true
5. Repeat step 4 for uppercase letters
6. if oddExists is true:
         total += 1
7. Return total
```

### Visual Dry Run

#### Example: "aAAbBba"

**Step 1: Count frequencies**

```
String: a  A  A  b  B  b  a
Index:  0  1  2  3  4  5  6

Lowercase a: appears at index 0 and 6 → count = 2
Uppercase A: appears at index 1 and 2 → count = 2
Lowercase b: appears at index 3 and 5 → count = 2
Uppercase B: appears at index 4 → count = 1
```

**Step 2: Store in arrays**

```
Lower array (a-z):
Index: 0(a) 1(b) 2(c) 3(d) ... 25(z)
Value: 2    2    0    0    ... 0

Upper array (A-Z):
Index: 0(A) 1(B) 2(C) 3(D) ... 25(Z)
Value: 2    1    0    0    ... 0
```

**Step 3: Calculate total**

```
Process lowercase:
- a (index 0): even (2) → total += 2 → total = 2
- b (index 1): even (2) → total += 2 → total = 4
- rest: 0 → total unchanged

Process uppercase:
- A (index 0): even (2) → total += 2 → total = 6
- B (index 1): odd (1) → total += (1-1)=0 → total = 6, oddExists = true
- rest: 0 → total unchanged

Add middle if oddExists: total += 1 → total = 7
```

---

## Code Implementation for Longest Palindrome

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    int longestPalindrome(string s) {
        // Arrays to store frequency of lowercase and uppercase letters
        vector<int> lower(26, 0);  // for a-z
        vector<int> upper(26, 0);  // for A-Z

        // Count frequency of each character
        for (int i = 0; i < s.size(); i++) {
            if (s[i] >= 'a') {  // lowercase letter
                lower[s[i] - 'a']++;
            } else {  // uppercase letter
                upper[s[i] - 'A']++;
            }
        }

        int total = 0;
        bool oddExists = false;

        // Process lowercase letters
        for (int i = 0; i < 26; i++) {
            if (lower[i] % 2 == 0) {  // even count
                total += lower[i];
            } else {  // odd count
                total += lower[i] - 1;  // add even part
                oddExists = true;
            }
        }

        // Process uppercase letters
        for (int i = 0; i < 26; i++) {
            if (upper[i] % 2 == 0) {  // even count
                total += upper[i];
            } else {  // odd count
                total += upper[i] - 1;  // add even part
                oddExists = true;
            }
        }

        // Add one middle character if any odd count exists
        if (oddExists) {
            total += 1;
        }

        return total;
    }
};
```

### Alternative Implementation (More Concise)

```cpp
int longestPalindrome(string s) {
    vector<int> lower(26, 0);
    vector<int> upper(26, 0);

    for (char c : s) {
        if (c >= 'a') lower[c - 'a']++;
        else upper[c - 'A']++;
    }

    int total = 0;
    bool odd = false;

    for (int i = 0; i < 26; i++) {
        total += (lower[i] / 2) * 2;  // Add even part
        total += (upper[i] / 2) * 2;

        if (lower[i] % 2 == 1 || upper[i] % 2 == 1) {
            odd = true;
        }
    }

    return total + (odd ? 1 : 0);
}
```

---

## Complexity Analysis

| Complexity | Value | Explanation                                                                     |
| ---------- | ----- | ------------------------------------------------------------------------------- |
| **Time**   | O(n)  | Single pass to count frequencies (n = string length) + constant loops (26 each) |
| **Space**  | O(1)  | Two fixed-size arrays of 26 elements each → constant space                      |

### Detailed Time Breakdown

- Counting frequencies: O(n)
- Processing lowercase letters: O(26) = O(1)
- Processing uppercase letters: O(26) = O(1)
- **Total: O(n) + O(1) + O(1) = O(n)**

---

# Problem 2: Sorting the Sentence

## Understanding the Problem

### Problem Statement

A sentence is given where each word has a **number appended at the end** indicating its position in the final sorted sentence. You need to reconstruct the original sentence in the correct order.

### Examples

#### Example 1

```
Input:  "is2 sentence4 This1 a3"
Output: "This is a sentence"

Explanation:
- "is2" → position 2
- "sentence4" → position 4
- "This1" → position 1
- "a3" → position 3

After sorting by position:
Position 1: "This"
Position 2: "is"
Position 3: "a"
Position 4: "sentence"
```

#### Example 2

```
Input:  "Myself2 Me1 I4 and3"
Output: "Me Myself and I"

Explanation:
- "Myself2" → position 2
- "Me1" → position 1
- "I4" → position 4
- "and3" → position 3

After sorting:
Position 1: "Me"
Position 2: "Myself"
Position 3: "and"
Position 4: "I"
```

### Key Constraints

- The appended numbers are from **1 to 9** only (single digit)
- Words are separated by **spaces**
- The last word may not have a trailing space

---

## Approach

### Data Structure

We need to store words at their correct positions. Since positions are 1-9, we can use a **vector of size 10** (index 0 unused):

```
Index:   0     1      2      3      4      5      6      7      8      9
       [""]  [""]   [""]   [""]   [""]   [""]   [""]   [""]   [""]   [""]
             pos1   pos2   pos3   pos4   pos5   pos6   pos7   pos8   pos9
```

### Step-by-Step Process

```
1. Create vector<string> result(10) to store words by position
2. Create temporary string "temp" to build current word
3. Traverse the input string character by character:
   a. If current character is not space:
        Add character to temp
   b. If current character is space:
        // Word is complete
        - Extract position from last character of temp
        - Remove last character from temp (the number)
        - Store temp at result[position]
        - Clear temp for next word
        - Increment word count
4. After loop ends, process the last word (same as step 3b)
5. Build final answer by concatenating words from position 1 to wordCount
6. Remove trailing space if any
```

### Visual Dry Run

#### Example: "is2 sentence4 This1 a3"

**Initialize:**

```
result[0..9] = ["", "", "", "", "", "", "", "", "", ""]
temp = ""
wordCount = 0
```

**Iteration through string:**

| Step | Char  | temp  | Action                             |
| ---- | ----- | ----- | ---------------------------------- |
| 1    | 'i'   | "i"   | Add to temp                        |
| 2    | 's'   | "is"  | Add to temp                        |
| 3    | '2'   | "is2" | Add to temp                        |
| 4    | space | -     | Word complete!                     |
|      |       |       | position = last char '2' - '0' = 2 |
|      |       |       | temp after pop = "is"              |
|      |       |       | result[2] = "is"                   |
|      |       |       | temp cleared, wordCount = 1        |

```
result: ["", "", "is", "", "", "", "", "", "", ""]
```

| Step | Char  | temp        | Action                             |
| ---- | ----- | ----------- | ---------------------------------- |
| 5    | 's'   | "s"         | Add to temp                        |
| 6    | 'e'   | "se"        | Add to temp                        |
| 7    | 'n'   | "sen"       | Add to temp                        |
| 8    | 't'   | "sent"      | Add to temp                        |
| 9    | 'e'   | "sente"     | Add to temp                        |
| 10   | 'n'   | "senten"    | Add to temp                        |
| 11   | 'c'   | "sentenc"   | Add to temp                        |
| 12   | 'e'   | "sentence"  | Add to temp                        |
| 13   | '4'   | "sentence4" | Add to temp                        |
| 14   | space | -           | Word complete!                     |
|      |       |             | position = last char '4' - '0' = 4 |
|      |       |             | temp after pop = "sentence"        |
|      |       |             | result[4] = "sentence"             |
|      |       |             | temp cleared, wordCount = 2        |

```
result: ["", "", "is", "", "sentence", "", "", "", "", ""]
```

**Continue similarly...**

After processing all words:

```
result[1] = "This"
result[2] = "is"
result[3] = "a"
result[4] = "sentence"
wordCount = 4
```

**Build final sentence:**

```
Start with empty string
Add result[1] → "This"
Add space → "This "
Add result[2] → "This is"
Add space → "This is "
Add result[3] → "This is a"
Add space → "This is a "
Add result[4] → "This is a sentence"

Remove last space → "This is a sentence"
```

---

## Algorithm for Sorting Sentence

```
function sortSentence(s):
    // Initialize result array of size 10
    vector<string> result(10)
    string temp = ""
    int wordCount = 0

    // Process each character
    for i = 0 to s.length()-1:
        if s[i] != ' ':
            temp += s[i]
        else:
            // Extract position
            int pos = temp.back() - '0'
            temp.pop_back()  // Remove the number
            result[pos] = temp
            temp.clear()
            wordCount++

    // Process last word (after loop ends)
    if !temp.empty():
        int pos = temp.back() - '0'
        temp.pop_back()
        result[pos] = temp
        wordCount++

    // Build answer
    string answer = ""
    for i = 1 to wordCount:
        answer += result[i]
        if i != wordCount:
            answer += ' '

    return answer
```

---

## Code Implementation for Sorting Sentence

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    string sortSentence(string s) {
        // Result array to store words at their positions (1-9)
        vector<string> result(10);
        string temp = "";
        int wordCount = 0;
        int index = 0;

        // Process the string
        while (index < s.length()) {
            if (s[index] != ' ') {
                temp += s[index];
            } else {
                // Word complete - extract position
                int pos = temp.back() - '0';  // Get the number
                temp.pop_back();               // Remove the number
                result[pos] = temp;            // Store at correct position
                temp.clear();                   // Reset for next word
                wordCount++;
            }
            index++;
        }

        // Process the last word (no space after it)
        if (!temp.empty()) {
            int pos = temp.back() - '0';
            temp.pop_back();
            result[pos] = temp;
            wordCount++;
            temp.clear();
        }

        // Build the final sentence
        string answer = "";
        for (int i = 1; i <= wordCount; i++) {
            answer += result[i];
            if (i != wordCount) {
                answer += ' ';
            }
        }

        return answer;
    }
};
```

---

## Edge Cases

### Edge Case 1: Single Word

```
Input: "Hello1"
Process:
- No spaces encountered
- After loop, temp = "Hello1"
- pos = 1, store "Hello" at result[1]
- wordCount = 1
- Answer = "Hello"
```

### Edge Case 2: Words Already in Order

```
Input: "First1 Second2 Third3"
- result[1] = "First"
- result[2] = "Second"
- result[3] = "Third"
- Answer = "First Second Third"
```

### Edge Case 3: Maximum Words (9 words)

```
Input: "one1 two2 three3 four4 five5 six6 seven7 eight8 nine9"
- All positions 1-9 filled
- Answer concatenates all 9 words in order
```

---

## Complexity Analysis

| Complexity | Value | Explanation                                          |
| ---------- | ----- | ---------------------------------------------------- |
| **Time**   | O(n)  | Single pass through the string (n = length of input) |
| **Space**  | O(n)  | Result array stores all words (total characters ≈ n) |

### Detailed Time Breakdown

- Processing each character: O(n)
- Building final answer: O(number of words) ≤ O(n)
- **Total: O(n)**

### Space Breakdown

- Result array: 10 slots, each storing a substring of total length ≈ n
- Temporary string: at most length of longest word
- **Total: O(n)**

---

## Key Takeaways

### For Longest Palindrome:

1. **Even counts** contribute fully
2. **Odd counts** contribute (count-1)
3. At most **one odd character** can be in the middle
4. **Uppercase and lowercase** are treated separately

### For Sorting Sentence:

1. Use a **result array** with indices matching positions
2. Extract position from **last character** of each word
3. **Remove the number** before storing
4. Handle the **last word** separately (no trailing space)
5. Build answer by **concatenating** in order

---

## Practice Problems

1. **Longest Palindrome** variations:
   - With only lowercase letters
   - With digits included
   - Find the actual palindrome string, not just length

2. **Sorting Sentence** variations:
   - With two-digit position numbers (10-99)
   - Without spaces (just concatenated words)
   - Reverse process: given sentence, append positions

---

## Common Mistakes to Avoid

### In Longest Palindrome:

- ❌ Forgetting to treat uppercase/lowercase separately
- ❌ Adding +1 for middle when no odd count exists
- ❌ Using int count[52] but not mapping correctly

### In Sorting Sentence:

- ❌ Forgetting to process the last word
- ❌ Not removing the number before storing
- ❌ Off-by-one errors in position indexing
- ❌ Adding extra space at the end

---

## Summary Table

| Aspect               | Longest Palindrome            | Sorting Sentence                 |
| -------------------- | ----------------------------- | -------------------------------- |
| **Key Insight**      | Even counts + at most one odd | Position stored at end           |
| **Data Structure**   | Two count arrays (size 26)    | Vector of strings (size 10)      |
| **Main Challenge**   | Handling odd counts           | Extracting and removing position |
| **Time Complexity**  | O(n)                          | O(n)                             |
| **Space Complexity** | O(1)                          | O(n)                             |

> **"Understanding the pattern is more important than memorizing the code!"**
