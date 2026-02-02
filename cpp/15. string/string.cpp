#include <bits/stdc++.h>
using namespace std;


int main()
{
    // create string
    string s1 = "Hello";

    // traverse string
    for (int i = 0; i < s1.length(); i++)
    {
        cout << s1[i] << " ";
    }
    cout << endl;

    // traverse using range-based for loop
    cout<<"Traverse using range-based for loop"<<endl;
    for (char c : s1)
    {
        cout << c << " ";
    }

    // traverse using iterator
    cout<<"\nTraverse using iterator"<<endl;
    for (auto it = s1.begin(); it != s1.end(); it++){
        cout << *it << " ";
    }
    cout<<endl;

    // Basic Operations in String
    string s2 = "World";

    // assign char using []
    cout<< "Assign char using []"<<endl;
    cout << s1[0] << endl;
    s1[0] = 'h';
    cout << s1 << endl;

    // assign using at()
    cout<< "Assign using at()"<<endl;
    s1.at(0) = 'H';
    cout << s1 << endl;
    
    // string length
    cout<< "string length"<<endl;
    cout << s1.length() << endl;
    cout << s1.size() << endl;

    // Concatenation of Strings
    cout<< "Concatenation of Strings"<<endl;
    cout << s1 + " " + s2 << endl;

    // Modifying a String
    cout<< "Modifying a String"<<endl;
    
    // add char at the end
    s1.push_back('!');
    cout << s1 << endl;

    // remove last char
    s1.pop_back();
    cout << s1 << endl;

    // insert substring
    s1.insert(1, "ello");
    cout << s1 << endl;

    // erase part of string
    s1.erase(1, 3);
    cout << s1 << endl;

    // Substring Extraction
    cout<< "Substring Extraction"<<endl;
    cout << s1.substr(1, 3) << endl;

    // Searching in a String
    cout<< "Searching in a String"<<endl;
    cout << s1.find("ello") << endl;

    return 0;
}