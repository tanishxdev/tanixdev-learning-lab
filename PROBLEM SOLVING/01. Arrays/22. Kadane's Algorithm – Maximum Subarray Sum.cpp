#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int maxSubArraySumCompute(vector<int> &nums)
{
    int n = nums.size();
    int maxSum = INT_MIN;

    for (int i = 0; i < n; i++)
    {
        int sum = 0;

        for (int j = i; j < n; j++)
        {
            sum += nums[j];
            maxSum = max(maxSum, sum);
        }
    }
    return maxSum;
}
// ⭐ Approach 2:
int maxSubArrayKadane(vector<int> &nums)
{
    int maxSum = INT_MIN;
    int currentSum = 0;

    for (int num : nums)
    {
        currentSum += num;

        maxSum = max(maxSum, currentSum);

        if (currentSum < 0)
            currentSum = 0;
    }

    return maxSum;
    // ⭐ Approach 3:
}
int main()
{
    int n;
    cin >> n;

    vector<int> nums(n);
    for (int i = 0; i < n; i++)
    {
        cin >> nums[i];
    }

    cout << "Maximum Subarray Sum (Brute Force): " << maxSubArraySumCompute(nums) << endl;
    cout << "Maximum Subarray Sum (Kadane's Algorithm): " << maxSubArrayKadane(nums) << endl;

    return 0;
}