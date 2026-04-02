#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int lastOccurrenceLinearScan(vector<int> &arr, int target)
{
  int n = arr.size();

  for (int i = n; i >= 0; i--)
  {
    if (arr[i] == target)
      return i;
  }
  return -1;
}
// ⭐ Approach 2:
int lastOccurrenceBinarySearch(vector<int> &arr, int target)
{
  int n = arr.size();
  int low = 0, high = n - 1;
  int ans = -1; // Default to -1 if target is not found

  while (low <= high)
  {
    int mid = low + (high - low) / 2;

    if (arr[mid] == target)
    {
      ans = mid; // Potential answer found, but keep searching right
      low = mid + 1;
    }
    else if (arr[mid] < target)
      low = mid + 1;
    else
      high = mid - 1;
  }
  return ans;
}
// ⭐ Approach 3: Using Binary Search built-in functions
int lastOccurrenceBuiltIn(vector<int> &arr, int target)
{
  auto it = upper_bound(arr.begin(), arr.end(), target); // Returns an iterator pointing
  // to the first element that is greater than the target.
  if (it == arr.begin())
    return -1; // Target is smaller than all elements
  --it;        // Move back to the last occurrence of target
  if (*it == target)
    return it - arr.begin(); // Return the index of the last occurrence
  return -1;                 // Target not found
}
int main()
{
  vector<int> arr = {1, 2, 2, 2, 3, 4, 4, 5};
  int target = 2;

  cout << "Last occurrence (Linear Scan): " << lastOccurrenceLinearScan(arr, target) << endl;
  cout << "Last occurrence (Binary Search): " << lastOccurrenceBinarySearch(arr, target) << endl;
  cout << "Last occurrence (Built-in): " << lastOccurrenceBuiltIn(arr, target) << endl;

  return 0;
}