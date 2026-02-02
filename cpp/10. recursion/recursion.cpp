#include <bits/stdc++.h>
using namespace std;

// 1. basic recursion functions
void printHelloWorld(int n){

    // base case
    if(n==0){
        return;
    }
    cout<<"Hello World "<< n <<endl;
    
    // recursive case
    printHelloWorld(n-1);
}

// 2. direct recursion
void directRec(int n){
    if(n == 0){
        return;
    }
    cout<<"direct recursion "<<n<<endl;

    // direct recursion call
    directRec(n-1);
}
// 3. head recursion
void headRec(int n){
    if(n != 0){
        // recursion call before processing
        headRec(n-1);
    }
    cout<<"head recursion "<<n<<endl;
} // Here, the function goes deep into recursion first and processes while returning.

// 4. tail recursion
void tailRec(int n){
    if(n == 0){
        return;
    }
    cout<<"tail recursion "<<n<<endl;

    // two recursion calls
    tailRec(n-1);
    tailRec(n-1);
}
// 4. nested recursion
int nestedRec(int n) {
    if (n > 100)
        return n - 10;

    // Recursive call inside another recursive call
    return nestedRec(nestedRec(n + 11));
    cout<<endl;
}
// 5. indirect recursion 
void indirectRec(int);
void indirectRecB(int);

void indirectRec(int n) {
    if (n > 0) {
        cout << n << " ";
        indirectRecB(n - 1);
    }
}

void indirectRecB(int n) {
    if (n > 0) {
        cout << n << " ";
        indirectRec(n / 2);
    }
}

int main()
{
    // 🎯 Recursion is a programming technique where a function calls itself repeatedly until a specific base condition is met. A function that performs such self-calling behavior is known as a recursive function, and each instance of the function calling itself is called a recursive call.

    // 1. basic recursion functions
    printHelloWorld(5);

    // 🎯 type of recursion 
    // direct -> head, tail, tree
    // indirect 

    // direct recursion - Direct recursion occurs when a function calls itself directly from within its body.
    directRec(5);

    // head recursion - In head recursion, the recursive call happens before any processing in the function. The function calls itself first and processes later.

    headRec(5);

    // tail recursion - Tree recursion happens when a function calls itself more than once within its body, forming a tree-like structure.

    tailRec(5);
    // Nested recursion - Tree recursion happens when a function calls itself more than once within its body, forming a tree-like structure.
    cout<<nestedRec(5);

    // Indirect Recursion - In indirect recursion, a function does not call itself directly. Instead, it calls another function that eventually calls the first one, creating a chain of calls.

    indirectRec(10);
    return 0;
}