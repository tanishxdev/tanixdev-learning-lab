#include <bits/stdc++.h>
using namespace std;

// Implementing Floor and Ceil using Binary Search
// Floor: The greatest element in the sorted array that is less than or equal to the target.
// Ceil: The smallest element in the sorted array that is greater than or equal to the

int floorInSortedArray(vector<int> &arr, int target)
{
  int n = arr.size();
  int low = 0, high = n - 1;
  int ans = -1; // Default to -1 if target is smaller than all elements

  while (low <= high)
  {
    int mid = low + (high - low) / 2;

    if (arr[mid] <= target)
    {
      ans = mid; // Potential answer found, but keep searching right
      low = mid + 1;
    }
    else
    {
      high = mid - 1; // Search in the left half
    }
  }
  return ans;
}
int ceilInSortedArray(vector<int> &arr, int target)
{
  int n = arr.size();
  int low = 0, high = n - 1;
  int ans = -1; // Default to -1 if target is greater than all elements

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
int main()
{
  vector<int> arr = {1, 3, 5, 6, 7, 9, 10};
  int target = 8;

  int floorIndex = floorInSortedArray(arr, target);
  int ceilIndex = ceilInSortedArray(arr, target);

  cout << "Floor index: " << floorIndex << endl;
  cout << "Ceil index: " << ceilIndex << endl;

  return 0;
}