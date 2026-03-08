#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1: Brute Force (Just for Understanding)
pair<int, int> floorAndCeilBruteForce(int arr[], int n, int x)
{
    int floorVal = -1;
    int ceilVal = -1;

    // array should be sorted for correct floor & ceil
    sort(arr, arr + n);

    // Find floor (largest <= x)
    for (int i = n - 1; i >= 0; i--)
    {
        if (arr[i] <= x)
        {
            floorVal = arr[i];
            break;
        }
    }

    // Find ceil (smallest >= x)
    for (int i = 0; i < n; i++)
    {
        if (arr[i] >= x)
        {
            ceilVal = arr[i];
            break;
        }
    }

    return {floorVal, ceilVal};
}

// ⭐ Approach 2: Optimal (Using Binary Search)

// Find FLOOR (largest <= x)
int findFloor(vector<int> &arr, int x)
{
    int low = 0, high = arr.size() - 1;
    int ans = -1;

    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        if (arr[mid] <= x)
        {
            ans = arr[mid];
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    return ans;
}

// Find CEIL (smallest >= x)
int findCeil(vector<int> &arr, int x)
{
    int low = 0, high = arr.size() - 1;
    int ans = -1;

    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        if (arr[mid] >= x)
        {
            ans = arr[mid];
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }
    return ans;
}

vector<int> getFloorAndCeil(int x, vector<int> &arr)
{
    sort(arr.begin(), arr.end());

    int floorVal = findFloor(arr, x);
    int ceilVal = findCeil(arr, x);

    return {floorVal, ceilVal};
}

// ⭐ Approach 3: Optimal (Using STL)
pair<int, int> floorAndCeilSTL(int arr[], int n, int x)
{
    vector<int> vec(arr, arr + n);
    sort(vec.begin(), vec.end());

    // Ceil using lower_bound
    auto ceilIt = lower_bound(vec.begin(), vec.end(), x);
    int ceilVal = (ceilIt != vec.end()) ? *ceilIt : -1;

    // Floor using upper_bound
    auto floorIt = upper_bound(vec.begin(), vec.end(), x);
    int floorVal = (floorIt != vec.begin()) ? *(floorIt - 1) : -1;

    return {floorVal, ceilVal};
}

int main()
{
    int arr[] = {1, 2, 8, 10, 10, 12, 19};
    int n = sizeof(arr) / sizeof(arr[0]);
    int x = 5;

    // Brute Force
    pair<int, int> res1 = floorAndCeilBruteForce(arr, n, x);
    cout << "Brute Force -> Floor: " << res1.first
         << ", Ceil: " << res1.second << endl;

    // Binary Search
    vector<int> vec(arr, arr + n);
    vector<int> res2 = getFloorAndCeil(x, vec);
    cout << "Binary Search -> Floor: " << res2[0]
         << ", Ceil: " << res2[1] << endl;

    // STL
    pair<int, int> res3 = floorAndCeilSTL(arr, n, x);
    cout << "STL -> Floor: " << res3.first
         << ", Ceil: " << res3.second << endl;

    return 0;
}
