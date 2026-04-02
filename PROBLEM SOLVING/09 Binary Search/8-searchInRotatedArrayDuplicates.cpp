#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
// ⭐ Approach 2:
bool searchBinary(vector<int> &nums, int target)
{
  int low = 0, high = nums.size() - 1;

  while (low <= high)
  {
    int mid = low + (high - low) / 2;

    if (nums[mid] == target)
    {
      return true;
    }

    if (nums[low] == nums[mid] && nums[mid] == nums[high])
    {
      low++;
      high--;
      continue;
    }

    if (nums[low] <= nums[mid])
    {
      if (nums[low] <= target && target < nums[mid])
      {
        high = mid - 1;
      }
      else
      {
        low = mid + 1;
      }
    }
    else
    {
      if (nums[mid] < target && target <= nums[high])
      {
        low = mid + 1;
      }
      else
      {
        high = mid - 1;
      }
    }
  }
  return false;
}
// ⭐ Approach 3:

int main()
{
  // Binary search on rotated sorted array with duplicates
  vector<int> nums = {2, 5, 6, 0, 0, 1, 2};
  int target = 10;
  bool found = searchBinary(nums, target);
  cout << (found ? "Found" : "Not Found") << endl;

  return 0;
}