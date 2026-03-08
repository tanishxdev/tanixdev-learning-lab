# PROBLEM (Original Statement)

Given an array of integers, count the frequency of each element in the array.

Return or print how many times every element appears.

Example:

Input:

```
arr = [1,2,2,3,3,3,4]
```

Output:

```
1 -> 1
2 -> 2
3 -> 3
4 -> 1
```

---

## Topics/Patterns

**Topic**

- Hashing
  Because we need to store how many times each number appears.

**Patterns**

- Frequency Counting Pattern
- Hash Table / Map usage
- Brute Force → Nested comparison
- Better/Optimal → Hash Map

---

# BREAKDOWN PROBLEM

Explain the problem in simple thinking.

We are given:

```
array = [numbers]
```

We must determine:

For each unique number
→ how many times it appears.

Example:

```
[1,2,2,3,3,3]
```

Count:

```
1 appears 1 time
2 appears 2 times
3 appears 3 times
```

Input:

- Integer array

Output:

- Frequency of each element

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ n ≤ 10^5
values can be large
```

Important observations:

If we use **nested loops**

Time Complexity:

```
O(n²)
```

If n is large (100000)
This will be very slow.

So we need a faster structure.

That is why **Hashing** is used.

Hashing allows:

```
Insert -> O(1)
Lookup -> O(1)
```

---

# BRUTE FORCE APPROACH

## First Thought Intuition

The first natural idea:

For every element
scan the entire array and count occurrences.

Example:

```
[1,2,2,3]
```

For element 1
check entire array.

For element 2
check entire array.

For element 3
check entire array.

This works but repeats work many times.

---

## Thought Process (Step-wise)

Steps:

1. Take first element
2. Count how many times it appears
3. Print frequency
4. Move to next element
5. Avoid recounting elements already counted

---

## Pseudocode

```
for i from 0 to n-1

    count = 0

    for j from 0 to n-1
        if arr[i] == arr[j]
            count++

    print arr[i], count
```

But this prints duplicates.

So we must skip already processed numbers.

---

## Algorithm

1. Loop i from 0 → n-1
2. Check if element already processed
3. If not processed
4. Count frequency using second loop
5. Print result

---

## CODE

### C++

#### V1 (Only Required Function)

```cpp
void countFrequency(vector<int>& arr) {
    int n = arr.size();

    for(int i = 0; i < n; i++) {

        bool visited = false;

        // check if already counted
        for(int j = 0; j < i; j++) {
            if(arr[i] == arr[j]) {
                visited = true;
                break;
            }
        }

        if(visited) continue;

        int count = 0;

        // count occurrences
        for(int j = 0; j < n; j++) {
            if(arr[i] == arr[j])
                count++;
        }

        cout << arr[i] << " -> " << count << endl;
    }
}
```

---

#### V2 (Complete Program)

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {

    vector<int> arr = {1,2,2,3,3,3,4};

    int n = arr.size();

    for(int i = 0; i < n; i++) {

        bool visited = false;

        // check if element already counted earlier
        for(int j = 0; j < i; j++) {

            if(arr[i] == arr[j]) {
                visited = true;
                break;
            }

        }

        if(visited)
            continue;

        int count = 0;

        // count frequency
        for(int j = 0; j < n; j++) {

            if(arr[i] == arr[j])
                count++;

        }

        cout << arr[i] << " -> " << count << endl;
    }

}
```

---

## Time and Space Complexity

Time Complexity:

```
Outer loop = n
Inner loop = n
```

Total:

```
O(n²)
```

Space Complexity:

```
O(1)
```

No extra storage.

---

## Dry Run (All Cases)

Example:

```
arr = [1,2,2,3]
```

i = 0

element = 1

count loop:

```
1 match → count = 1
```

print:

```
1 -> 1
```

---

i = 1

element = 2

count:

```
2 matches
```

print:

```
2 -> 2
```

---

i = 2

element = 2

Already counted → skip

---

i = 3

element = 3

count:

```
1
```

print:

```
3 -> 1
```

---

## Edge Cases

Empty array

```
[]
```

Single element

```
[5]
```

All same elements

```
[7,7,7,7]
```

All unique

```
[1,2,3,4]
```

---

## How This Approach Handles the Problem

It checks every element against every other element.

So it will always count correctly.

But it repeats a lot of work.

---

## Does This Approach Fail?

Yes.

When:

```
n = 100000
```

Time becomes:

```
n² = 10^10 operations
```

This is too slow.

So we need a better approach.

---

# BETTER APPROACH

## First Thought Intuition

Instead of scanning the array repeatedly,

store frequency while scanning once.

Idea:

Use **Hash Map**

```
number → frequency
```

Example:

```
1 -> 1
2 -> 2
3 -> 3
```

---

## Thought Process (Step-wise)

Traverse array once.

For each element:

```
frequency[element]++
```

Hash map automatically stores counts.

---

## Pseudocode

```
create map freq

for element in array
    freq[element]++

print map
```

---

## Algorithm

1. Create unordered_map
2. Traverse array
3. Increment frequency
4. Print results

---

## CODE

### C++

#### V1 (Only Required Function)

```cpp
void countFrequency(vector<int>& arr) {

    unordered_map<int,int> freq;

    for(int num : arr)
        freq[num]++;

    for(auto it : freq)
        cout << it.first << " -> " << it.second << endl;

}
```

---

#### V2 (Complete Program with main and tests)

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {

    vector<int> arr = {1,2,2,3,3,3,4};

    unordered_map<int,int> freq;

    // count frequencies
    for(int num : arr) {

        freq[num]++;

    }

    // print results
    for(auto it : freq) {

        cout << it.first << " -> " << it.second << endl;

    }

}
```

---

## Time and Space Complexity

Time Complexity:

```
O(n)
```

One traversal.

Space Complexity:

```
O(n)
```

Hash map storage.

---

## Dry Run (All Cases)

Input:

```
[1,2,2,3]
```

Step 1

```
map[1] = 1
```

Step 2

```
map[2] = 1
```

Step 3

```
map[2] = 2
```

Step 4

```
map[3] = 1
```

Final:

```
1 -> 1
2 -> 2
3 -> 1
```

---

## Edge Cases

Works for:

- negative numbers
- large numbers
- duplicates
- single element

---

## How This Approach Handles the Problem

Hash map stores counts directly.

So we avoid repeated scanning.

---

## Does This Approach Fail?

No.

This works efficiently for large inputs.

So we **do not need a third approach**.
