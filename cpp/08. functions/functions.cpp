#include <bits/stdc++.h>
using namespace std;

// 1. Void Function
// -> A function that does not return any value.
void printHello() {
    cout << "Hello World" << endl;
}

// 2. Return-Type Function
// -> A function that returns an integer value.
int add(int a, int b) {
    return a + b;
}

// 3. Parameters and Arguments
// -> 'a' and 'b' here are parameters.
// -> When calling, we pass actual values called arguments.
int multiply(int a, int b) {
    return a * b;
}

// 4. Variable Shadowing Demo
// -> Global variable
int globalValue = 10;

// 5. Default Arguments
// -> A parameter can have a default value.
// -> If caller does not pass an argument, default is used.
void funWithDefaultArguments(int a = 10) {
    cout << "Default Argument Function Value = " << a << endl;
}

// 6. Function Overloading
// -> Same function name but different parameter types or count.
// -> Compiler decides which function to call based on arguments.
int area(int side) {
    return side * side;
}
int area(int length, int width) {
    return length * width;
}

// 7. Inline Function
// -> Suggests compiler to replace function call with actual code.
// -> Used for very small functions (saves function call overhead).
inline int square(int x) {
    return x * x;
}

// 8. Function with Reference Parameters
// -> Allows modification of the original variable.
void incrementByRef(int &n) {
    n++;
}

// 9. Const Parameters
// -> Prevent modification of passed variable.
void printConst(const int &n) {
    cout << "Const value: " << n << endl;
    // n++; ❌ Not allowed (read-only)
}

// 10. Recursion
// -> A function calling itself.
int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

int main() {
    // 🎯 1. Calling a void function
    printHello();

    // 🎯 2. Calling a return-type function
    int returnFunction = add(20, 30);
    cout << "Addition: " << returnFunction << endl;

    // 🎯 3. Parameters and Arguments demo
    int returnFunction1 = multiply(20, 30); // arguments passed
    cout << "Multiplication: " << returnFunction1 << endl;

    // 🎯 4. Scoping of variables
    int a = 10; // local variable inside main
    cout << "Local a = " << a << endl;
    {
        int a = 20; // inner block local variable
        cout << "Inner block a = " << a << endl;
    }
    cout << "Outer block a = " << a << endl;

    // 🎯 5. Variable Shadowing
    int globalValue = 100; // shadows the global 'globalValue'
    cout << "Access globalValue using scope resolution: " << ::globalValue << endl;

    // 🎯 6. Default Arguments
    cout << "Default is used -> ";
    funWithDefaultArguments();    // uses default (10)
    cout << "Uses passed value (25) -> ";
    funWithDefaultArguments(25);  // uses passed value (25)

    // 🎯 7. Function Overloading
    cout << "Area of square (side=5): " << area(5) << endl;
    cout << "Area of rectangle (4x6): " << area(4, 6) << endl;

    // 🎯 8. Inline Function
    cout << "Square of 7: " << square(7) << endl;

    // 🎯 9. Function with Reference Parameters
    int num = 5;
    incrementByRef(num);
    cout << "After incrementByRef: " << num << endl;

    // 🎯 10. Const Parameters
    printConst(num);

    // 🎯 11. Recursion
    cout << "Factorial of 5 = " << factorial(5) << endl;

    // ⚡ Rules for Default Arguments:
    // 1. Default Values Must Be Specified in Function Declarations.
    // 2. Default Arguments Cannot Be Modified.
    // 3. Default Arguments Must Be Provided from Right to Left.
    // 4. Be careful with function overloading + default arguments -> may cause ambiguity.

    return 0;
}
