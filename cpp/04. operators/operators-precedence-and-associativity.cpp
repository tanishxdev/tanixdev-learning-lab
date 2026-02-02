#include <bits/stdc++.h>
using namespace std;


int main()
{
    // Operator Precedence in C++
    // Multiplication has higher precedence - means it is evaluated first
    int result = 10 + 20 * 30;

    cout << "Result: " << result << endl;

    // Operator Associativity in C++
    // Operator associativity determines the order in which operands are grouped when multiple operators have the same precedence. There are two types of associativity:

    // Left-to-right associativity means that when multiple operators of the same precedence appear in an expression, they are evaluated from left to right. For example, in the expression a + b - c, addition and subtraction have the same precedence and are left-associative, so the expression is evaluated as (a + b) - c.
    // Right-to-left associativity means the operators are evaluated from right to left. For example, the assignment operator = is right-associative. So, in the expression a = b = 4, the value 4 is first assigned to b, and then the result of that assignment (b, which is now 4) is assigned to a.

    // example of left-to-right associativity
    int a = 10;
    int b = 20;
    int c = 30;
    int total = a - b + c; // evaluated as (a - b) + c
    cout << "Total: " << total << endl;

    // example of right-to-left associativity
    a = 10;
    b = 20;
    c = 30;
    total = a = b = c; // evaluated as c = b = a
    cout << "Total: " << total << endl; // both a and b will be assigned the value of c, which is 30

    
    return 0;
}