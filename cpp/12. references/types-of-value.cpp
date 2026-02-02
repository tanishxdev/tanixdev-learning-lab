#include <bits/stdc++.h>
using namespace std;

// 🧠 Problem : 
// Example : 
// Constraint : 

// 🔴 Approach 1 Brute Force : 
// Intuition :
// Algo :
// TC :
// SC :

// 🔵 Approach 2 Better : 
// Intuition :
// Algo :
// TC :
// SC :

// 🟢 Approach 3 Optimal: 
// Intuition :
// Algo :
// TC :
// SC :

int main()
{
    // Lvalue(Left Value) - An lvalue (locator value) refers to an object that occupies some identifiable location in memory. You can take the address of an lvalue using the & operator, and it can appear on the left-hand side or right-hand side of an assignment.

    int lvalue = 10; // lvalue is an lvalue because it has a specific memory location (it can be assigned a value) 
    lvalue = 20; // valid

    cout<<"Value of lvalue: "<<lvalue<<endl;
    //  Rvalue(Right Value) - An rvalue is a value that does not have a persistent memory address (or it's not safe/allowed to take its address). Rvalues typically appear on the right-hand side of an assignment.

    int rvalue = 5+3; // 5+3 is an rvalue because it does not have a specific memory location (it cannot be assigned a value)
    int z = rvalue; // rvalue is an rvalue because it does not have a specific memory location (it cannot be assigned a value)
    z = 10; // valid
    cout<<"Value of rvalue: "<<rvalue<<endl;

    // 3. Prvalue (Pure Rvalue) - A prvalue (pure rvalue) is a type of rvalue that represents temporary values that don’t have an identity (like literals or the result of most expressions).
    
    int prvalue = 10; // 10 is a prvalue because it is a literal and does not have a specific memory location (it cannot be assigned a value)
    cout<<"Value of prvalue: "<<prvalue<<endl;

    int b = prvalue + 5; // prvalue + 5 is a prvalue because it does not have a specific memory location (it cannot be assigned a value)
    cout<<"Value of b: "<<b<<endl; 

    // 4. Xvalue (Expiring Value)
    // An xvalue (expiring value) is a type of rvalue that represents an object near the end of its lifetime. It typically refers to resources that can be moved from.

    int xvalue = 28; // 28 is an rvalue because it does not have a specific memory location (it cannot be assigned a value)
    int &&rvalue_ref = std::move(lvalue); // std::move(lvalue) is an xvalue because it indicates that the resource can be moved from lvalue
    cout<<"Value of xvalue: "<<xvalue<<endl;

    // Glvalue (Generalized Lvalue)
    // A glvalue (generalized lvalue) refers to any value that has an identifiable location in memory (includes both lvalues and xvalues).

    int genvalue = 30; // genvalue is a glvalue because it has a specific memory location (it can be assigned a value)
    genvalue = 40; // valid
    cout<<"Value of glvalue: "<<genvalue<<endl;
    return 0;
}