#include <bits/stdc++.h>
using namespace std;

/* 
------------------------------------------------------
  1. BASIC STRUCTURE
------------------------------------------------------
*/
struct Point {
    int x, y;
};

/* 
------------------------------------------------------
  2. STRUCTURE WITH MEMBER FUNCTION
------------------------------------------------------
*/
struct PointWithFn {
    int x, y;
    int sum() {
        return x + y;
    }
};

/* 
------------------------------------------------------
  3. STRUCTURE WITH CONSTRUCTOR, DESTRUCTOR
------------------------------------------------------
*/
struct PointAdv {
private:
    int x, y;

public:
    // Constructor
    PointAdv(int a, int b) {
        x = a; y = b;
    }

    void show() {
        cout << "Point: " << x << " " << y << endl;
    }

    // Destructor
    ~PointAdv() {
        cout << "Destroyed PointAdv" << endl;
    }
};

/* 
------------------------------------------------------
  4. SIZE OF STRUCTURE (Padding)
------------------------------------------------------
*/
struct GfG {
    char c;
    int x, y;
};

/* 
------------------------------------------------------
  5. TYPEDEF WITH STRUCT
------------------------------------------------------
*/
typedef struct MyStruct {
    int a, b;
} AliasStruct;

/* 
------------------------------------------------------
  6. NESTED STRUCTURE
------------------------------------------------------
*/
struct Outer {
    struct Inner {
        int a, b;
    } in;
    int x, y;
};

/* 
------------------------------------------------------
  7. POINTER TO STRUCTURE
------------------------------------------------------
*/
struct GfGPointer {
    int count;
    void showCount() {
        cout << "Count = " << count << endl;
    }
};

/* 
------------------------------------------------------
  8. SELF-REFERENTIAL STRUCTURE (Linked List Node)
------------------------------------------------------
*/
struct Node {
    int val;
    Node* next; // pointer to same type
};

/* 
------------------------------------------------------
  9. STRUCTURE WITH FUNCTION (Pass + Return)
------------------------------------------------------
*/
struct Rect {
    int length, breadth;
};

// Function that takes struct by value
int area(Rect r) {
    return r.length * r.breadth;
}

// Function that returns a struct
Rect createRect(int l, int b) {
    return {l, b};
}

/* 
------------------------------------------------------
  10. BIT FIELDS
------------------------------------------------------
*/
struct BitField {
    unsigned int x : 4; // only 4 bits used
    unsigned int y : 3; // only 3 bits used
};


int main() {

    cout << "=== 1. BASIC STRUCTURE ===\n";
    Point p1 = {0, 1};
    cout << p1.x << " " << p1.y << endl;

    cout << "\n=== 2. STRUCTURE WITH MEMBER FUNCTION ===\n";
    PointWithFn pf = {10, 20};
    cout << "Sum = " << pf.sum() << endl;

    cout << "\n=== 3. STRUCTURE WITH CONSTRUCTOR, DESTRUCTOR ===\n";
    {
        PointAdv pa(5, 6);
        pa.show();
    } // Destructor auto-called here

    cout << "\n=== 4. SIZE OF STRUCTURE (Padding) ===\n";
    cout << "Size of GfG struct = " << sizeof(GfG) << endl;

    cout << "\n=== 5. TYPEDEF WITH STRUCT ===\n";
    AliasStruct as = {10, 20};
    cout << "AliasStruct values: " << as.a << " " << as.b << endl;

    cout << "\n=== 6. NESTED STRUCTURE ===\n";
    Outer o = {{1, 2}, 10, 20};
    cout << "Inner: " << o.in.a << " " << o.in.b << " | Outer: " << o.x << " " << o.y << endl;

    cout << "\n=== 7. POINTER TO STRUCTURE ===\n";
    GfGPointer gp = {224};
    GfGPointer* ptr = &gp;
    ptr->showCount();

    cout << "\n=== 8. SELF-REFERENTIAL STRUCTURE ===\n";
    Node n1 = {10, nullptr};
    Node n2 = {20, nullptr};
    n1.next = &n2;
    cout << "n1 value: " << n1.val << " | n2 via n1.next: " << n1.next->val << endl;

    cout << "\n=== 9. STRUCTURE WITH FUNCTION ===\n";
    Rect r = createRect(5, 3);
    cout << "Area = " << area(r) << endl;

    cout << "\n=== 10. BIT FIELDS ===\n";
    BitField bf;
    bf.x = 10; // (binary 1010)
    bf.y = 5;  // (binary 101)
    cout << "x = " << bf.x << " | y = " << bf.y << endl;

    return 0;
}
