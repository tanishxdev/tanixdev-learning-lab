#include <bits/stdc++.h>
using namespace std;

int main() {   
    // 1. Defining Constants in C++ using const
    // const -> value cannot be changed after initialization
    const int c = 24;
    cout << "Const value c = " << c << endl;

    // Example: trying to modify const will give error
    // c = 30;  // ❌ Not allowed

    //// 2. const variable
    int var = 10;
    const int constantVar = 50;
    cout << "constantVar = " << constantVar << endl;
    // constantVar = 0; // ❌ Not allowed, will give error

    //// 3. constexpr variable
    // constexpr -> must be known at compile time
    constexpr int hoursInDay = 24;
    cout << "Hours in a day = " << hoursInDay << endl;

    //// 4. #define preprocessor
    // #define creates a macro before compilation
    #define SIDE 5
    double area = SIDE * SIDE;
    cout << "Area of square with SIDE = " << area << endl;

    return 0;
}
