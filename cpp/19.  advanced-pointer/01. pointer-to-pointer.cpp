#include <bits/stdc++.h>
using namespace std;

int main()
{
    int var = 10;
    int *ptr = &var; // pointer to var
    int **ptr2 = &ptr; // pointer to ptr

    cout << "Value of var: " << var << endl;
    cout << "Address of var: " << &var << endl;
    cout << "Value store in pointer ptr: " << ptr << endl;
    cout << "Value pointed by ptr: " << *ptr << endl;
    cout << "Address of ptr: " << &ptr << endl;
    cout << "Value store in pointer ptr2: " << ptr2 << endl;
    cout << "Value pointed by ptr2: " << *ptr2 << endl;
    cout << "Address of ptr2: " << &ptr2 << endl;

    // size of p-to-ptr
    cout << "Size of ptr: " << sizeof(ptr) << endl;
    cout << "Size of ptr2: " << sizeof(ptr2) << endl;

    return 0;
}