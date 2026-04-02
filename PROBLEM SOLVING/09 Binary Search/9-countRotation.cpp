#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int countRotation(vector<int> &arr)
{

  int n = arr.size();

  int minVal = *min_element(arr.begin(), arr.end());

  // Find the index of the minimum element
  for (int i = 0; i < n; i++)
  {
    if (arr[i] == minVal)
      return i; // The index of the minimum element is the count of rotations
  }

  return 0; // If the array is not rotated, return 0
}
// ⭐ Approach 2:
// ⭐ Approach 3:
int findRotationsBinary(vector<int> &arr)
{
  int low = 0;
  int high = arr.size() - 1;

  while (low < high)
  {
    int mid = low + (high - low) / 2;

    // Minimum lies in right half
    if (arr[mid] > arr[high])
      low = mid + 1;
    else
      // Minimum lies in left half including mid
      high = mid;
  }

  // low points to minimum element
  return low;
}
int main()
{
  vector<int> arr = {15, 18, 2, 3, 6, 12};
  int rotations = countRotation(arr);
  cout << "Number of rotations: " << rotations << endl;

  rotations = findRotationsBinary(arr);
  cout << "Number of rotations (Binary Search): " << rotations << endl;
  return 0;
}