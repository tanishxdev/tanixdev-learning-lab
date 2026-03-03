#include <bits/stdc++.h>
using namespace std;

int removeElementV1(vector<int> &nums, int val)
{
  vector<int> temp;

  for (int i = 0; i < nums.size(); i++)
  {
    if (nums[i] != val)
    {
      temp.push_back(nums[i]);
    }
  }

  for (int i = 0; i < temp.size(); i++)
  {
    nums[i] = temp[i];
  }

  return temp.size();
}

int removeElementV2(vector<int> &nums, int val)
{

  int k = 0;

  for (int i = 0; i < nums.size(); i++)
  {
    if (nums[i] != val)
    {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
int main()
{
  vector<int> nums = {3, 2, 2, 3};
  int val = 3;

  int newLength = removeElementV2(nums, val);

  cout << "New Length: " << newLength << endl;

  cout << "Modified Array: ";
  for (int i = 0; i < newLength; i++)
  {
    cout << nums[i] << " ";
  }

  return 0;
}