#include <bits/stdc++.h>
using namespace std;

// 2. unique_ptr
class Reactangle{
    int length, breadth;
    public:
    Reactangle(int l, int b){
        length = l;
        breadth = b;
    }
    int area(){
        return length * breadth;
    }
};
int main()
{
    // 1. unique_ptr
    auto_ptr<int> p1(new int(5));
    auto_ptr<int> p2 = p1; // Ownership moves to p2

    // 2. unique_ptr
    unique_ptr<Reactangle> p3(new Reactangle(10,5));
    cout << p3->area() << endl;

    unique_ptr<Reactangle> p4; 
    p4 = move(p3); // Ownership moves to p4
    cout << p3->area() << endl;

    // 3. shared_ptr
    shared_ptr<int> p5(new int(10));
    shared_ptr<int> p6 = p5; // Increment reference count
    cout << *p6 << endl;

    // 4. weak_ptr
    // weak_ptr<int> p7(new int(20));
    // weak_ptr<int> p8 = p7; // Increment reference count

    return 0;
}