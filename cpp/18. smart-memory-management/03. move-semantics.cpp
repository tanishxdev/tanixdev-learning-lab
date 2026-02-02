#include <bits/stdc++.h>
using namespace std;

int main()
{
    string original = "hello world";

    // copy 
    string copy = original;

    // move
    string moved = move(original);

    cout <<"Original: " << original<<endl;
    cout <<"copy: " << copy<<endl;
    cout <<"moved: " << moved<<endl;

    return 0;
}