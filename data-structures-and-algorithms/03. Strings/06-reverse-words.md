# PROBLEM (Original Statement)

[problem link](https://leetcode.com/problems/reverse-words-in-a-string/)

Given an input string, containing upper-case and lower-case letters, digits, and spaces (' ').

A word is defined as a sequence of non-space characters.

The words in `s` are separated by at least one space.

Return a string with the words in reverse order, concatenated by a single space.

Examples:

Input:
s = "welcome to the jungle"
Output:
"jungle the to welcome"

Input:
s = " amazing coding skills "
Output:
"skills coding amazing"

---

## BREAKDOWN PROBLEM

### What is being asked?

Reverse the **order of words**, not characters.

### What is input?

A string `s` that:

- May contain leading spaces
- May contain trailing spaces
- May contain multiple spaces between words

### What is output?

A new string:

- Words in reverse order
- Exactly one space between words
- No leading or trailing spaces

---

## CONSTRAINT UNDERSTANDING

Typical constraints:

- 1 ≤ s.length ≤ 10^4
- String contains letters, digits and spaces

### Important Observations

- Multiple spaces must be reduced to single space.
- Leading and trailing spaces must be removed.
- Words must remain intact (only order changes).
- Cannot reverse characters inside word.

Time limit allows O(n).
Space limit allows O(n).

---

# BRUTE FORCE APPROACH

## First Thought Intuition

First natural idea:

1. Extract all words.
2. Store them in array.
3. Reverse array.
4. Join with single space.

This is simple and clean.

---

## Thought Process (Step-wise)

1. Traverse string left → right.
2. Build word when character is not space.
3. When space appears:

   - If word not empty → push into vector.
   - Reset word.

4. After loop → push last word.
5. Reverse vector.
6. Join with single space.

---

## Pseudocode

```
create empty list words
create empty string word

for each character ch in string:
    if ch != ' ':
        add ch to word
    else:
        if word not empty:
            add word to words
            word = ""

if word not empty:
    add word to words

reverse words list

return join words with single space
```

---

## Algorithm

1. Initialize empty vector<string> words.
2. Traverse string.
3. Collect words.
4. Reverse words.
5. Join with single space.
6. Return result.

---

## CODE (C++ and JavaScript)

---

### C++

#### V1 (Only Required Function)

```cpp
string reverseWords(string s) {
    vector<string> words;
    string word = "";

    for(int i = 0; i < s.size(); i++) {
        if(s[i] != ' ') {
            word += s[i];
        } else {
            if(!word.empty()) {
                words.push_back(word);
                word = "";
            }
        }
    }

    if(!word.empty()) {
        words.push_back(word);
    }

    reverse(words.begin(), words.end());

    string result = "";
    for(int i = 0; i < words.size(); i++) {
        result += words[i];
        if(i < words.size() - 1) {
            result += " ";
        }
    }

    return result;
}
```

---

#### V2 (Complete Program with main and tests)

```cpp
#include <bits/stdc++.h>
using namespace std;

string reverseWords(string s) {

    vector<string> words;       // To store all extracted words
    string word = "";           // Temporary word builder

    // Step 1: Extract words
    for(int i = 0; i < s.size(); i++) {

        if(s[i] != ' ') {
            word += s[i];       // Build word
        }
        else {
            if(!word.empty()) { // Only push valid word
                words.push_back(word);
                word = "";      // Reset for next word
            }
        }
    }

    // Push last word if exists
    if(!word.empty()) {
        words.push_back(word);
    }

    // Step 2: Reverse words
    reverse(words.begin(), words.end());

    // Step 3: Join words
    string result = "";
    for(int i = 0; i < words.size(); i++) {
        result += words[i];
        if(i != words.size() - 1) {
            result += " ";
        }
    }

    return result;
}

int main() {

    string s = " amazing coding skills ";
    cout << reverseWords(s);

    return 0;
}
```

---

### JavaScript

#### V1 (Only Required Function)

```javascript
function reverseWords(s) {
  let words = [];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      word += s[i];
    } else {
      if (word.length > 0) {
        words.push(word);
        word = "";
      }
    }
  }

  if (word.length > 0) {
    words.push(word);
  }

  words.reverse();

  return words.join(" ");
}
```

---

#### V2 (Complete Program)

```javascript
function reverseWords(s) {
  let words = [];
  let word = "";

  // Extract words
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      word += s[i];
    } else {
      if (word.length > 0) {
        words.push(word);
        word = "";
      }
    }
  }

  if (word.length > 0) {
    words.push(word);
  }

  // Reverse word list
  words.reverse();

  // Join with single space
  return words.join(" ");
}

// Test
let s = " amazing coding skills ";
console.log(reverseWords(s));
```

---

## Time and Space Complexity

Time Complexity:

- Extract words → O(n)
- Reverse → O(n)
- Join → O(n)

Overall: O(n)

Space Complexity:

- Storing words → O(n)

---

## Dry Run

Input:
" amazing coding skills "

Collected words:
["amazing", "coding", "skills"]

After reverse:
["skills", "coding", "amazing"]

Output:
"skills coding amazing"

---

## Edge Cases

1. Only spaces → return ""
2. Single word → return same word
3. Multiple spaces between words → handled
4. Leading/trailing spaces → handled

---

## How This Approach Handles the Problem

- Extracts only valid words.
- Ignores extra spaces.
- Reverses word order.
- Joins with single space.

---

## Does This Approach Fail?

No.

But:

- Uses extra space O(n).
- Two passes (collect + reverse).

We can improve slightly.

---

# OPTIMAL APPROACH

## First Thought Intuition

Instead of:

- Collecting words
- Reversing array

We can:

Traverse from right → left
Build result directly.

This avoids reverse() call.

---

## Thought Process (Step-wise)

1. Start pointer at end.
2. Skip trailing spaces.
3. Mark end of word.
4. Move backward until space.
5. Extract word.
6. Append to result.
7. Add space only when needed.

---

## Pseudocode

```
i = n - 1
result = ""

while i >= 0:
    skip spaces
    if i < 0 break

    end = i

    while i >= 0 and s[i] != ' ':
        i--

    word = substring(i+1 to end)

    if result not empty:
        add space

    add word to result
```

---

## Algorithm

1. Start from last index.
2. Skip spaces.
3. Capture word boundaries.
4. Append to result.
5. Continue.

---

## CODE (C++ and JavaScript)

### C++

#### V1 (Only Required Function)

```cpp
string reverseWords(string s) {

    string result = "";
    int i = s.size() - 1;

    while(i >= 0) {

        while(i >= 0 && s[i] == ' ')
            i--;

        if(i < 0) break;

        int end = i;

        while(i >= 0 && s[i] != ' ')
            i--;

        string word = s.substr(i + 1, end - i);

        if(!result.empty())
            result += " ";

        result += word;
    }

    return result;
}
```

---

#### V2 (Complete Program)

```cpp
#include <bits/stdc++.h>
using namespace std;

string reverseWords(string s) {

    string result = "";
    int i = s.size() - 1;

    while(i >= 0) {

        // Skip spaces
        while(i >= 0 && s[i] == ' ')
            i--;

        if(i < 0) break;

        int end = i;

        // Move to start of word
        while(i >= 0 && s[i] != ' ')
            i--;

        string word = s.substr(i + 1, end - i);

        if(!result.empty())
            result += " ";

        result += word;
    }

    return result;
}

int main() {

    string s = " amazing coding skills ";
    cout << reverseWords(s);

    return 0;
}
```

---

### JavaScript

#### V1

```javascript
function reverseWords(s) {
  let result = "";
  let i = s.length - 1;

  while (i >= 0) {
    while (i >= 0 && s[i] === " ") i--;

    if (i < 0) break;

    let end = i;

    while (i >= 0 && s[i] !== " ") i--;

    let word = s.substring(i + 1, end + 1);

    if (result.length > 0) result += " ";

    result += word;
  }

  return result;
}
```

---

## Time and Space Complexity

Time Complexity:
O(n)

Space Complexity:
O(n) (for result string)

---

## Why This Is Optimal

- Single traversal.
- No extra reverse operation.
- No array of words.
- Cleaner memory usage.

---

# PATTERN RECOGNITION NOTES

This is:

String Parsing + Two Pointer Pattern

Whenever:

- Words separated by spaces
- Need to reverse word order
- Need to normalize spaces

Think:

- Manual parsing
- Two pointer from back
- Skip spaces carefully

Mindset:
"Reverse words, not characters"

Always clarify:

- Remove extra spaces?
- Keep punctuation?
- In-place allowed?
