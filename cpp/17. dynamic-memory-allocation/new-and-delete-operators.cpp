#include <bits/stdc++.h>
using namespace std;

void exampleA()
{
    // Declared a pointer to store
    // the address of the allocated memory
    int *nptr;
    
    // Allocate and initialize memory
    nptr = new int(6);

    // Print the value
    cout << *nptr << endl;

    // Print the address of memory
    // block
    cout << nptr;
}
void dynamicMemoryAllocation()
{
     // Declared a pointer to store
    // the address of the allocated memory
    int *nptr;
    
    // Allocate and initialize array of
    // integer with 5 elements
    nptr = new int[5]{1, 2, 3, 4, 5};
    
    // print array
    for(int i=0; i<5; i++)
    {
        cout <<nptr[i] << " "<<endl;
    }
    cout << endl;
}
int main()
{
    exampleA();
    dynamicMemoryAllocation();
    return 0;
}