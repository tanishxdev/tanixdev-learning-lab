#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1 :
void leftRotateByOne(int arr[], int n)
{
  int temp[n];

  for (int i = 1; i < n; i++)
  {
    temp[i - 1] = arr[i];
  }

  temp[n - 1] = arr[0];

  // Copy back
  for (int i = 0; i < n; i++)
  {
    arr[i] = temp[i];
  }
}
// ⭐ Approach 2:
void leftRotateByOneOptimized(vector<int> &nums)
{
  int temp = nums[0]; // Store the first element

  for (int i = 1; i < nums.size(); i++)
  {
    nums[i - 1] = nums[i]; // Shift elements to the left
  }

  nums[nums.size() - 1] = temp; // Place the first element at the end
}

int main()
{
  int arr[] = {1, 2, 3, 4, 5};
  int n = sizeof(arr) / sizeof(arr[0]);

  leftRotateByOne(arr, n);

  cout << "Left Rotated Array: ";
  for (int i = 0; i < n; i++)
  {
    cout << arr[i] << " ";
  }
  cout << endl;

  vector<int> nums = {1, 2, 3, 4, 5};
  leftRotateByOneOptimized(nums);

  cout << "Left Rotated Vector: ";
  for (int num : nums)
  {
    cout << num << " ";
  }
  cout << endl;
}