#include <bits/stdc++.h>
using namespace std;
int main()
{
    // 🎯 A raw pointer is a basic pointer type that directly stores the address of a memory location.
    int x = 10;

    // pointer hold the address of x
    int *ptr = &x;

    // Access value using -> * operator
    cout << "Value of x: " << x << endl;
    cout << "Address of x: " << &x << endl;
    cout << "Value store in pointer ptr: " << ptr << endl;
    cout << "Value pointed by ptr: " << *ptr << endl;

    // delete
    delete ptr;

    // Access value using -> * operator
    cout << "Value of x: " << x << endl;
    cout << "Address of x: " << &x << endl;
    cout << "Value store in pointer ptr: " << ptr << endl;
    cout << "Value pointed by ptr: " << *ptr << endl;

    // 🎯 Common Risks of Using Raw Pointers:

    // ⚠️ Memory Leaks
    // Raw pointers need manual deallocation using delete or delete[]. Forgetting to do so causes memory leaks, where allocated memory is never freed.

    // allocate memory for an int
    int *allocateInt = new int(42);

    // use the pointer
    cout << "Value: " << *allocateInt << endl;

    // Forgot to delete allocateInt — memory leak happens
    delete allocateInt; // This is missing

    // ⚠️ Dangling Pointers
    // A dangling pointer points to memory that has been deallocated or gone out of scope.

    int *danglingInt = new int(90);
    cout << "Dangling value " << *danglingInt << endl;

    // memory freed
    delete danglingInt;

    // p still point to the freed memory
    cout << "Dangling value(undefined) " << *danglingInt << endl;

    // ⚠️ Double Deletion
    // If you delete the same pointer twice, the program’s behaviour is undefined.

    int *doubleDelInt = new int(7);
    cout << "doubleDelInt value " << *doubleDelInt << endl;

    // first delete - OK
    delete doubleDelInt;
    cout << "doubleDelInt value " << *doubleDelInt << endl;

    // second delete - undefined
    delete doubleDelInt;
    cout << "doubleDelInt value (undefined) " << *doubleDelInt << endl;

    // ⚠️ Wild Pointers
    // A wild pointer is a pointer that is not initialized but is used anyway.

    // uninitializd pointer = wild
    int *wildInt;

    // dangerous
    *wildInt = 10;

    cout << "Written to wild pointer" << endl;

    //  ⚠️ Ownership Confusion / Aliasing Example
    // When multiple raw pointers point to the same dynamically allocated memory, it's unclear who is responsible for deleting it.

    int *owner1 = new int(100);

    // both point to same memory
    int *owner2 = owner1;
    // memory freed
    delete owner1;

    // owner2 still point to freed memory - dangling
    cout << "owner2 value(undefined) " << *owner2;

    // if we delete owner2, we attempt to free, same meory again undefined behavior
    delete owner2;

    // ⚠️ No Bounds Checking
    // Raw pointers do not provide array bounds checking when used for dynamic arrays.
    int *arr = new int[3]{1, 2, 3};

    // Correct access
    cout << "arr[0]: " << arr[0] << endl;

    // Undefined behavior — writing beyond
    // array size
    arr[5] = 42;

    cout << "Out-of-bounds write done";

    delete[] arr;
    return 0;
}