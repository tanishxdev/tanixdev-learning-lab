#include <bits/stdc++.h>
using namespace std;

int main()
{
    // 1. Basic Input and Output in C++
    // Taking input from user
    int a, b;
    cin >> a >> b;

    // Performing addition
    int sum = a + b;

    // Displaying the result
    cout << "Sum: " << sum << endl;

    // 2. Standard Input Stream - cin
    // The type of input provided should be same as that of the variable being used to store it. Otherwise, it may lead to undefined error or input failure.

    // 3. Un-buffered Standard Error Stream - cerr → Standard Error Stream (unbuffered) (prints error messages immediately)
    // The C++ cerr is the standard error stream that is used to output the errors. This is also an instance of the iostream class. As cerr in C++ is un-buffered so it is used when one needs to display the error message immediately. It does not have any buffer to store the error message and display it later.

    // The main difference between cerr and cout comes when you would like to redirect output using "cout" that gets redirected to file if you use "cerr" the error doesn't get stored in file.(This is what un-buffered means ..It cant store the message)

    cerr << "This is an error message (cerr)" << endl;

    // 4. Buffered Standard Output Stream - clog → Standard Error Stream (buffered) (stores error messages in buffer and prints later, unless flushed)
    // This is also an instance of ostream class and used to display errors but unlike cerr the error is first inserted into a buffer and is stored in the buffer until it is not fully filled. or the buffer is not explicitly flushed (using flush()). The error message will be displayed on the screen too.

    clog << "This is a log message (clog)" << endl;
    return 0;
}