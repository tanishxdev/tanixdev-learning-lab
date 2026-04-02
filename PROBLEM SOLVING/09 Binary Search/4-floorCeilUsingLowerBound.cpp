#include <bits/stdc++.h>
using namespace std;

int floorUsingLowerBound(vector<int> &arr, int target)
{
  return lower_bound(arr.begin(), arr.end(), target) - arr.begin() - 1;
}

int ceilUsingLowerBound(vector<int> &arr, int target)
{

  return lower_bound(arr.begin(), arr.end(), target) - arr.begin();
}
int main()
{
  vector<int> arr = {1, 3, 5, 6, 7, 9, 10};
  int target = 8;

  int floorIndex = floorUsingLowerBound(arr, target);
  int ceilIndex = ceilUsingLowerBound(arr, target);

  cout << "Floor index: " << floorIndex << endl;
  cout << "Ceil index: " << ceilIndex << endl;
  return 0;
}