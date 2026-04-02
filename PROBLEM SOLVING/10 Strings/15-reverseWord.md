# Reverse Words in a String - Complete Lecture Notes

## 📚 Table of Contents

1. [Problem Statement](#problem-statement)
2. [Understanding the Problem](#understanding-the-problem)
3. [Approach 1: Brute Force - Split and Reverse](#approach-1-brute-force---split-and-reverse)
4. [Approach 2: Optimal - Right to Left Traversal](#approach-2-optimal---right-to-left-traversal)
5. [Approach 3: In-Place Reversal (Space Optimized)](#approach-3-in-place-reversal-space-optimized)
6. [Complexity Analysis Summary](#complexity-analysis-summary)
7. [Key Takeaways](#key-takeaways)

---

# Problem Statement

Given an input string containing **upper-case and lower-case letters**, **digits**, and **spaces** (`' '`), a **word** is defined as a sequence of **non-space characters**. The words in the string are separated by **at least one space**.

Your task is to return a string with the **words in reverse order**, concatenated by a **single space**.

### Important Rules:

- Multiple spaces between words should be **collapsed into a single space**
- Leading and trailing spaces should be **removed**
- The output should have exactly **one space** between words

### Examples

#### Example 1

```
Input:  "the sky is blue"
Output: "blue is sky the"

Explanation:
- Original words: ["the", "sky", "is", "blue"]
- Reversed order: ["blue", "is", "sky", "the"]
- Join with single space: "blue is sky the"
```

#### Example 2

```
Input:  "  hello world  "
Output: "world hello"

Explanation:
- Leading and trailing spaces are removed
- Multiple spaces collapse to single space
- Words: ["hello", "world"]
- Reversed: ["world", "hello"]
```

#### Example 3

```
Input:  "a good   example"
Output: "example good a"

Explanation:
- Multiple spaces between "good" and "example" are collapsed
- Words: ["a", "good", "example"]
- Reversed: ["example", "good", "a"]
```

---

# Understanding the Problem

### Visual Representation of the Challenge

```
Input String: "  the   sky  is  blue  "
               └┬┘ └─┬─┘ └┬┘ └─┬─┘ └──┘
            leading  multiple spaces between words    trailing

Goal: "blue is sky the"

Key Challenges:
1. Remove leading spaces
2. Remove trailing spaces
3. Collapse multiple spaces between words to single space
4. Reverse word order
```

---

# Approach 1: Brute Force - Split and Reverse

## Intuition

The most straightforward approach is to:

1. **Extract all words** from the string by scanning character by character
2. **Ignore multiple spaces** and leading/trailing spaces while collecting words
3. **Store words in a list**
4. **Reverse the list**
5. **Join** the reversed words with a single space

## Step-by-Step Visualization

```
Input: s = "  the   sky  is  blue  "

Step 1: Extract words (character by character scan)

i=0: ' ' → skip
i=1: ' ' → skip
i=2: 't' → start word1 → "t"
i=3: 'h' → "th"
i=4: 'e' → "the"
i=5: ' ' → end of word1, push "the" to list

i=6: ' ' → skip (multiple spaces)
i=7: ' ' → skip
i=8: 's' → start word2 → "s"
i=9: 'k' → "sk"
i=10: 'y' → "sky"
i=11: ' ' → end of word2, push "sky" to list

i=12: ' ' → skip (multiple spaces)
i=13: ' ' → skip
i=14: 'i' → start word3 → "i"
i=15: 's' → "is"
i=16: ' ' → end of word3, push "is" to list

i=17: ' ' → skip (multiple spaces)
i=18: ' ' → skip
i=19: 'b' → start word4 → "b"
i=20: 'l' → "bl"
i=21: 'u' → "blu"
i=22: 'e' → "blue"
i=23: ' ' → end of word4, push "blue" to list

i=24: ' ' → skip (trailing spaces)
i=25: ' ' → skip

Words list = ["the", "sky", "is", "blue"]

Step 2: Reverse the list
Reversed list = ["blue", "is", "sky", "the"]

Step 3: Join with single space
Result = "blue is sky the"
```

## Algorithm

```
function reverseWords(s):
    words = []           // List to store words
    word = ""            // Temporary string for current word

    // Step 1: Extract words
    for i = 0 to s.length-1:
        if s[i] != ' ':
            word += s[i]      // Build current word
        else if word is not empty:
            words.append(word) // Word completed
            word = ""          // Reset for next word

    // Step 2: Add last word if exists
    if word is not empty:
        words.append(word)

    // Step 3: Reverse the list
    reverse(words)

    // Step 4: Join words with single space
    result = ""
    for i = 0 to words.length-1:
        result += words[i]
        if i < words.length - 1:
            result += " "

    return result
```

## Code Implementation

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string reverseWords(string s) {
        vector<string> words;
        string word = "";

        // Extract words from the string
        for (int i = 0; i < s.size(); i++) {
            if (s[i] != ' ') {
                word += s[i];  // Build the current word
            }
            else if (!word.empty()) {
                // Word completed, add to list
                words.push_back(word);
                word = "";  // Reset for next word
            }
        }

        // Add the last word if it exists
        if (!word.empty()) {
            words.push_back(word);
        }

        // Reverse the list of words
        reverse(words.begin(), words.end());

        // Join the reversed words with a single space
        string result = "";
        for (int i = 0; i < words.size(); i++) {
            result += words[i];
            if (i < words.size() - 1) {
                result += " ";
            }
        }

        return result;
    }
};

// Driver code
int main() {
    Solution obj;
    string s = "  the   sky  is  blue  ";
    cout << "\"" << obj.reverseWords(s) << "\"" << endl;
    return 0;
}
```

## Complexity Analysis

| Complexity | Value | Explanation                                                           |
| ---------- | ----- | --------------------------------------------------------------------- |
| **Time**   | O(n)  | One pass to extract words, one pass to reverse list, one pass to join |
| **Space**  | O(n)  | Storing all words in a list (n is total characters in all words)      |

---

# Approach 2: Optimal - Right to Left Traversal

## Intuition

Instead of storing all words and then reversing, we can:

1. **Traverse from right to left**
2. **Identify words** by finding non-space characters
3. **Append each word directly** to the result string
4. This avoids the extra step of reversing the list

This approach is more efficient because:

- We build the result in the correct order from the start
- We don't need to store all words in a list
- We handle spaces naturally by skipping them

## Step-by-Step Visualization

```
Input: s = "  the   sky  is  blue  "
Index:   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
         ' ' ' ' t h e   ' ' ' s k y   ' ' i s   ' ' b l u e   ' ' ' '

Initialize: result = "", i = 25 (last index)

Step 1: Skip trailing spaces
i=25: ' ' → i=24
i=24: ' ' → i=23
i=23: ' ' → i=22
i=22: 'e' → stop skipping

Step 2: Found word "blue"
end = i = 22
Move i left until space or start:
i=22: 'e' → i=21
i=21: 'u' → i=20
i=20: 'l' → i=19
i=19: 'b' → i=18
i=18: ' ' → stop
Word = s.substr(19, 22-19+1) = "blue"
result = "blue"

Step 3: Skip spaces between words
i=18: ' ' → i=17
i=17: ' ' → i=16
i=16: ' ' → i=15
i=15: 's' → stop skipping

Step 4: Found word "is"
end = i = 15
Move i left:
i=15: 's' → i=14
i=14: 'i' → i=13
i=13: ' ' → stop
Word = s.substr(14, 15-14+1) = "is"
result = "blue is" (add space before)

Step 5: Skip spaces between words
i=13: ' ' → i=12
i=12: ' ' → i=11
i=11: 'y' → stop skipping

Step 6: Found word "sky"
end = i = 11
Move i left:
i=11: 'y' → i=10
i=10: 'k' → i=9
i=9: 's' → i=8
i=8: ' ' → stop
Word = s.substr(9, 11-9+1) = "sky"
result = "blue is sky"

Step 7: Skip spaces between words
i=8: ' ' → i=7
i=7: ' ' → i=6
i=6: ' ' → i=5
i=5: 'e' → stop skipping

Step 8: Found word "the"
end = i = 5
Move i left:
i=5: 'e' → i=4
i=4: 'h' → i=3
i=3: 't' → i=2
i=2: ' ' → stop
Word = s.substr(3, 5-3+1) = "the"
result = "blue is sky the"

Step 9: Continue loop, i becomes 1, then 0, then -1
Loop ends

Final result: "blue is sky the"
```

## Algorithm

```
function reverseWords(s):
    result = ""
    i = s.length - 1

    while i >= 0:
        // Skip spaces
        while i >= 0 and s[i] == ' ':
            i--

        // If we've reached the beginning, break
        if i < 0:
            break

        // Mark the end of the current word
        end = i

        // Move left until we find a space or start
        while i >= 0 and s[i] != ' ':
            i--

        // Extract the word
        word = s.substring(i + 1, end + 1)

        // Add to result (with space if result is not empty)
        if result is not empty:
            result += " "
        result += word

    return result
```

## Code Implementation

```cpp
#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    string reverseWords(string s) {
        string result = "";
        int i = s.size() - 1;

        while (i >= 0) {
            // Skip spaces from the right
            while (i >= 0 && s[i] == ' ') {
                i--;
            }

            // If we've processed all characters, break
            if (i < 0) {
                break;
            }

            // Mark the end of the current word
            int end = i;

            // Move left until we find a space or start of string
            while (i >= 0 && s[i] != ' ') {
                i--;
            }

            // Extract the word (from i+1 to end)
            string word = s.substr(i + 1, end - i);

            // Add to result with a space if result is not empty
            if (!result.empty()) {
                result += " ";
            }
            result += word;
        }

        return result;
    }
};

// Driver code
int main() {
    Solution obj;
    string s = "  the   sky  is  blue  ";
    cout << "\"" << obj.reverseWords(s) << "\"" << endl;
    return 0;
}
```

## Complexity Analysis

| Complexity | Value | Explanation                                                   |
| ---------- | ----- | ------------------------------------------------------------- |
| **Time**   | O(n)  | Single pass from right to left, each character processed once |
| **Space**  | O(1)  | Ignoring output string, no additional data structures used    |

---

# Approach 3: In-Place Reversal (Space Optimized)

## Intuition

For languages with mutable strings (like C++), we can achieve **O(1) extra space** by:

1. **Remove extra spaces** (leading, trailing, and multiple spaces)
2. **Reverse the entire string**
3. **Reverse each word** individually

This approach modifies the string in-place, using only O(1) extra space.

## Step-by-Step Visualization

```
Input: s = "  the   sky  is  blue  "

Step 1: Remove extra spaces (in-place)
Result after cleanup: "the sky is blue"

Step 2: Reverse entire string
"the sky is blue" → "eulb si yks eht"

Step 3: Reverse each word
"eulb" → "blue"
"si" → "is"
"yks" → "sky"
"eht" → "the"

Final: "blue is sky the"
```

## Algorithm

```
function reverseWords(s):
    // Step 1: Remove extra spaces (in-place)
    n = cleanSpaces(s)

    // Step 2: Reverse entire string
    reverse(s, 0, n-1)

    // Step 3: Reverse each word
    start = 0
    for i = 0 to n:
        if i == n or s[i] == ' ':
            reverse(s, start, i-1)
            start = i + 1

    // Resize string to remove extra characters
    s.resize(n)
    return s

function cleanSpaces(s):
    i = 0, j = 0, n = s.length()

    // Skip leading spaces
    while i < n and s[i] == ' ':
        i++

    // Process the string
    while i < n:
        // Copy non-space characters
        while i < n and s[i] != ' ':
            s[j++] = s[i++]

        // Skip spaces, add single space if more than one
        while i < n and s[i] == ' ':
            i++

        if i < n:
            s[j++] = ' '

    return j  // New length
```

## Code Implementation

```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string reverseWords(string s) {
        // Step 1: Remove extra spaces (in-place)
        int n = cleanSpaces(s);

        // Step 2: Reverse entire string
        reverse(s.begin(), s.begin() + n);

        // Step 3: Reverse each word
        int start = 0;
        for (int i = 0; i <= n; i++) {
            if (i == n || s[i] == ' ') {
                reverse(s.begin() + start, s.begin() + i);
                start = i + 1;
            }
        }

        // Resize the string to remove extra characters
        s.resize(n);
        return s;
    }

private:
    int cleanSpaces(string& s) {
        int i = 0;      // Read pointer
        int j = 0;      // Write pointer
        int n = s.size();

        // Skip leading spaces
        while (i < n && s[i] == ' ') {
            i++;
        }

        // Process the string
        while (i < n) {
            // Copy non-space characters
            while (i < n && s[i] != ' ') {
                s[j++] = s[i++];
            }

            // Skip spaces
            while (i < n && s[i] == ' ') {
                i++;
            }

            // Add a single space if there are more words
            if (i < n) {
                s[j++] = ' ';
            }
        }

        return j;  // New length
    }
};

// Driver code
int main() {
    Solution obj;
    string s = "  the   sky  is  blue  ";
    cout << "\"" << obj.reverseWords(s) << "\"" << endl;
    return 0;
}
```

## Complexity Analysis

| Complexity | Value | Explanation                                             |
| ---------- | ----- | ------------------------------------------------------- |
| **Time**   | O(n)  | Multiple passes but each character processed O(1) times |
| **Space**  | O(1)  | No additional data structures (in-place modification)   |

---

# Complexity Analysis Summary

| Approach        | Time Complexity | Space Complexity | Key Technique                                          |
| --------------- | --------------- | ---------------- | ------------------------------------------------------ |
| **Brute Force** | O(n)            | O(n)             | Extract words into list, reverse, join                 |
| **Optimal**     | O(n)            | O(1)             | Right-to-left traversal, direct building               |
| **In-Place**    | O(n)            | O(1)             | Clean spaces, reverse entire string, reverse each word |

### Why the Optimal Approach is Better

The optimal approach (right-to-left traversal) is better because:

1. **Single pass** through the string
2. **No extra list storage** needed
3. **Intuitive** - mimics how we would manually reverse words
4. **Handles all edge cases** naturally (leading/trailing spaces, multiple spaces)

---

# Key Takeaways

## Common Patterns in String Problems

1. **Two-Pointer Technique:** Used in the in-place approach for cleaning spaces and reversing words
2. **Right-to-Left Traversal:** Often useful when we need to process in reverse order without storing all elements
3. **In-Place Modification:** When allowed, saves space but requires careful index management

## Edge Cases to Consider

| Case            | Input             | Expected Output |
| --------------- | ----------------- | --------------- |
| Empty string    | `""`              | `""`            |
| Only spaces     | `"   "`           | `""`            |
| Single word     | `"hello"`         | `"hello"`       |
| Leading spaces  | `"  hello"`       | `"hello"`       |
| Trailing spaces | `"hello  "`       | `"hello"`       |
| Multiple spaces | `"hello   world"` | `"world hello"` |

## Visual Comparison of All Approaches

```
Input: "  the   sky  is  blue  "

Brute Force:
1. Extract words → ["the", "sky", "is", "blue"]
2. Reverse list → ["blue", "is", "sky", "the"]
3. Join → "blue is sky the"

Optimal (Right to Left):
1. Start from end, find "blue" → result = "blue"
2. Find "is" → result = "blue is"
3. Find "sky" → result = "blue is sky"
4. Find "the" → result = "blue is sky the"

In-Place:
1. Clean spaces → "the sky is blue"
2. Reverse whole → "eulb si yks eht"
3. Reverse each word → "blue is sky the"
```

---

## Practice Problems

1. **Reverse Words in a String III** (LeetCode 557): Reverse the characters of each word while keeping the word order intact
2. **Reverse String** (LeetCode 344): Reverse the entire string in-place
3. **Valid Palindrome** (LeetCode 125): Check if a string is a palindrome after ignoring non-alphanumeric characters

---

> **"Understanding different approaches to the same problem helps build intuition for choosing the right solution based on constraints!"**
