#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1: Brute Force
int majorityElementApp1(vector<int> &nums)
{
    int n = nums.size();

    for (int i = 0; i < n; i++)
    {
        int count = 0;

        for (int j = 0; j < n; j++)
        {
            if (nums[j] == nums[i])
                count++;
        }

        if (count > n / 2)
            return nums[i];
    }

    return -1;
}

// ⭐ Approach 2: Hash Map
int majorityElementApp2(vector<int> &nums)
{
    int n = nums.size();
    unordered_map<int, int> countMap;

    for (int num : nums)
    {
        countMap[num]++;
        if (countMap[num] > n / 2)
            return num;
    }

    return -1;
}

int main()
{
    vector<int> nums = {2, 2, 1, 1, 1, 2, 2};

    cout << majorityElementApp1(nums) << endl;
    cout << majorityElementApp2(nums) << endl;

    return 0;
}