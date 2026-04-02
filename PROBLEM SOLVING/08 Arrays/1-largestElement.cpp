#include <bits/stdc++.h>
using namespace std;

// Approach 1: Sort the array and return the last element (largest)
// Intuition: Sorting the array will arrange the elements in ascending order, so the largest element will be at the end of the array.
// Time complexity: O(n log n) - due to sorting
// Space complexity: O(1) - no extra space used
int largestElementSort(vector<int> &arr)
{
  if (arr.empty())
    return -1;

  sort(arr.begin(), arr.end());

  return arr.back();
}
// Approach 2: Linear scan to find the maximum element
// Intuition: We can iterate through the array and keep track of the maximum value found so far. This way, we can find the largest element in a single pass.
// Time complexity: O(n) - we scan the array once
// Space complexity: O(1) - no extra space used
int largestElementLinearScan(vector<int> &arr)
{
  if (arr.empty())
    return -1;
  int maxVal = arr[0];
  for (int i = 1; i < arr.size(); i++)
  {
    if (arr[i] > maxVal)
    {
      maxVal = arr[i];
    }
  }
  return maxVal;
}

// Approach 3: Using STL max_element function
// Intuition: The STL provides a built-in function max_element that returns an iterator to the largest element in the range. We can use this function to find the largest element efficiently.
// Time complexity: O(n) - max_element scans the array once
// Space complexity: O(1) - no extra space used
int largestElementSTL(vector<int> &arr)
{
  if (arr.empty())
    return -1;
  return *max_element(arr.begin(), arr.end());
}

int main()
{
  vector<int> arr = {10, 20, -5, 500, 2};
  cout << largestElementSort(arr) << endl;

  cout << largestElementLinearScan(arr) << endl;

  cout << largestElementSTL(arr) << endl;
}