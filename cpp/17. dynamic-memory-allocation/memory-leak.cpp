#include <iostream>
using namespace std;

int main()
{

    // allocate memory
    int *ptr = new int;
    *ptr = 20;
    cout << *ptr << endl;

    // Forgot to delete memory delete ptr;
    return 0;
}