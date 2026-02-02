#include <bits/stdc++.h>
using namespace std;

// 1. Passing Arguments by Reference
void passByReference(int &ref)
{
    ref += 10; // modify the original variable
}
// 2. Returning Reference from Functions
int &returnRef(int &ref1, int &ref2)
{
    return (ref1 > ref2) ? ref1 : ref2;
}
int main()
{
    // 1. a reference works as an alias for an existing variable, providing an alternative name for it and allowing you to work with the original data directly.
    int x = 10;
    int& ref = x; // ref is a reference to x

    cout << x << endl; // 10
    cout << ref << endl; // 10

    ref = 20; // modifying ref changes x
    cout << x << endl; // 20
    cout << ref << endl; // 20

    // 2. Applications

    // 1. Passing Arguments by Reference - References are commonly used in function arguments to allow modification of the original variable passed to the function. They are also more efficient for large data structures since no copies are made.

    int byRefVar = 30;
    cout << "Before passByReference, byRefVar: " << byRefVar<<endl; // 40
    passByReference(byRefVar);
    cout << "After passByReference, byRefVar: " << byRefVar<<endl; // 40

    // 2. Returning Reference from Functions - In C++, functions can return references to variables. This is especially useful when you need to return large data structures or want to allow direct modifications to a variable inside a function.
    int returingRefVarA = 50, returingRefVarB = 60;
    int &maxValu = returnRef(returingRefVarA, returingRefVarB);

    // modify the larger variable through the reference
    maxValu += 10;
    cout<<"returingRefVarA: " << returingRefVarA << endl; // 50
    cout<<"returingRefVarB: " << returingRefVarB << endl; // 70

    // 3. Modify Data in Range Based Loops
    vector<int> vec = {1, 2, 3, 4, 5};

    // modify elements using reference
    for (int &num : vec) {
        num *= 2;
    }

    // print modified elements
    for (const int &num : vec) {
        cout << num << " "; // 2 4 6 8 10
    }

    // Limitations of References
    // Once a reference is created, it cannot be later made to reference another object; it cannot be reset. This is often done with pointers. 
    // References cannot be NULL. Pointers are often made NULL to indicate that they are not pointing to any valid thing. 
    // A reference must be initialized when declared. There is no such restriction with pointers.
    
    // Due to the above limitations, references in C++ cannot be used for implementing data structures like Linked List, Tree, etc. In Java, references don't have the above restrictions and can be used to implement all data structures. References being more powerful in Java is the main reason Java doesn't need pointers.

    // Advantages of using References
    // Safer: Since references must be initialized, wild references like wild pointers are unlikely to exist. It is still possible to have references that don't refer to a valid location
    // Easier to use: References don't need a dereferencing operator to access the value. They can be used like normal variables. The '&' operator is needed only at the time of declaration. Also, members of an object reference can be accessed with the dot operator ('.'), unlike pointers where the arrow operator (->) is needed to access members.
    // Together with the above reasons, there are a few places like the copy constructor argument where a pointer cannot be used. Reference must be used to pass the argument in the copy constructor. Similarly, references must be used for overloading some operators like ++.
}