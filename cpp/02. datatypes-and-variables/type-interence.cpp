#include <bits/stdc++.h>
using namespace std;

// 3. auto vs decltype
int fun()
{
    return 42;
}
char fun2()
{
    return 'x';
}
// 4. Together in Templates
template <class A, class B>
auto findMin(A a, B b) -> decltype(a < b ? a : b)
{
    return (a < b) ? a : b;
}
int main()
{
    // 1. Type Inference
    auto a = 10;    // compiler makes it int
    auto b = 3.14;  // compiler makes it double
    auto c = 'A';   // compiler makes it char
    auto d = 3.14f; // compiler makes it float

    cout << a << " " << b << " " << c << " " << d << endl;

    // 2. decltype - take type from another variable
    int x = 5;
    decltype(x) y = 10; // y will also be int (same as x)

    double z = 3.14;
    decltype(z) pi = z; // pi will be double

    cout << y << " " << pi;

    // 3. auto vs decltype

    // auto → Looks at value on the right-hand side and decides type.
    // decltype → Looks at expression/variable and copies its declared type.
    auto autoA = fun();     // a = int (from return value)
    cout<<autoA<<endl;
    decltype(fun2()) autoB; // b = char (from return type of fun2)
    cout<<autoB<<endl;

    // 4. Together in Templates
    cout<<findMin(3, 7)<<endl;        // both int
    cout<<findMin(3.14, 2.71)<<endl;  // both double

    // ✔ auto → return type is not written manually.
    // ✔ decltype(a < b ? a : b) → return type decided by comparing a and b.
    return 0;
}