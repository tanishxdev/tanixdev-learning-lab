#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
bool isArraySorted(vector<int> &arr)
{
  int n = arr.size();

  for (int i = 0; i < n; i++)
  {
    for (int j = i + 1; j < n; j++)
    {
      if (arr[i] > arr[j])
      {
        return false;
      }
    }
  }
  return true;
}

// ⭐ Approach 2:
bool isArraySortedOptimized(vector<int> &arr)
{
  int n = arr.size();

  for (int i = 1; i < n; i++)
  {
    if (arr[i] < arr[i - 1])
    {
      return false;
    }
  }
  return true;
}

int main()
{
  vector<int> arr = {1, 2, 3, 4, 5};
  cout << "Brute Approach: ";
  if (isArraySorted(arr))
  {
    cout << "Array is sorted." << endl;
  }
  else
  {
    cout << "Array is not sorted." << endl;
  }

  cout << "Optimized Approach: ";
  if (isArraySortedOptimized(arr))
  {
    cout << "Array is sorted." << endl;
  }
  else
  {
    cout << "Array is not sorted." << endl;
  }
}