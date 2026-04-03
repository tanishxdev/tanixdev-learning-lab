# PROBLEM (Original Statement)

Given an array of integers, sort it in **non-decreasing order** using:

- Selection Sort
- Bubble Sort
- Insertion Sort

---

# BREAKDOWN PROBLEM

## What is being asked?

- Rearrange array such that:

```text
arr[i] <= arr[i+1]
```

---

## Input

- Unsorted array

## Output

- Sorted array

---

# CONSTRAINT UNDERSTANDING

- n can be large → O(N²) okay for learning, not for large constraints
- No extra space preferred

---

# BRUTE FORCE APPROACH

There is **no brute → better → optimal chain here**
All 3 are different sorting strategies (O(N²))

So we treat them as **3 independent patterns**

---

# 1. SELECTION SORT

---

## First Thought Intuition

"Har position pe correct element fix karo"

---

## Thought Process

1. Start from index 0
2. Find minimum in rest of array
3. Swap with current index
4. Repeat

---

## Pseudocode

```text
for i = 0 → n-1
    find minimum from i → n-1
    swap with i
```

---

## CODE (C++)

### V1

```cpp
void selectionSort(int arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        int minIndex = i;

        for(int j = i+1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        swap(arr[i], arr[minIndex]);
    }
}
```

---

### V2 (Complete)

```cpp
#include<bits/stdc++.h>
using namespace std;

void selectionSort(int arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        int minIndex = i; // assume current is minimum

        // find actual minimum
        for(int j = i+1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // place minimum at correct position
        swap(arr[i], arr[minIndex]);
    }
}

int main() {
    int arr[] = {13,46,24,52,20,9};
    int n = 6;

    selectionSort(arr,n);

    for(int i=0;i<n;i++) cout<<arr[i]<<" ";
}
```

---

## Time & Space

- TC → O(N²)
- SC → O(1)

---

## Pattern Recognition

```text
SELECT → PLACE
(minimum ko pick karo → correct jagah pe rakho)
```

---

# 2. BUBBLE SORT

---

## First Thought Intuition

"Adjacent compare karo aur bada element end tak push karo"

---

## Thought Process

1. Compare adjacent elements
2. Swap if wrong order
3. Largest goes to end
4. Repeat

---

## Pseudocode

```text
for i = n-1 → 0
    for j = 0 → i-1
        if arr[j] > arr[j+1]
            swap
```

---

## CODE (C++)

### V1

```cpp
void bubbleSort(vector<int>& arr) {
    int n = arr.size();

    for(int i = n-1; i >= 0; i--) {
        for(int j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}
```

---

### V2 (Optimized)

```cpp
#include<bits/stdc++.h>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();

    for(int i = n-1; i >= 0; i--) {
        bool swapped = false;

        for(int j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
                swapped = true;
            }
        }

        // optimization: already sorted
        if(!swapped) break;
    }
}

int main() {
    vector<int> arr = {13,46,24,52,20,9};

    bubbleSort(arr);

    for(int x:arr) cout<<x<<" ";
}
```

---

## Time & Space

- TC → O(N²)
- Best Case → O(N)
- SC → O(1)

---

## Pattern Recognition

```text
BUBBLE → PUSH MAX TO END
```

---

# 3. INSERTION SORT

---

## First Thought Intuition

"Jaise cards arrange karte ho"

---

## Thought Process

1. Take one element
2. Insert into correct position in sorted part
3. Shift elements

---

## Pseudocode

```text
for i = 1 → n-1
    key = arr[i]
    shift elements > key
    insert key
```

---

## CODE (C++)

### V1

```cpp
void insertionSort(vector<int>& arr) {
    int n = arr.size();

    for(int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = key;
    }
}
```

---

### V2 (Complete)

```cpp
#include<bits/stdc++.h>
using namespace std;

void insertionSort(vector<int>& arr) {
    int n = arr.size();

    for(int i = 1; i < n; i++) {
        int key = arr[i]; // element to insert
        int j = i - 1;

        // shift larger elements
        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }

        // place key
        arr[j+1] = key;
    }
}

int main() {
    vector<int> arr = {13,46,24,52,20,9};

    insertionSort(arr);

    for(int x:arr) cout<<x<<" ";
}
```

---

## Time & Space

- TC → O(N²)
- Best Case → O(N)
- SC → O(1)

---

## Pattern Recognition

```text
INSERT → SHIFT → PLACE
```

---

# FINAL COMPARISON (VERY IMPORTANT)

| Algorithm      | Idea              | Best Case | Stable | Use Case              |
| -------------- | ----------------- | --------- | ------ | --------------------- |
| Selection Sort | Select min        | O(N²)     | No     | Simple understanding  |
| Bubble Sort    | Push max          | O(N)      | Yes    | Detect sorted array   |
| Insertion Sort | Insert like cards | O(N)      | Yes    | Small / nearly sorted |

---

# MASTER PATTERN (INTERVIEW GOLD)

## If you see:

### 1. "Fix element one by one"

→ Selection Sort

### 2. "Swap adjacent / push max"

→ Bubble Sort

### 3. "Insert into sorted part"

→ Insertion Sort

---

# MINDSET (IMPORTANT FOR YOU)

```text
Selection → Fix position

Bubble → Push extreme

Insertion → Build sorted gradually
```
