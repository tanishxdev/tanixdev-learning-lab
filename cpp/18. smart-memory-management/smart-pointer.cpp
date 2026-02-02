#include <bits/stdc++.h>
using namespace std;

// 2. unique_ptr
class Rectangle {
    int length;
    int breadth;

public:
    Rectangle(int l, int b) {
        length = l;
        breadth = b;
    }
    int area() { return length * breadth; }
};

// 3. shared_ptr
class Rectangle {
    int length;
    int breadth;

public:
    Rectangle(int l, int b) {
        length = l;
        breadth = b;
    }
    int area() { return length * breadth; }
};

// 4 . 4. weak_ptr
class Rectangle {
    int length;
    int breadth;

public:
    Rectangle(int l, int b) {
        length = l;
        breadth = b;
    }

    int area() { return length * breadth; }
};
int main()
{
    // 🎯 In C++, pointers are the variables that stores the memory addresses. They are extensively used in dynamic memory location to store the address of allocated memory. But they bring a lot of issues.

    // // Infinite Loop
    // while (1) {
        
    //     // Create a variable 
    //     // in heap memory using pointer
    //     int* ptr = new int;
    // }

    // 🎯 Smart Pointers
    // A smart pointer is a wrapper over a raw pointer that automatically manages memory, ensuring proper deallocation and preventing memory leaks. Defined in the <memory> header, smart pointers are template-based, allowing use with any data type.

    // Types of Smart Pointers
    // C++ libraries provide implementations of smart pointers in the following types:

    // 1. auto_ptr
    auto_ptr<int> ptr1(new int(10));
    cout<<*ptr1<<endl;
    
    // Transfer ownership
    auto_ptr<int> ptr2 = ptr1;
    cout<<*ptr2<<endl;

    // 2. unique_ptr
       unique_ptr<Rectangle> P1(new Rectangle(10, 5));
    cout << P1->area() << endl;

    unique_ptr<Rectangle> P2;

    // Copy the addres of P1 into p2
    P2 = move(P1);
    cout << P2->area();
    // 3. shared_ptr
      shared_ptr<Rectangle> P1(new Rectangle(10, 5));
    cout << P1->area() << endl;

    shared_ptr<Rectangle> P2;
    
    // P1 and P2 are pointing 
    // to same object
    P2 = P1;
    cout << P2->area() << endl;
    cout << P1->area() << endl;
    // cout << P1.use_count();
    
    // 4. weak_ptr
    // Create shared_ptr Smart Pointer
    shared_ptr<Rectangle> P1(new Rectangle(10, 5));
    
    // Created a weak_ptr smart pointer
    weak_ptr<Rectangle> P2 (P1);
    cout << P1->area() << endl;
    
    // Returns the number of shared_ptr 
    // objects that manage the object
    cout << P2.use_count();
    return 0;
}