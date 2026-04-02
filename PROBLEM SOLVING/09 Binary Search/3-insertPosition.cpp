#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int searchInsertPositionLinearScan(vector<int> &arr, int target)
{
  for (int i = 0; i < arr.size(); i++)
  {
    if (arr[i] >= target)
      return i;
  }
  return arr.size(); // If target is greater than all elements, it should be inserted at the end
}
// ⭐ Approach 2: Lower Bound using Binary Search
int searchInsertPositionBinarySearch(vector<int> &arr, int target)
{
  int low = 0, high = arr.size() - 1;
  int ans = arr.size(); // Default to size if target is greater than all elements

  while (low <= high)
  {
    int mid = low + (high - low) / 2;

    if (arr[mid] >= target)
    {
      ans = mid; // Potential answer found, but keep searching left
      high = mid - 1;
    }
    else
    {
      low = mid + 1; // Search in the right half
    }
  }
  return ans;
}
// ⭐ Approach 3:
int searchInsertPositionBuiltIn(vector<int> &arr, int target)
{
  auto it = lower_bound(arr.begin(), arr.end(), target);
  return it - arr.begin();

  // why - arr.begin() ??
  // lower_bound returns an iterator pointing to the first element that is not less than (i.e., greater than or equal to) the target. To get the index from the iterator, we subtract the beginning of the array (arr.begin()) from the iterator. This gives us the zero-based index of the position where the target should be inserted.
}
int main()
{
  vector<int> arr = {1, 3, 5, 6, 7, 9, 10};
  int target = 8;

  int indexLinear = searchInsertPositionLinearScan(arr, target);
  cout << "Insert position (Linear Scan): " << indexLinear << endl;

  int indexBinary = searchInsertPositionBinarySearch(arr, target);
  cout << "Insert position (Binary Search): " << indexBinary << endl;

  int indexBuiltIn = searchInsertPositionBuiltIn(arr, target);
  cout << "Insert position (Built-in): " << indexBuiltIn << endl;

  return 0;
}