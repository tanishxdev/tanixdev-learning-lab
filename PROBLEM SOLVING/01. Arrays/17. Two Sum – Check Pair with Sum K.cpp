#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
string twoSumExists(vector<int> &nums, int target)
{
    int n = nums.size();

    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (nums[i] + nums[j] == target)
            {
                return "YES";
            }
        }
    }

    return "NO";
}

vector<int> twoSumIndices(vector<int> &nums, int target)
{
    int n = nums.size();

    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (nums[i] + nums[j] == target)
            {
                return {i, j};
            }
        }
    }

    return {-1, -1}; // Return -1, -1 if no pair is found
}
// ⭐ Approach 2:

string twoSumTwoPointer(vector<int> &nums, int target)
{
    int n = nums.size();

    sort(nums.begin(), nums.end());

    int left = 0, right = n - 1;

    while (left < right)
    {
        int sum = nums[left] + nums[right];

        if (sum == target)
        {
            return "YES";
        }
        else if (sum < target)
        {
            left++;
        }
        else
        {
            right--;
        }
    }

    return "NO";
}

vector<int> twoSumTwoPointerIndex(vector<int> &nums, int target)
{
    int n = nums.size();
    vector<pair<int, int>> numWithIndex;

    for (int i = 0; i < n; i++)
    {
        numWithIndex.push_back({nums[i], i});
    }

    sort(numWithIndex.begin(), numWithIndex.end());

    int left = 0, right = n - 1;

    while (left < right)
    {
        int sum = numWithIndex[left].first + numWithIndex[right].first;

        if (sum == target)
        {
            return {numWithIndex[left].second, numWithIndex[right].second};
        }
        else if (sum < target)
        {
            left++;
        }
        else
        {
            right--;
        }
    }

    return {-1, -1}; // Return -1, -1 if no pair is found
}
// ⭐ Approach 3:
string twoSumHash(vector<int> &nums, int target)
{
    unordered_map<int, int> numMap; // Map to store number and its index

    for (int i = 0; i < nums.size(); i++)
    {
        int need = target - nums[i];

        if (numMap.find(need) != numMap.end())
        {
            return "YES";
        }

        numMap[nums[i]] = i; // Store the index of the current number
    }

    return "NO";
}

vector<int> twoSumHashIndex(vector<int> &nums, int target)
{
    unordered_map<int, int> numMap; // Map to store number and its index

    for (int i = 0; i < nums.size(); i++)
    {
        int need = target - nums[i];

        if (numMap.find(need) != numMap.end())
        {
            return {numMap[need], i}; // Return indices of the two numbers
        }

        numMap[nums[i]] = i; // Store the index of the current number
    }

    return {-1, -1}; // Return -1, -1 if no pair is found
}
int main()
{
    int n, target;
    cin >> n >> target;

    vector<int> nums(n);
    for (int i = 0; i < n; i++)
    {
        cin >> nums[i];
    }
    // Approach 1: Brute Force O(n²)
    string result = twoSumExists(nums, target);
    cout << "Two sum exists: " << result << endl;
    vector<int> indices = twoSumIndices(nums, target);
    if (indices[0] != -1)
    {
        cout << "Indices of the two numbers: " << indices[0] << ", " << indices[1] << endl;
    }
    else
    {
        cout << "No pair found." << endl;
    }

    // Approach 2: Two Pointer O(n log n)
    result = twoSumTwoPointer(nums, target);
    cout << "Two sum exists (Two Pointer): " << result << endl;
    indices = twoSumTwoPointerIndex(nums, target);
    if (indices[0] != -1)
    {
        cout << "Indices of the two numbers (Two Pointer): " << indices[0] << ", " << indices[1] << endl;
    }
    else
    {
        cout << "No pair found." << endl;
    }

    // Approach 3: Hash Map O(n)
    result = twoSumHash(nums, target);
    cout << "Two sum exists (Hash): " << result << endl;
    indices = twoSumHashIndex(nums, target);
    if (indices[0] != -1)
    {
        cout << "Indices of the two numbers (Hash): " << indices[0] << ", " << indices[1] << endl;
    }
    else
    {
        cout << "No pair found." << endl;
    }

    return 0;
}