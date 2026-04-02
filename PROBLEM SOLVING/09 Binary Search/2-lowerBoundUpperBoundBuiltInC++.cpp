#include <bits/stdc++.h>
using namespace std;

// lower_bound and upper_bound are built-in functions in C++ that can be used to find the lower and upper bounds of a target value in a sorted array or vector. These functions are part of the <algorithm> header and are implemented using binary search, which allows them to operate in logarithmic time complexity (O(log n)).

int main()
{
  vector<int> arr = {1, 2, 2, 2, 3, 4, 4, 5};
  int target = 2;

  auto lb = lower_bound(arr.begin(), arr.end(), target); // Returns an iterator pointing to the first element that is not less than (i.e., greater than or equal to) the target.
  auto ub = upper_bound(arr.begin(), arr.end(), target); // Returns an iterator pointing to the first element that is greater than the target.

  cout << "Lower Bound: " << (lb - arr.begin()) << endl;
  cout << "Upper Bound: " << (ub - arr.begin()) << endl;

  return 0;
}
// Output:
// Lower Bound: 1
// Upper Bound: 4

// DRY RUN
// arr = {1, 2, 2, 2, 3, 4, 4, 5}
// target = 2

// lower_bound(arr.begin(), arr.end(), target) will return an iterator pointing to the first occurrence of 2, which is at index 1 (0-based index).

// upper_bound(arr.begin(), arr.end(), target) will return an iterator pointing to the first element greater than 2, which is at index 4 (the element 3).