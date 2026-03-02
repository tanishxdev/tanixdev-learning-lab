#include <bits/stdc++.h>
using namespace std;

int sortApproach(vector<int> &arr){
    if(arr.empty()) return -1;
    sort(arr.begin(), arr.end());
    return arr.back();
}
int main()
{
    vector<int> arr = {1, 2, 3, 4, 5};
    cout << sortApproach(arr) << endl;
}