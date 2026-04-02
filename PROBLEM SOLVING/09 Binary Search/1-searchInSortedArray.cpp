#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int searchInSortedArrayLinearScan(vector<int> &arr, int target)
{
  for (int i = 0; i < arr.size(); i++)
  {
    if (arr[i] == target)
      return i;
  }
  return -1;
}
// ⭐ Approach 2:
int searchInSortedArrayBinarySearch(vector<int> &arr, int target)
{

  int low = 0, high = arr.size() - 1;

  while (low <= high)
  {
    int mid = low + (high - low) / 2;

    if (arr[mid] == target)
      return mid;
    else if (arr[mid] < target)
      low = mid + 1;
    else
      high = mid - 1;
  }
  return -1;
}
// ⭐ Approach 3:

int main()
{
  vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  int target = 5;

  int indexLinear = searchInSortedArrayLinearScan(arr, target);
  if (indexLinear != -1)
    cout << "Element found at index (Linear Scan): " << indexLinear << endl;
  else
    cout << "Element not found (Linear Scan)" << endl;

  int indexBinary = searchInSortedArrayBinarySearch(arr, target);
  if (indexBinary != -1)
    cout << "Element found at index (Binary Search): " << indexBinary << endl;
  else
    cout << "Element not found (Binary Search)" << endl;

  return 0;
}