#include <bits/stdc++.h>
using namespace std;

void findNum (int n) {
  	for (int i = 0; i <= 100; i++) {
      	if (i == n) {
          	cout << "Number in Range [0, 100]";
          	
          	// This will stop the function here
          	return;
        }
    }
  	cout << "Number not in Range [0, 100]";
  	
  	// Final return if the above one is not reached.
  	return;
}
int main()
{
    // Jump statements are used to manipulate the flow of the program if some conditions are met. It is used to terminate or continue the loop inside a program or to stop the execution of a function.

    // 1. continue Statement
    for(int i = 1; i <= 5; i++){
        // continue statement skips the current iteration of the loop and goes to the next iteration
        if(i == 2){
            continue;
        }
        cout << "continue "<<i << endl;
    }
    // 2. break Statement
        for(int i = 1; i <= 5; i++){
        // break statement terminates the loop
        if(i == 2){
            break;
        }
        cout << "break "<<i << endl;
    }
    // 3. return Statement : The return statement takes control out of the function itself. It is stronger than a break. It is used to terminate the entire function after the execution of the function or after some condition. Every function has a return statement with some returning value except the void() function. Although void() function can also have the return statement to end the execution of the function.
    // The return statement is used to return a value from a function and indicates the finishing of a function.

    int num = -5;
    findNum(num);
    cout<<endl;

    // 4. goto Statement : The C++ goto statement is used to jump directly to that part of the program to which it is being called.  Every goto statement is associated with the label which takes them to part of the program for which they are called. The label statements can be written anywhere in the program it is not necessary to use them before or after the goto statement.

    int num1 = 501;
    if(num1% 2 == 0)
        goto even; // label
    else
        goto odd; // label
    even:
        cout << "Number is Even" << endl;
        return 0;
    odd:
        cout << "Number is Odd" << endl;
        return 0;
    return 0;
}