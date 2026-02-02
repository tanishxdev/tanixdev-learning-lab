#include <bits/stdc++.h>
using namespace std;

// 1. Arithmetic Operators
void arithmaticOperators(int a, int b) {
    // Addition, +, Adds two operands
    cout <<"Addition " <<a + b << endl;
    // Subtraction, -, Subtracts second operand from the first
    cout <<"Subtraction " <<a - b << endl;
    // Multiplication, *, Multiplies two operands
    cout <<"Multiplication " <<a * b << endl;
    // Division, /, Divides first operand by the second operand
    cout << "Division "<<a / b << endl;
    // Modulo Operation, %, Returns the remainder of an integer division
    cout << "Modulo" <<a % b << endl;
    // Increment, ++, Increases the value of operand by 1
    cout <<"Increment "<< ++a << endl;
    // Decrement, --, Decreases the value of operand by 1
    cout << "Decrement "<< --b << endl;
}
// 2. Relational Operators
void relationalOperators(int a, int b) {
    // Is Equal To, ==, Checks if both operands are equal
    cout<<"is equal to " << (a == b) << endl;
    // Greater Than, >, Checks if the first operand is greater than the second operand
    cout<<"greater than " << (a > b) << endl;
    // Greater Than or Equal To, >=, Checks if the first operand is greater than or equal to the second operand
    cout<<"greater than or equal " << (a >= b) << endl;
    // Less Than, <, Checks if the first operand is lesser than the second operand
    cout<<"less than " << (a < b) << endl;
    // Less Than or Equal To, <=, Checks if the first operand is lesser than or equal to the second operand
    cout<<"less than or equal " << (a <= b) << endl;
    // Not Equal To, !=, Checks if both operands are not equal
    cout<<"not equal to " << ( a != b) << endl;
}
// 3. Logical Operators 
void logicalOperators(int a, int b){
    // Logical AND, &&, Returns true only if all the operands are true or non-zero
    cout<<"Logical AND " << (a && b) << endl;
    // Logical OR, ||, Returns true if either of the operands is true or non-zero
    cout<<"Logical OR " << (a || b) << endl;
    // Logical NOT, !, Returns true if the operand is false or zero
    cout<<"Logical NOT " << (a != b) << endl;
}
// 4. Bitwise Operators 
void bitwiseOperators(int a, int b){

    // Binary AND operator
    cout << "a & b is " << (a & b) << endl;
    // Binary OR operator
    cout << "a | b is " << (a | b) << endl;
    // Binary XOR operator
    cout << "a ^ b is " << (a ^ b) << endl;
    // Left Shift operator
    cout << "a << 1 is " << (a << 1) << endl;
    // Right Shift operator
    cout << "a >> 1 is " << (a >> 1) << endl;
    // One’s Complement operator
    cout << "~(a) is " << ~(a)<<endl;
}
// 5. Assignment Operators
void assignmentOperators(int a, int b){
    // Assignment, =, Assigns the value on the right to the variable on the left
    cout<<"assignment = " << (a = b) << endl; // means a = 5
    // Add and Assignment, +=, Adds the right operand to the left operand and assigns the result to the left operand
    cout<<"add and assignment += " << (a += b) << endl; // means a = a + 5
    // Subtract and Assignment, -=, Subtracts the right operand from the left operand and assigns the result to the left operand
    cout<<"subtract and assignment -= " << (a -= b) << endl; // means a = a - 5
    // Multiply and Assignment, *=, Multiplies the left operand by the right operand and assigns the result to the left operand
    cout<<"multiple and assignment *= " << (a *= b) << endl; // means a = a * 5
    // Divide and Assignment, /=, Divides the left operand by the right operand and assigns the result to the left operand
    cout<<"divide and assignment /= " << (a /= b) << endl; // means a = a / 5
}
// 6. Ternary or Conditional Operators 
int ternaryAndConditionalOperators(int a, int b){
    return (a > b) ? a : b; // 
}
int main()
{
    arithmaticOperators(10, 5);
    relationalOperators(10, 5);
    logicalOperators(10, 5);
    bitwiseOperators(10, 5);
    assignmentOperators(10, 5);
    cout<<ternaryAndConditionalOperators(10, 5)<<endl;

    // miscellaneous opertors
    cout<<sizeof(10); // sizeof operator
    cout<<("10, 5"); // comma operator
    cout<<"&variable"; // address of operator
    cout<<"."; // member access operator
    cout<<"->"; // member access operator
    cout<<"::"; // scope resolution operator
    return 0;
}
