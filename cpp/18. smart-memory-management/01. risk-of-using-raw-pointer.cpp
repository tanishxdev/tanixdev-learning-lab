#include <bits/stdc++.h>
using namespace std;

int main()
{
    // 1. Memory Leak
    // allocate memory -> but forget to delete memory
    // memory never freed; wasting RAM
    int* p = new int(42);  // 42

    cout << *p <<endl;
    
    // memory leak : fixed 
    // memory the freed
    delete p; 

    // 2. Dangling Pointers
    // delete memory but still use the pointer pointing to it.
    
    cout << "p : "<< *p << endl; // 4217463864   undefined behavior (dangling)
    
    // Dangling Pointers : Fixed
    // After deleting, set pointer to nullptr:
    p = nullptr;

    // 3. Double Deletion
    // Deleting the same pointer twice.
    
    delete p; // 4218053688 : crash the program, Undefined behavior, often a runtime abort.
    
    // Double Deletion : Fixed
    // Set to nullptr after first deletion:
    p = nullptr;

    // 4. Wild Pointers
    // Using an uninitialized pointer.

    int* q;
    cout << "q : "<< *q << endl; // 4218053688 : crash the program, Undefined behavior, often a runtime abort.

    // 5. Ownership Confusion (Aliasing)
    // Two or more raw pointers own the same heap memory.
    int* ptr1 = new int(10);
    int* ptr2 = ptr1;
    
    delete ptr1; // frees memory
    delete ptr2; // double free - same address
    
    // Ownership Confusion : Fixed
    // use unique_ptr or shared_ptr

    // 6. No Bounds Checking
    int* arr = new int[3]{1, 2, 3};
    arr[5] = 42; // undefined behavior -  out of bounds
    
    // No Bounds Checking : Fixed
    // use vector or array with bounds checking
    
    return 0;
}