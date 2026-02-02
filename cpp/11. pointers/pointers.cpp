#include <bits/stdc++.h>
using namespace std;

int main()
{
    // 🎯 A pointer is a special variable that holds the memory address of another variable, rather than storing a direct value itself. Pointers allow programs to access and manipulate data in memory efficiently, making them a key feature for system-level programming and dynamic memory management. When we access a pointer directly, we get the address it holds not the actual data stored at that location.
    
    int var = 10;

    int* ptr; // pointer declaration
    ptr = &var; // store address of var in pointer

    // print value and addresso
    cout<<"Value of var: "<<var<<endl;
    cout<<"Address of var: "<<&var<<endl;
    cout<<"Value store in pointer ptr: "<<ptr<<endl;
    cout<<"Value pointed by ptr: "<<*ptr<<endl;

    // 🎯 Dereferencing - The process of accessing the value present at the memory address pointed by the pointer is called dereferencing. 

    // Access value using -> * operator 

    // 🎯 Modify Address
    int var1 = 20;
    ptr = &var1;
    cout<<"Value of var1: "<<var1<<endl;
    cout<<"Address of var1: "<<&var1<<endl;
    cout<<"Value store in pointer ptr: "<<ptr<<endl;
    cout<<"Value pointed by ptr: "<<*ptr<<endl;
    
    // 🎯 Size of Pointers
    // The size of pointer in a system is equal for every pointer no matter what type of data it is pointing to. It does not depend on the type, but on operating system and CPU architecture. The size of pointers in C++ is 

    // 8 bytes for a 64-bit System
    // 4 bytes for a 32-bit System
    
    cout<<"🎯 Pointers" <<endl;
    int *intPointer;
    char *charPointer;
    cout<<"Size of int pointer in bytes: "<<sizeof(intPointer)<<endl;
    cout<<"Size of char pointer in bytes: "<<sizeof(charPointer)<<endl;

    // 🎯 Special Types of Pointers
    cout<<"🎯 Special Types of Pointers" <<endl;
    
    // wild pointer
    int *wildPointer;
    // Dereferencing this pointer may lead to errors such as segmentation faults. So, it is always recommended to initialize a pointer.

    // NULL pointer
    // A NULL pointer is a pointer that does not point to any valid memory location but NULL. It is often used to initialize a pointer when you do not want it to point to any object.

    int *nullPointer = NULL;

    // Void Pointers
    // Dangling Pointer
    // Pointer Arithmetic
    // Pointer to Functions
    // Smart Pointers
    // Pointer vs Reference
    return 0;
}