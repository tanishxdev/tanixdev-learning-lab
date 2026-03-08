# PROBLEM(Original Statement)

Given an array of integers, **find the element that appears the maximum number of times** (highest frequency).

If multiple elements have the same maximum frequency, return **any one of them** (or the first encountered depending on problem rules).

Example:

```
Input:
arr = [1,2,2,3,3,3,4]

Output:
3
```

Because:

```
1 → 1 time
2 → 2 times
3 → 3 times
4 → 1 time
```

So **3 appears most frequently**.

---

#Topics / Patterns

### Topic

**Hashing / Frequency Counting**

Because we need to count occurrences of numbers.

### Patterns

1. **Brute Force Pattern**
   - Nested loop counting

2. **Frequency Hashing Pattern**
   - Store counts in hashmap

3. **Tracking Maximum Pattern**
   - Maintain running maximum frequency

---

#BREAKDOWN PROBLEM

We are given an array:

```
arr = [numbers]
```

We must find:

```
which number appears the most times
```

Example:

```
arr = [4,4,2,2,2,7]
```

Frequency:

```
4 → 2
2 → 3
7 → 1
```

Answer:

```
2
```

---

#CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ n ≤ 10^5
values may be large
```

Implication:

Brute force:

```
O(n²)
```

Hashing approach:

```
O(n)
```

For large `n`, hashing is preferred.

---

#BRUTE FORCE APPROACH

## First Thought Intuition

Natural thinking:

For every element:

```
count how many times it appears
```

Then track:

```
maximum frequency element
```

---

## Thought Process (Step-wise)

Steps:

1. Pick element `arr[i]`
2. Count occurrences in entire array
3. Compare with current maximum
4. Update answer if larger frequency found

---

## Pseudocode

```
maxFreq = 0
answer = arr[0]

for i = 0 → n-1

    count = 0

    for j = 0 → n-1
        if arr[i] == arr[j]
            count++

    if count > maxFreq
        maxFreq = count
        answer = arr[i]

return answer
```

---

## Algorithm

1. Loop through each element
2. Count frequency using inner loop
3. Track maximum frequency
4. Return corresponding element

---

#CODE

## C++

### V1 (Only Required Function)

```cpp
int highestFrequency(vector<int>& arr)
{

    int n = arr.size();

    int maxFreq = 0;
    int element = arr[0];

    for (int i = 0; i < n; i++)
    {

        int count = 0;

        for (int j = 0; j < n; j++)
        {

            if (arr[i] == arr[j])
                count++;
        }

        if (count > maxFreq)
        {

            maxFreq = count;
            element = arr[i];
        }
    }

    return element;
}
```

    -- -

    ## #V2(Complete Program)

```cpp
#include <iostream>
#include <vector>
    using namespace std;

int main()
{

    vector<int> arr = {1, 2, 2, 3, 3, 3, 4};

    int n = arr.size();

    int maxFreq = 0;
    int element = arr[0];

    for (int i = 0; i < n; i++)
    {

        int count = 0;

        for (int j = 0; j < n; j++)
        {

            if (arr[i] == arr[j])
                count++;
        }

        if (count > maxFreq)
        {

            maxFreq = count;
            element = arr[i];
        }
    }

    cout << "Element with highest frequency: " << element << endl;
}
```

---

#Time and Space Complexity

### Time Complexity

Outer loop:

```
n
```

Inner loop:

```
n
```

Total:

```
O(n²)
```

---

### Space Complexity

```
O(1)
```

No extra storage.

---

#Dry Run(All Cases)

Example:

```
arr = [1,2,2,3,3,3]
```

Iteration 1:

```
element = 1
count = 1
maxFreq = 1
```

Iteration 2:

```
element = 2
count = 2
maxFreq = 2
```

Iteration 3:

```
element = 3
count = 3
maxFreq = 3
```

Answer:

```
3
```

---

#Edge Cases

Single element

```
[5]
```

Answer:

```
5
```

All same numbers

```
[7,7,7,7]
```

Answer:

```
7
```

All unique numbers

```
[1,2,3,4]
```

Any element could be answer.

---

#How This Approach Handles the Problem

It compares every element with every other element.

Therefore frequency is counted correctly.

---

#Does This Approach Fail ?

Yes.

For large inputs:

```
n = 100000
```

Operations:

```
n² = 10¹⁰
```

Too slow.

We need a faster approach.

---

#BETTER APPROACH

## First Thought Intuition

Instead of repeatedly scanning the array:

Store frequencies **while traversing once**.

Use **hash map**.

```
number → frequency
```

---

## Thought Process (Step-wise)

1. Traverse array
2. Store counts in hashmap
3. Track element with highest frequency

---

## Pseudocode

```
map freq

for num in arr
    freq[num]++

maxFreq = 0
answer = -1

for each (num,count) in freq

    if count > maxFreq
        maxFreq = count
        answer = num
```

---

## Algorithm

1. Create unordered_map
2. Count frequencies
3. Track maximum frequency
4. Return element

---

#CODE

## C++

### V1 (Only Required Function)

```cpp
int highestFrequency(vector<int>& arr)
{

    unordered_map<int, int> freq;

    for (int num : arr)
        freq[num]++;

    int maxFreq = 0;
    int element = -1;

    for (auto it : freq)
    {

        if (it.second > maxFreq)
        {

            maxFreq = it.second;
            element = it.first;
        }
    }

    return element;
}
```

    -- -

    ## #V2(Complete Program)

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
    using namespace std;

int main()
{

    vector<int> arr = {1, 2, 2, 3, 3, 3, 4};

    unordered_map<int, int> freq;

    for (int num : arr)
        freq[num]++;

    int maxFreq = 0;
    int element = -1;

    for (auto it : freq)
    {

        if (it.second > maxFreq)
        {

            maxFreq = it.second;
            element = it.first;
        }
    }

    cout << "Highest frequency element: " << element << endl;
}
```

---

#Time and Space Complexity

Time Complexity:

```
O(n)
```

Space Complexity:

```
O(n)
```

---

#Dry Run

Input:

```
[1,2,2,3,3,3]
```

Hash map after counting:

```
1 → 1
2 → 2
3 → 3
```

Maximum frequency:

```
3
```

Answer:

```
3
```

---

#Edge Cases

Works for:

- negative numbers
- duplicates
- large values
- large arrays

---

#How This Approach Handles the Problem

It counts frequencies once and tracks the maximum.

Avoids repeated scanning.

---

#Why This Is Optimal

Because:

```
Lower bound = O(n)
```

We must at least read all elements.

Hashing achieves that.

So **O(n)** is optimal.

---
