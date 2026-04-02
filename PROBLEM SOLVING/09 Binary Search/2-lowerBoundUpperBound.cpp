#include <bits/stdc++.h>
using namespace std;

// Implementing lower bound and upper bound using binary search

// Lower Bound: The index of the first element in the sorted array that is greater than or equal to the target.
// Upper Bound: The index of the first element in the sorted array that is greater than the target.

int lowerBound(vector<int> &arr, int target)
{
  int n = arr.size();
  int low = 0, high = n - 1;
  int ans = n; // Default to n if target is greater than all elements

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

int upperBound(vector<int> &arr, int target)
{
  int n = arr.size();
  int low = 0, high = n - 1;
  int ans = n; // Default to n if target is greater than all elements

  while (low <= high)
  {
    int mid = low + (high - low) / 2;

    if (arr[mid] > target)
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
  vector<int> arr = {1, 2, 2, 2, 3, 4, 4, 5};
  int target = 2;

  int lb = lowerBound(arr, target);
  int ub = upperBound(arr, target);

  cout << "Lower Bound: " << lb << endl;
  cout << "Upper Bound: " << ub << endl;

  return 0;
}