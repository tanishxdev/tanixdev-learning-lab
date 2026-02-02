#include<iostream>
using namespace std;

// ----- Recursion -----
// Method to find factorial of a given number
int factorialUsingRecursion(int n) {
    if (n == 0)
        return 1;

    // recursive call
    return n * factorialUsingRecursion(n - 1);
}

// ----- Iteration -----
// Method to find factorial of a given number
int factorialUsingIteration(int n) {
    int res = 1;

    // using iteration (loop)
    for (int i = 2; i <= n; i++)
        res *= i;

    return res;
}

int main() {
    int num = 5;

    cout << "Factorial of " << num
         << " using Recursion is: "
         << factorialUsingRecursion(num) << endl;

    cout << "Factorial of " << num
         << " using Iteration is: "
         << factorialUsingIteration(num);

    return 0;
}
