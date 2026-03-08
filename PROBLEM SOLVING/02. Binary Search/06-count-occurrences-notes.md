# FIND FIRST AND LAST POSITION OF ELEMENT IN SORTED ARRAY (LC-34)

[ 34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

---

## 1. Problem Statement

You are given a **sorted array** `nums` (non-decreasing order) and an integer `target`.

Your task is to find:

- the **first index** where `target` appears
- the **last index** where `target` appears

If `target` is **not present**, return `[-1, -1]`.

**Constraint:**
Time complexity must be **O(log n)**.

---

## 2. Why Binary Search? (Important)

- The array is **sorted**
- We are asked for **logarithmic time**
- Linear scan (`O(n)`) is not allowed

So the only valid approach is **Binary Search**.

---

## 3. Core Insight (Mental Model)

This problem is a **position-based version of Floor & Ceil**.

### Mapping:

- **First occurrence**
  → behaves like **CEIL index**
  → first index where `nums[i] == target`

- **Last occurrence**
  → behaves like **FLOOR index**
  → last index where `nums[i] == target`

Important:

- We return **indices**, not values
- So we modify binary search to **continue searching even after finding target**

---

## 4. Key Idea

We perform **two binary searches**:

1. **Leftmost Binary Search**
   - when `nums[mid] == target`
   - store index
   - move left (`high = mid - 1`)

2. **Rightmost Binary Search**
   - when `nums[mid] == target`
   - store index
   - move right (`low = mid + 1`)

---

## 5. Algorithm (Step-by-Step)

### Step 1: Find First Occurrence

- Initialize `ans = -1`
- Standard binary search
- On match:
  - save `mid`
  - move left

### Step 2: Find Last Occurrence

- Initialize `ans = -1`
- Standard binary search
- On match:
  - save `mid`
  - move right

### Step 3:

- If first index = `-1`, return `[-1, -1]`
- Else return `[first, last]`

---

## 6. Pseudocode

```
function findFirst(nums, target):
    low = 0, high = n-1
    ans = -1
    while low <= high:
        mid = (low + high) / 2
        if nums[mid] == target:
            ans = mid
            high = mid - 1
        else if nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return ans

function findLast(nums, target):
    low = 0, high = n-1
    ans = -1
    while low <= high:
        mid = (low + high) / 2
        if nums[mid] == target:
            ans = mid
            low = mid + 1
        else if nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return ans
```

---

## 7. Code (C++ – Function Based, Clean)

### Version 1: Required Functions Only

```cpp
int findFirst(vector<int>& nums, int target)
{
    int low = 0, high = nums.size() - 1;
    int ans = -1;

    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        if (nums[mid] == target)
        {
            ans = mid;
            high = mid - 1;   // move left
        }
        else if (nums[mid] < target)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    return ans;
}

int findLast(vector<int>& nums, int target)
{
    int low = 0, high = nums.size() - 1;
    int ans = -1;

    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        if (nums[mid] == target)
        {
            ans = mid;
            low = mid + 1;   // move right
        }
        else if (nums[mid] < target)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    return ans;
}

vector<int> searchRange(vector<int>& nums, int target)
{
    int first = findFirst(nums, target);
    if (first == -1) return {-1, -1};

    int last = findLast(nums, target);
    return {first, last};
}
```

---

## 8. Dry Run Example

### Input:

```
nums = [5,7,7,8,8,10]
target = 8
```

### First Occurrence Search:

- mid = 2 → 7 < 8 → right
- mid = 4 → 8 == 8 → ans = 4 → move left
- mid = 3 → 8 == 8 → ans = 3 → move left
- stop → first = 3

### Last Occurrence Search:

- mid = 2 → 7 < 8 → right
- mid = 4 → 8 == 8 → ans = 4 → move right
- stop → last = 4

### Output:

```
[3, 4]
```

---

## 9. Edge Cases

| Case                    | Output   |
| ----------------------- | -------- |
| target not present      | [-1, -1] |
| single element match    | [0, 0]   |
| all elements same       | [0, n-1] |
| target smaller than all | [-1, -1] |
| target larger than all  | [-1, -1] |

---

## 10. Time & Space Complexity

- **Time:** `O(log n)`
- **Space:** `O(1)`

---

## 11. Interview Explanation (30 seconds)

> The array is sorted, so I use binary search.
> I run two binary searches: one to find the first occurrence by moving left after a match, and one to find the last occurrence by moving right after a match.
> This ensures O(log n) time and returns correct boundary indices even with duplicates.

---

## 12. Relation to Floor & Ceil (Conceptual)

- First occurrence = **Ceil index**
- Last occurrence = **Floor index**
- Difference: we return **indices**, not values
