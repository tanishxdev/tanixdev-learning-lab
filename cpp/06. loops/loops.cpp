#include <bits/stdc++.h>
using namespace std;
int main()
{
    // 🎯 Sometimes there is a need to perform some operation more than once or (say) n number of times.

    cout<<"Hi"<<endl;
    cout<<"Hi"<<endl;
    cout<<"Hi"<<endl;
    cout<<"Hi"<<endl;
    cout<<"Hi"<<endl;
    cout<<"Hi"<<endl;

    // instead doing this we can use loops. means we can perform the same operation more than once.

    int n = 5;
    for(int i=1; i<=n; i++)
    {
        cout<<"Hi "<<i<<endl;
    }
    
    // 🎯 Types of loops

    // for Loop :The for loop is an entry-controlled loop, which means that it checks whether the test condition is true before executing the statements inside it.

    // Code ☝️ above example is for for loop.

    // while Loop : The while loop is also an entry-controlled loop which is used in situations where we do not know the exact number of iterations of the loop beforehand.

    int i = 1;

    while(i<=10)
    {
        cout<<"Bye "<<i<<endl;
        i++;
    }

    // do-while Loop : The do-while loop is an exit-controlled loop which means the condition is checked after executing the body of the loop. So, in a do-while loop, the loop body will execute at least once irrespective of the test condition.

    int j = 1;

    do
    {
        cout<<"Bye again "<<j<<endl;
        j++;
    } while (j<=11);

    // For Each Loop : The for-each loop in C++ is a range-based for loop. It automatically iterates over each element of a container or array using the container's begin() and end() functions internally.

    // Use of Reference vs Value :
    // By Value : for(auto it : arr), works on a copy, modifications won't affect the original.
    // By Reference : for(auto &it : arr), you can modify elements directly.
    
    vector<int> arr = {1,2,3,4,5,6,7,8,9,10};
    
    // by value
    cout<<"itrating by value"<<endl;
    for(auto it : arr){
        cout<<it<<" ";
    }
    cout<<endl;

    // by reference
    cout<<"itrating by reference"<<endl;
    for(auto &it : arr){
        cout<<it<<" ";
    }
    cout<<endl;
    
    // Infinite Loops -> avoid infinite loops.
    
    // for(;;)
    // {
    //     cout<<"Hi"<<endl;
    // }

    // Nesting of Loops
    
    for(int i=1; i<=3; i++)
    {
        for(int j=1; j<=3; j++)
        {
            cout<<"Hi "<<i<<" "<<j<<endl;
        }
    }
    return 0;

    // Loop Control Statements : The break statement when encountered, terminates the loop regardless of its test condition. This is useful when the execution of loop is dependent on multiple conditions.

    for (int i = 0; i < 5; i++) {
        
        // Terminating before reaching i = 4
        if (i == 2) break;
        cout << "Hi" << endl; 
    }

    // continue statement : The continue statement when encountered, skips the current iteration of the loop and moves to the next iteration.
    for (int i = 0; i < 5; i++) {
        
        // Skipping i = 4
        if (i == 2) continue;
        cout << "Hi" << endl; 
    }
    return 0;
}