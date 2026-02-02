#include <bits/stdc++.h>
using namespace std;

void D() {
    float d = 40.5f;
    cout << "In function D\n";
}

void C() {
    double c = 30.5;
    cout << "In function C\n";
}

void B() {
    int b = 20;
    C();
    cout << "In function B\n";
}

void A() {
    int a = 10;
    B();
    cout << "In function A\n";
}
int main()
{
    // 🎯 What is the Call Stack?

    // Think of the call stack like a pile of plates.

    // Each time you call a function → a new plate (stack frame) is put on top.
    // When the function finishes → that plate is removed (popped).
    // The program always works with the top plate.

    // What does a stack frame contain?
    
    // When a function is called, C++ stores 3 main things in memory (the frame):
    // Function Parameters → the arguments you passed.
    // Local Variables → variables inside that function.
    // Return Address → where to go back after the function finishes.
    // A special pointer (called Stack Pointer, SP) always points to the top of the stack.
    
    // Why is Call Stack Important?

    // It helps track function calls in the right order.
    // It manages local variables safely.
    // Without it, recursion and nested function calls wouldn’t work!
    // If the stack grows too big (too many calls), you get Stack Overflow 💥 (that’s where the famous error comes from).
    
    A();
    D();
}