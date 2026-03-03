#include <bits/stdc++.h>
using namespace std;
pair<int, int> twoPass(vector<int> &arr)
{
    int n = arr.size();

    int small = INT_MAX, second_small = INT_MAX;
    int large = INT_MIN, second_large = INT_MIN;

    for (int x : arr)
    {
        small = min(x, small);
        large = max(x, large);
    }

    for (int x : arr)
    {
        if (x > small && x < large)
        {
            second_small = min(x, second_small);
            second_large = max(x, second_large);
        }
    }
    if (second_small == INT_MAX)
        second_small = -1;
}
if (second_large == INT_MIN)
    second_large = -1;
return make_pair(second_small, second_large);
}

int main()
{
}