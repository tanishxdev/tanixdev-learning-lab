#include <bits/stdc++.h>
using namespace std;


int main()
{
    string name;
    getline(cin, name);
    cout << name << endl;

    // Examples of getline() Function
    // Read Space Separated User Input

    getline(cin, name);
    cout << name << endl;

    // Tokenize a String

    string S, T;
    getline(cin, S);

    // store string S intro stringstream X
    stringstream X(S);

    while (getline(X, T, ' ')) {
        cout << T << endl;
    }

    // Taking Newline as Input

    string s;
    getline(cin, s);
    
    return 0;
}