#include <bits/stdc++.h>
using namespace std;


int main()
{
    string original = "hello world";

    // copying the string
    string originalCopied = original;

    // moving the string
    string moved = move(original);

    // all string
    cout<<"Original: " << original<<endl;
    cout<<"originalCopied: " << originalCopied<<endl;
    cout<<"moved: " << moved<<endl;
    return 0;
}