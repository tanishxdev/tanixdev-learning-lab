#include <bits/stdc++.h>
using namespace std;
void textSegment()
{
    
}
void dataSegment()
{
    // 2. Data Segement - The data segment stores global and static variables defined by the programmer. This segment is located just above the text segment and is divided into two parts: 

    // A. Initialized Data Segment
    
    // global variable
    int globalA = 50; // initialized data segment
    
    // static variable
    static int staticA = 100; // initialized data segment

    // B. Uninitialized Data Segment (BSS) - Holds global and static variables that have not been explicitly initialized. The system automatically sets these to zero at runtime.

    // global variable
    int gloabalB;

    // static variable
    static int staticB;
}

void heapSegment()
{
    // dynamically allocate array on heap
    int* arr = new int[5];
    delete[] arr;
}

void stackSegment()
{
    // stored in stack
    int local = 10;
    cout<<local<<endl;
}

// Practical Examples

int greeting = 10;
void show() 
{
    int local = 5;
    cout << "local address"<<&local<<endl;
}
int main()
{
    // Memory Layout
    // 1. Stack
    // 2. Heap
    // 3. uninitialized data
    // 4. initialized data
    // 5. text

    textSegment();
    dataSegment();
    heapSegment();
    stackSegment();

    // Practical Examples
    int* heapVar = new int;
    cout << "Function address: " << (void*)&show << endl;
    cout << "Global address: " << &greeting  << endl;
    cout << "Heap address: " << heapVar << endl;
    show();
    delete heapVar;
    return 0;
}