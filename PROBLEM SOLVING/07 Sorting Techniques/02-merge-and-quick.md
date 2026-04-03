# PROBLEM (Original Statement)

Sort an array using:

- Merge Sort
- Quick Sort

---

# BREAKDOWN PROBLEM

## What is being asked?

Sort array efficiently for **large inputs**

---

## Key Shift from Previous (IMPORTANT)

Earlier:

```text
O(N²) sorting (Selection, Bubble, Insertion)
```

Now:

```text
O(N log N) sorting (Divide & Conquer)
```

---

# CONSTRAINT UNDERSTANDING

- n can be large → up to 10^5 or more
- O(N²) → will TLE
- Need efficient recursion-based solution

---

# MERGE SORT

---

# OPTIMAL APPROACH (DIVIDE & CONQUER)

## First Thought Intuition

"Big problem ko chhote parts me tod do, phir merge karo"

---

## Thought Process (Step-wise)

1. Divide array into 2 halves
2. Recursively sort both halves
3. Merge sorted halves

---

## Mental Model

```text
[5,2,8,4,1]

→ split
[5,2]   [8,4,1]

→ split again
[5] [2] [8] [4] [1]

→ merge
[2,5]   [1,4,8]

→ final merge
[1,2,4,5,8]
```

---

## Pseudocode

```text
mergeSort(arr, low, high):
    if low >= high → return

    mid = (low + high)/2

    mergeSort(left)
    mergeSort(right)

    merge both
```

---

## CODE (C++)

### V1

```cpp
void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> temp;

    int i = l, j = m+1;

    while(i <= m && j <= r) {
        if(arr[i] <= arr[j]) temp.push_back(arr[i++]);
        else temp.push_back(arr[j++]);
    }

    while(i <= m) temp.push_back(arr[i++]);
    while(j <= r) temp.push_back(arr[j++]);

    for(int k = l; k <= r; k++) {
        arr[k] = temp[k - l];
    }
}

void mergeSort(vector<int>& arr, int l, int r) {
    if(l >= r) return;

    int mid = (l + r)/2;

    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, r);

    merge(arr, l, mid, r);
}
```

---

### V2 (Complete Program)

```cpp
#include<bits/stdc++.h>
using namespace std;

// Merge function
void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> temp;
    int i = l, j = m+1;

    // merge two sorted halves
    while(i <= m && j <= r) {
        if(arr[i] <= arr[j]) temp.push_back(arr[i++]);
        else temp.push_back(arr[j++]);
    }

    // remaining elements
    while(i <= m) temp.push_back(arr[i++]);
    while(j <= r) temp.push_back(arr[j++]);

    // copy back
    for(int k = l; k <= r; k++) {
        arr[k] = temp[k - l];
    }
}

void mergeSort(vector<int>& arr, int l, int r) {
    if(l >= r) return;

    int mid = (l + r)/2;

    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, r);

    merge(arr, l, mid, r);
}

int main() {
    vector<int> arr = {5,2,8,4,1};

    mergeSort(arr, 0, arr.size()-1);

    for(int x : arr) cout << x << " ";
}
```

---

## Time and Space Complexity

- TC → O(N log N)
- SC → O(N)

---

## Key Insight

```text
Divide → Sort → Merge
```

---

## Why Merge Sort is Powerful

- Always O(N log N)
- Stable
- Good for linked lists

---

# QUICK SORT

---

# OPTIMAL APPROACH (PARTITION BASED)

## First Thought Intuition

"Ek pivot choose karo → usko correct position pe daalo"

---

## Thought Process

1. Pick pivot
2. Put:
   - smaller → left
   - larger → right

3. Recursively solve both sides

---

## Mental Model

```text
[10,7,8,9,1,5]

pivot = 5

→ [1 | 5 | 10,7,8,9]

→ sort left & right
```

---

## Pseudocode

```text
quickSort(arr, low, high):
    pivotIndex = partition()

    quickSort(left)
    quickSort(right)
```

---

## CODE (C++)

### V1

```cpp
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for(int j = low; j < high; j++) {
        if(arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    swap(arr[i+1], arr[high]);
    return i+1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if(low < high) {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}
```

---

### V2 (Complete Program)

```cpp
#include<bits/stdc++.h>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high]; // choose last as pivot
    int i = low - 1;

    for(int j = low; j < high; j++) {
        if(arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    // place pivot correctly
    swap(arr[i+1], arr[high]);

    return i+1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if(low < high) {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}

int main() {
    vector<int> arr = {10,7,8,9,1,5};

    quickSort(arr, 0, arr.size()-1);

    for(int x : arr) cout << x << " ";
}
```

---

## Time and Space Complexity

| Case  | TC         |
| ----- | ---------- |
| Best  | O(N log N) |
| Avg   | O(N log N) |
| Worst | O(N²)      |

- SC → O(log N)

---

## Why Quick Sort is Powerful

- Very fast in practice
- In-place
- Cache-friendly

---

# FINAL COMPARISON (IMPORTANT)

| Feature    | Merge Sort        | Quick Sort     |
| ---------- | ----------------- | -------------- |
| TC         | Always O(N log N) | Avg O(N log N) |
| Worst Case | Safe              | O(N²)          |
| Space      | O(N)              | O(log N)       |
| Stable     | Yes               | No             |
| In-place   | No                | Yes            |

---

# MASTER PATTERN RECOGNITION

## If problem says:

### "Divide into halves + merge"

→ Merge Sort

---

### "Pivot + partition"

→ Quick Sort

---

# DEEP MINDSET (VERY IMPORTANT)

```text
Merge Sort → SAFE but uses memory

Quick Sort → FAST but risky (pivot choice)
```

---

# INTERVIEW INSIGHT

- If interviewer says:
  - "Stable required" → Merge Sort
  - "In-place needed" → Quick Sort
  - "Worst-case guaranteed" → Merge Sort

---
