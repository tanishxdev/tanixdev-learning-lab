# String Data Structure - Complete Lecture Notes

## 📚 Table of Contents

1. [Introduction to Strings](#introduction-to-strings)
2. [Character Arrays vs Strings](#character-arrays-vs-strings)
3. [Null Character Concept](#null-character-concept)
4. [Memory Allocation and Wastage](#memory-allocation-and-wastage)
5. [String Operations](#string-operations)
6. [Input/Output with Strings](#inputoutput-with-strings)
7. [Escape Characters](#escape-characters)
8. [Common String Problems](#common-string-problems)
   - [Reverse a String](#reverse-a-string)
   - [Calculate String Length](#calculate-string-length-without-size-function)
   - [Check Palindrome](#check-palindrome)
9. [String Functions Summary](#string-functions-summary)

---

## 🎯 Introduction to Strings

### Why Strings?

We study DSA to **store data** and **access it efficiently**. Different data types require different storage approaches:

| Data Type                         | Storage Method |
| --------------------------------- | -------------- |
| `3, 4, 5`                         | Integer        |
| `3.14, 5.67`                      | Float/Double   |
| `true, false`                     | Boolean        |
| `A, B, C`                         | Character      |
| **"Tanish", "Hello", paragraphs** | **String**     |

### Real-World Examples

- Email IDs: `Tanish@gmail.com`
- Names: `Tanish `
- Sentences: `Tanish is a good boy`
- Paragraphs: Large text data

---

## 🔤 Character Arrays

### Basic Character Array

```cpp
// Storing "APPLE" in character array
char arr[] = {'A', 'P', 'P', 'L', 'E'};
```

### Character Array with User Input

```cpp
char arr[20];  // Fixed size of 20
cin >> arr;    // Takes input
cout << arr;   // Prints output
```

### The Problem with Fixed Size Arrays

```
User enters: "APPLE" (5 characters)
Array size: 20
Memory wasted: 15 bytes (75% wastage!)

User enters: "Tanish  is a good boy" (24 characters)
Array size: 20
Error: Can't store! Buffer overflow!
```

---

## ⚠️ The Null Character (`\0`)

### What is Null Character?

- Represented as `\0` (backslash zero)
- ASCII value: 0
- Automatically added at the end of strings
- Acts as a **terminator** for string operations

### Why Null Character?

```cpp
char arr[20] = "APPLE";
// Memory representation:
// [A][P][P][L][E][\0][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]

cout << arr;  // Prints: APPLE
// Stops when it sees \0
```

### Without Null Character

```cpp
char arr[5] = {'A', 'P', 'P', 'L', 'E'};
// No null character at end!

cout << arr;
// Problem: Doesn't know where to stop!
// May print garbage after 'E'
```

### Visual Representation

```
Memory with Null Character:
Index: 0    1    2    3    4    5
      [A]  [P]  [P]  [L]  [E]  [\0]  (stop here)

Memory without Null Character:
Index: 0    1    2    3    4    5    6    7
      [A]  [P]  [P]  [L]  [E]  [?]  [?]  [?]  (keeps printing garbage)
```

---

## 💾 Memory Allocation Problem

### The Dilemma

```cpp
// Approach 1: Fixed size array (Problematic)
char arr[1000];  // Wastes memory for small inputs

// Approach 2: Variable size (Need dynamic allocation)
// This is where STRINGS come in!
```

### Memory Wastage Example

```
Input: "HI" (2 characters)
Fixed array size: 1000
Memory used: 1000 bytes
Memory needed: 3 bytes (including null)
Wasted: 997 bytes (99.7% waste!)
```

---

## 📦 Strings - The Solution

### What is a String?

- **Dynamic character array**
- Automatically manages memory
- No need to specify size beforehand
- Internally uses **heap memory** (like vectors)

### String Declaration

```cpp
#include <iostream>
#include <string>
using namespace std;

string s;                    // Empty string
string s = "Tanish";          // Direct initialization
string s("Tanish");           // Constructor initialization
```

### Memory Representation

```cpp
string s = "Tanish";
// Internal representation (automatically managed):
// [R][o][h][i][t][\0]
```

### Key Advantage

```cpp
string s;
cin >> s;  // User enters: "Tanish  is a good boy"
// String automatically allocates enough memory!
// No memory wastage, no overflow!
```

---

## 📥 String Input/Output

### Basic Input/Output

```cpp
string s;
cin >> s;      // Reads until space/tab/enter
cout << s;     // Prints the string
```

### The Space Problem

```cpp
string s;
cin >> s;
// Input: "Tanish "
// Output: "Tanish" only!
// WHY? cin stops at space
```

### Why cin Stops at Space?

- `cin` treats **space**, **tab**, and **enter** as **delimiters**
- It stops reading when it encounters any of these

### Solution: getline()

```cpp
string s;
getline(cin, s);  // Reads entire line including spaces
// Input: "Tanish  is a good boy"
// Output: "Tanish  is a good boy"
// Stops only at ENTER
```

### getline() Behavior

```
Input: "Tanish  is a good boy" + [ENTER]
       ↑                           ↑
    Starts reading                Stops at ENTER
    Includes all spaces and tabs in between
```

---

## 📏 String Size/Length

### Using size() function

```cpp
string s = "Tanish";
cout << s.size();     // Output: 5
cout << s.length();   // Output: 5 (both work same)
```

### What size() Returns

```
String:  R o h i t \0
Index:   0 1 2 3 4  5
size(): 5 (does NOT count null character)
```

### Example with Spaces

```cpp
string s = "Tanish ";
// Characters: R o h i t [space] N e g i \0
// Count:      1 2 3 4 5   6     7 8 9 10
cout << s.size();  // Output: 10
```

---

## 🔗 String Concatenation

### Using + Operator

```cpp
string s1 = "Tanish";
string s2 = "Mohit";
string s3 = s1 + s2;  // "TanishMohit"
cout << s3;
```

### Using append()

```cpp
string s1 = "Tanish";
string s2 = "Mohit";
s1.append(s2);  // s1 becomes "TanishMohit"
cout << s1;
```

### Adding Characters

```cpp
string s = "Tanish";

// Method 1: Using push_back
s.push_back('P');     // "TanishP"

// Method 2: Using + operator
s = s + 'P';          // "TanishP"

// Method 3: Using += operator
s += 'P';             // "TanishP"
```

### Adding Strings vs Characters

```cpp
string s = "Tanish";

s = s + "P";     // ✅ Works (string + string)
s = s + 'P';     // ✅ Works (string + char)
s = s + P;       // ❌ Error! P is not defined
```

---

## 🗑️ Removing Characters

### pop_back() Operation

```cpp
string s = "Tanish";
s.pop_back();    // Removes last character 't'
cout << s;       // Output: "Rohi"
```

### How pop_back() Works

```
Before: R o h i t \0
After:  R o h i \0   (t is removed, null shifts)
```

---

## 🏃‍♂️ Escape Characters

### The Problem

```cpp
// Trying to print: Tanish is a "good" boy
string s = "Tanish is a "good" boy";  // ❌ ERROR!
// Compiler gets confused with quotes
```

### What Happens?

```
String: "Tanish is a "good" boy"
         ↑              ↑    ↑
    First quote    Second?  Third?
Compiler sees: "Tanish is a " then gets confused by 'good'
```

### Solution: Escape Character `\`

```cpp
string s = "Tanish is a \"good\" boy";
cout << s;  // Output: Tanish is a "good" boy
```

### How Escape Character Works

```cpp
\"  // The backslash tells compiler:
    // "Don't treat the next character as a string delimiter,
    //   print it as a literal character"
```

### Common Escape Sequences

| Escape Sequence | Meaning        |
| --------------- | -------------- |
| `\"`            | Double quote   |
| `\'`            | Single quote   |
| `\\`            | Backslash      |
| `\n`            | New line       |
| `\t`            | Tab            |
| `\0`            | Null character |

### Printing Special Characters

```cpp
// Printing a backslash
cout << "\\";  // Output: \

// Printing null character literally
cout << "\\0";  // Output: \0 (not actual null)

// Printing quotes
cout << "\"Hello\"";  // Output: "Hello"
```

---

## 🔍 Common String Problems

## Problem 1: Reverse a String

[Problem Link](https://leetcode.com/problems/reverse-string/submissions/1926150383/)

### Problem Statement

Given a string, reverse it.

### Example

```
Input:  "Tanish"
Output: "tihoR"
```

### Two-Pointer Approach

```cpp
void reverseString(string &s) {
    int start = 0;
    int end = s.size() - 1;

    while (start < end) {
        swap(s[start], s[end]);
        start++;
        end--;
    }
}
```

### Visual Dry Run

```
Initial: R o h i t
         ↑       ↑
       start    end

Step 1: Swap R and t
        t o h i R
         ↑     ↑
       start  end

Step 2: Swap o and i
        t i h o R
           ↑ ↑
        start end

Step 3: start == end → stop
Result: t i h o R
```

### Complete Code

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "Tanish";

    int start = 0;
    int end = s.size() - 1;

    while (start < end) {
        swap(s[start], s[end]);
        start++;
        end--;
    }

    cout << "Reversed: " << s << endl;  // Output: tihoR

    return 0;
}
```

---

## Problem 2: Calculate String Length (Without size())

### Problem Statement

Find the length of a string without using the built-in `size()` function.

### Key Insight

Strings end with a **null character** `\0`. We can traverse until we find it.

### Algorithm

```cpp
int stringLength(string s) {
    int length = 0;
    while (s[length] != '\0') {
        length++;
    }
    return length;
}
```

### Visual Dry Run

```
String: R o h i t \0
Index:  0 1 2 3 4  5

Step 1: s[0] = 'R' ≠ '\0' → length = 1
Step 2: s[1] = 'o' ≠ '\0' → length = 2
Step 3: s[2] = 'h' ≠ '\0' → length = 3
Step 4: s[3] = 'i' ≠ '\0' → length = 4
Step 5: s[4] = 't' ≠ '\0' → length = 5
Step 6: s[5] = '\0' → stop
Result: length = 5
```

### Complete Code

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "Tanish";

    int length = 0;
    while (s[length] != '\0') {
        length++;
    }

    cout << "Length: " << length << endl;  // Output: 5

    return 0;
}
```

---

## Problem 3: Check Palindrome

### Problem Statement

Check if a string reads the same forwards and backwards.

### Examples

```
Palindrome: "naman", "madam", "racecar", "nitin"
Not Palindrome: "Tanish", "hello", "world"
```

### Two-Pointer Approach

```cpp
bool isPalindrome(string s) {
    int start = 0;
    int end = s.size() - 1;

    while (start < end) {
        if (s[start] != s[end]) {
            return false;  // Mismatch found
        }
        start++;
        end--;
    }
    return true;  // All characters matched
}
```

### Visual Dry Run for "naman"

```
Step 1: n a m a n
        ↑       ↑
      start    end → n == n ✓

Step 2: n a m a n
          ↑   ↑
        start end → a == a ✓

Step 3: n a m a n
            ↑
        start == end → stop

Result: true (palindrome)
```

### Visual Dry Run for "Tanish"

```
Step 1: r o h i t
        ↑       ↑
      start    end → r != t ✗
Result: false (not palindrome)
```

### Complete Code

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "naman";
    string s2 = "Tanish";

    // Check s1
    bool isPal = true;
    int start = 0;
    int end = s1.size() - 1;

    while (start < end) {
        if (s1[start] != s1[end]) {
            isPal = false;
            break;
        }
        start++;
        end--;
    }

    cout << s1 << " is palindrome: " << (isPal ? "Yes" : "No") << endl;

    // Check s2
    isPal = true;
    start = 0;
    end = s2.size() - 1;

    while (start < end) {
        if (s2[start] != s2[end]) {
            isPal = false;
            break;
        }
        start++;
        end--;
    }

    cout << s2 << " is palindrome: " << (isPal ? "Yes" : "No") << endl;

    return 0;
}
```

---

## 📊 String Functions Summary

| Function          | Description              | Example            |
| ----------------- | ------------------------ | ------------------ |
| `s.size()`        | Returns length of string | `s.size()` → 5     |
| `s.length()`      | Same as size()           | `s.length()` → 5   |
| `s.push_back(c)`  | Adds character at end    | `s.push_back('P')` |
| `s.pop_back()`    | Removes last character   | `s.pop_back()`     |
| `s1 + s2`         | Concatenates strings     | `s3 = s1 + s2`     |
| `s1.append(s2)`   | Appends s2 to s1         | `s1.append(s2)`    |
| `getline(cin, s)` | Reads line with spaces   | `getline(cin, s)`  |

---

## 🎯 Key Takeaways

### 1. **Null Character (`\0`)**

- Marks the end of string
- Automatically added by compiler
- Used to determine string length

### 2. **Strings vs Character Arrays**

| Feature     | Character Array | String    |
| ----------- | --------------- | --------- |
| Size        | Fixed           | Dynamic   |
| Memory      | Stack           | Heap      |
| Flexibility | Low             | High      |
| Ease of use | Manual          | Automatic |

### 3. **When to Use Strings**

- Variable length text
- User input of unknown size
- Text manipulation
- Avoiding memory wastage

### 4. **Escape Characters**

- Use `\` to print special characters
- Common: `\"`, `\\`, `\n`, `\t`

### 5. **Two-Pointer Technique**

- Useful for reversal, palindrome checking
- Start from both ends, move inward

---

## 📝 Practice Problems

1. Reverse a string
2. Check if string is palindrome
3. Count vowels in a string
4. Convert string to uppercase/lowercase
5. Remove all spaces from string
6. Find frequency of characters
7. Check if two strings are anagrams
8. Find first non-repeating character

---

## 💡 Pro Tips

1. Always use `getline()` when input contains spaces
2. Remember that strings are **0-indexed**
3. Null character is **not counted** in size()
4. Strings support **direct indexing** like arrays: `s[0]`, `s[1]`
5. Strings are **mutable** in C++ (can change individual characters)

> **"Strings are just dynamic character arrays with superpowers!"**
