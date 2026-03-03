#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int sortApproach(vector<int> &arr)
{
    sort(arr.begin(), arr.end());
    return arr[arr.size() - 1];
}

// ⭐ Approach 2:
int linearApproach(vector<int> &arr)
{
    if (arr.empty())
        return -1; // Handle empty array case

    int maxElement = arr[0];
    for (int i = 1; i < arr.size(); i++)
    {
        if (arr[i] > maxElement)
        {
            maxElement = arr[i];
        }
    }
    return maxElement;
}
// ⭐ Approach 3:
int stlApproach(vector<int> &arr)
{
    if (arr.empty())
        return -1; // Handle empty array case
    return *max_element(arr.begin(), arr.end());
}
int main()
{
    vector<int> arr = {3, 1, 4, 1, 5, 9};
    cout << "Largest element (Sorting Approach): " << sortApproach(arr) << endl;
    cout << "Largest element (Linear Approach): " << linearApproach(arr) << endl;
    cout << "Largest element (STL Approach): " << stlApproach(arr) << endl;
    return 0;
}