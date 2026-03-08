#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
void sortColorsSorting(vector<int> &nums)
{
    sort(nums.begin(), nums.end());
}
// ⭐ Approach 2:

void sortColorCounting(vector<int> &nums)
{
    int count0 = 0, count1 = 0, count2 = 0;

    for (int x : nums)
    {
        if (x == 0)
            count0++;
        else if (x == 1)
            count1++;
        else if (x == 2)
            count2++;
    }

    int index = 0;

    while (count0 > 0)
    {
        nums[index++] = 0;
        count0--;
    }
    while (count1 > 0)
    {
        nums[index++] = 1;
        count1--;
    }
    while (count2 > 0)
    {
        nums[index++] = 2;
        count2--;
    }
}

// ⭐ Approach 3: Dutch National Flag Algorithm
void sortColorDutchFlag(vector<int> &nums)
{
    int low = 0, mid = 0, high = nums.size() - 1;

    while (mid <= high)
    {
        if (nums[mid] == 0)
        {
            swap(nums[low], nums[mid]);
            low++;
            mid++;
        }
        else if (nums[mid] == 1)
        {
            mid++;
        }
        else // nums[mid] == 2
        {
            swap(nums[mid], nums[high]);
            high--;
        }
    }
}
int main()
{
    // ⭐ Approach 1:
    vector<int> nums = {2, 0, 2, 1, 1, 0};

    sortColorsSorting(nums);
    cout << "After sorting: ";

    for (int x : nums)
        cout << x << " ";

    // ⭐ Approach 2:
    vector<int> nums2 = {2, 0, 2, 1, 1, 0};
    sortColorCounting(nums2);

    cout << "\nAfter counting sort: ";

    for (int x : nums2)
        cout << x << " ";

    // ⭐ Approach 3:
    vector<int> nums3 = {2, 0, 2, 1, 1, 0};
    sortColorDutchFlag(nums3);

    cout << "\nAfter Dutch National Flag sort: ";

    for (int x : nums3)
        cout << x << " ";

    return 0;
}