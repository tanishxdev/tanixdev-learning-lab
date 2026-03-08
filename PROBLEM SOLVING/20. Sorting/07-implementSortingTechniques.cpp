#include <iostream>
#include <vector>
using namespace std;

/*
===========================================================
SELECTION SORT
===========================================================

Idea:
Each iteration selects the smallest element from the
unsorted portion and places it at the correct position.

Pattern:
Sorted Part | Unsorted Part

Time Complexity:
O(n^2)

Space Complexity:
O(1)
*/

void selectionSort(vector<int> &arr)
{
  int n = arr.size();

  for (int i = 0; i < n - 1; i++)
  {
    int minIndex = i;

    // find the smallest element in remaining array
    for (int j = i + 1; j < n; j++)
    {
      if (arr[j] < arr[minIndex])
      {
        minIndex = j;
      }
    }

    // place smallest element at correct position
    swap(arr[i], arr[minIndex]);
  }
}

/*
===========================================================
BUBBLE SORT
===========================================================

Idea:
Repeatedly swap adjacent elements if they are in
wrong order.

Largest element moves to the end after each pass.

Time Complexity:
Worst: O(n^2)
Best: O(n)

Space Complexity:
O(1)
*/

void bubbleSort(vector<int> &arr)
{
  int n = arr.size();

  for (int i = 0; i < n - 1; i++)
  {
    bool swapped = false;

    for (int j = 0; j < n - i - 1; j++)
    {
      if (arr[j] > arr[j + 1])
      {
        swap(arr[j], arr[j + 1]);
        swapped = true;
      }
    }

    // if no swap occurs → array already sorted
    if (!swapped)
      break;
  }
}

/*
===========================================================
INSERTION SORT
===========================================================

Idea:
Builds the sorted array one element at a time.

Pattern:
Sorted Prefix

Example:
[3,8] | [5,2]

Insert next element into correct position.

Time Complexity:
Worst: O(n^2)
Best: O(n)

Space Complexity:
O(1)
*/

void insertionSort(vector<int> &arr)
{
  int n = arr.size();

  for (int i = 1; i < n; i++)
  {
    int key = arr[i]; // element to insert
    int j = i - 1;

    // shift elements greater than key
    while (j >= 0 && arr[j] > key)
    {
      arr[j + 1] = arr[j];
      j--;
    }

    // place element at correct position
    arr[j + 1] = key;
  }
}

/*
===========================================================
UTILITY FUNCTION
===========================================================
*/

void printArray(vector<int> &arr)
{
  for (int num : arr)
    cout << num << " ";

  cout << endl;
}

/*
===========================================================
MAIN FUNCTION
===========================================================
*/

int main()
{
  vector<int> arr = {8, 3, 5, 2, 7};

  vector<int> arr1 = arr;
  vector<int> arr2 = arr;
  vector<int> arr3 = arr;

  cout << "Original Array:\n";
  printArray(arr);

  // Selection Sort
  selectionSort(arr1);
  cout << "\nSelection Sort:\n";
  printArray(arr1);

  // Bubble Sort
  bubbleSort(arr2);
  cout << "\nBubble Sort:\n";
  printArray(arr2);

  // Insertion Sort
  insertionSort(arr3);
  cout << "\nInsertion Sort:\n";
  printArray(arr3);
}

// | Algorithm      | Key Idea                  | Best Case | Worst Case |
// | -------------- | ------------------------- | --------- | ---------- |
// | Selection Sort | Find minimum and place    | O(n²)     | O(n²)      |
// | Bubble Sort    | Swap adjacent elements    | O(n)      | O(n²)      |
// | Insertion Sort | Insert into sorted prefix | O(n)      | O(n²)      |

// Important Intuition (Interview Gold)

// Selection Sort

// Find smallest → place

// Bubble Sort

// Largest bubbles to end

// Insertion Sort

// Insert into sorted prefix