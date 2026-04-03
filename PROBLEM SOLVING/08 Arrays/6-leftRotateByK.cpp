#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:

void rotateRight(vector<int> &nums, int k)
{
  int n = nums.size();
  k = k % n;

  for (int step = 0; step < k; step++)
  {
    // Store the last element before shifting
    int last = nums[n - 1];

    // Shift elements to the right
    for (int i = n - 1; i > 0; i--)
    {
      // Shift each element to the right
      nums[i] = nums[i - 1];
    }

    // Place the last element at the beginning
    nums[0] = last;
  }
}
// ⭐ Approach 2:
// ⭐ Approach 3:

int main()
{
  vector<int> nums = {1, 2, 3, 4, 5, 6, 7};
  int k = 2;

  rotateRight(nums, k);

  for (int x : nums)
    cout << x << " ";
}