#include <bits/stdc++.h>
using namespace std;

void continueStatement(){
    for (int i = 1; i < 10; i++) {

      	// Skip the execution for i = 5
        if (i == 5)
            continue;
        cout << i << " ";
    }
    cout<<endl;
}
void breakStatment(){
    for (int i = 1; i < 10; i++) {

      	// Skip the execution for i = 5
        if (i == 5)
            break;
        cout << i << " ";
    }
    cout<<endl;
}
void returnStatment(int n){
    	for (int i = 0; i <= 100; i++) {
      	if (i == n) {
          	cout << "Number in Range [0, 100]";
          	
          	// This will stop the function here
          	return;
        }
    }
  	cout << "Number not in Range [0, 100]";
  	
  	// Final return if the above one is not reached.
    cout<<endl;
}
void gotoStatment(int n){

    cout<<endl;
    if (n % 2 == 0) {
      
      	// Skipping to label1
        goto label1;
    }
    else {
      
      	// Skipping to label2
        goto label2;
    }

    label1:
    cout << "Number is Even";
    cout<<endl;
    goto end;   // prevent fallthrough
    
    label2:
    cout << "Number is Odd";
    cout<<endl;
    
    end:
    return;
}

int main()
{
    
    // continue Statement
    continueStatement();
    // break Statement
    breakStatment();
    // return Statement
    returnStatment(-5);
    returnStatment(100);
    // goto Statement
    gotoStatment(5);
    gotoStatment(50);
    return 0;
}