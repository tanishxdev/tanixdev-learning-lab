#include <bits/stdc++.h>
using namespace std;

// Default Arguments
void funwithdefaultarguments(int a = 10) {
    cout << "Default Argument Function Value = " << a << endl;
}

// Example for understanding default arguments RULES

// Find Area of Rectangle with Optional Length
double calculateArea(int width, int length = 10) {
    return width * length;
}

// Combine Default and Parameterized Constructor
class A {
public:
    int data;
    // Parameterized constructor with default values
    A(int val = 10) { // default value for val is 10
        data = val;
    }
};  
int main()
{
    // 🎯 Default Arguments in C++
    // A default argument is a value provided for a parameter in a function declaration that is automatically assigned by the compiler if no value is provided for those parameters in function call. If the value is passed for it, the default value is overwritten by the passed value.

    // ⚡ Rules for Default Arguments:
    // 1. Default Values Must Be Specified in Function Declarations
    // 2. Default Arguments Cannot Be Modified
    // 3. Default Arguments Must Be Provided from Right to Left
    // 4. Ambiguity in Function Overloading
    // default argument function

    funwithdefaultarguments();    // uses default (10)

    // preference of passed value over default value
    funwithdefaultarguments(25);  // uses passed value (25)



    // Example for understanding default arguments RULES
    
    // Find Area of Rectangle with Optional Length

    cout<<"Area 1: "<<calculateArea(5)<<endl;      // uses default length (10), area = 5 * 10 = 50
    cout<<"Area 2: "<<calculateArea(5, 20)<<endl;  // uses passed length (20), area = 5 * 20 = 100

    // Combine Default and Parameterized Constructor
    // All the rules of the default arguments will be applied to these parameters.

    A a1;
    A a2(25);

    cout<<"A1 Data: "<<a1.data<<endl;  // uses default (10)
    cout<<"A2 Data: "<<a2.data<<endl;  // uses passed value (25)
    return 0;
}