# PROBLEM (Original Statement)

Given a string **S**, check whether the string is a **palindrome**.

A palindrome is a string that reads the same **forward and backward**.

Example:

```
Input:  "madam"
Output: true

Input:  "hello"
Output: false
```

---

# Topics/Patterns

### Topic

Strings + Recursion

Why:
We will recursively compare characters from both ends.

---

### Patterns

**Two Pointer Pattern**

```
left pointer → start
right pointer → end
```

Compare characters moving inward.

This is the most common pattern for:

- Palindrome check
- Reverse string
- Two pointer problems

---

# BREAKDOWN PROBLEM

### What is being asked?

Determine if the string reads the same:

```
left → right
right → left
```

Example:

```
madam

forward  = madam
backward = madam
```

So it is a palindrome.

---

### Input

```
String S
```

Example

```
"racecar"
```

---

### Output

Boolean result

```
true  → palindrome
false → not palindrome
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints

```
1 ≤ length ≤ 10^5
```

Observations:

We must check characters from both ends.

Best possible complexity:

```
Time → O(N)
Space → O(1)
```

---

# BRUTE FORCE APPROACH

## First Thought Intuition

First natural idea:

Reverse the string and compare.

Example

```
Original = madam
Reverse  = madam
```

If equal → palindrome.

---

## Thought Process (Step-wise)

1. Reverse the string
2. Compare with original
3. If equal → palindrome

---

## Pseudocode

```
reverse_string = reverse(original)

if reverse_string == original
    return true
else
    return false
```

---

## Algorithm

1. Reverse the string
2. Compare both strings
3. Return result

---

# CODE

## C++

### V1 (Required Function)

```cpp
bool isPalindrome(string s)
{
    string rev = s;

    reverse(rev.begin(), rev.end());

    return rev == s;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

bool isPalindrome(string s)
{
    string rev = s;

    reverse(rev.begin(), rev.end());

    return rev == s;
}

int main()
{
    string s;

    cout << "Enter string: ";
    cin >> s;

    if(isPalindrome(s))
        cout << "Palindrome";
    else
        cout << "Not Palindrome";

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(N)
```

Reverse operation takes N.

---

### Space Complexity

```
O(N)
```

Extra string created.

---

# Dry Run

Input

```
madam
```

Reverse

```
madam
```

Compare

```
equal → palindrome
```

---

# Edge Cases

```
Single character → palindrome
Empty string → palindrome
```

---

# How This Approach Handles the Problem

It reverses the string and checks equality.

---

# Does This Approach Fail?

Not logically.

But it is **not optimal** because:

```
Extra memory used
```

So we move to better approach.

---

# BETTER APPROACH

## First Thought Intuition

Instead of reversing the string, compare characters directly.

Example

```
racecar
^     ^
```

Compare first and last.

Then move inward.

---

## Thought Process

```
left = 0
right = n-1
```

Compare characters.

If mismatch → not palindrome.

---

## Pseudocode

```
left = 0
right = n-1

while left < right
    if s[left] != s[right]
        return false

    left++
    right--

return true
```

---

## Algorithm

1. Initialize two pointers
2. Compare characters
3. Move pointers inward
4. If mismatch → false
5. Otherwise palindrome

---

# CODE

## C++

### V1

```cpp
bool isPalindrome(string s)
{
    int left = 0;
    int right = s.size() - 1;

    while(left < right)
    {
        if(s[left] != s[right])
            return false;

        left++;
        right--;
    }

    return true;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

bool isPalindrome(string s)
{
    int left = 0;
    int right = s.size() - 1;

    while(left < right)
    {
        if(s[left] != s[right])
            return false;

        left++;
        right--;
    }

    return true;
}

int main()
{
    string s;

    cout << "Enter string: ";
    cin >> s;

    if(isPalindrome(s))
        cout << "Palindrome";
    else
        cout << "Not Palindrome";

    return 0;
}
```

---

# Time and Space Complexity

Time

```
O(N)
```

Space

```
O(1)
```

---

# Dry Run

Example

```
racecar
```

Step 1

```
r == r
```

Step 2

```
a == a
```

Step 3

```
c == c
```

Middle reached → palindrome.

---

# Edge Cases

```
length = 1
length = 0
```

Handled automatically.

---

# Does This Approach Fail?

No.

But today’s focus is **recursion**, so we show recursive approach.

---

# OPTIMAL APPROACH (RECURSION)

## First Thought Intuition

Same logic as two pointers.

But recursion handles pointer movement.

Example:

```
check first and last
then solve smaller substring
```

---

## Thought Process

Example:

```
racecar
```

Step 1

```
compare r and r
```

Then solve

```
aceca
```

---

## Pseudocode

```
checkPalindrome(s, left, right)

if left >= right
    return true

if s[left] != s[right]
    return false

return checkPalindrome(s, left+1, right-1)
```

---

## Algorithm

1. Compare characters
2. Reduce problem size
3. Continue recursion

---

# CODE

## C++

### V1

```cpp
bool checkPalindrome(string &s, int left, int right)
{
    if(left >= right)
        return true;

    if(s[left] != s[right])
        return false;

    return checkPalindrome(s, left + 1, right - 1);
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

bool checkPalindrome(string &s, int left, int right)
{
    if(left >= right)
        return true;

    if(s[left] != s[right])
        return false;

    return checkPalindrome(s, left + 1, right - 1);
}

int main()
{
    string s;

    cout << "Enter string: ";
    cin >> s;

    if(checkPalindrome(s, 0, s.size() - 1))
        cout << "Palindrome";
    else
        cout << "Not Palindrome";

    return 0;
}
```

---

# Time and Space Complexity

Time

```
O(N)
```

Space

```
O(N)
```

(recursion stack)

---

# Pattern Recognition (Very Important)

Whenever you see problems like:

```
palindrome
reverse string
two-end comparisons
```

Think immediately:

```
Two Pointer Pattern
```

or

```
Recursive shrinking window
```

---
