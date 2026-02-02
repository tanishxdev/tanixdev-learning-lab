#include <bits/stdc++.h>
using namespace std;

int add(int a, int b)
{
    return a + b;
}
int main()
{
    // 1. if statement
    cout << "This is if block" << endl;
    int age;
    cin >> age;

    if (age >= 18)
    {
        cout << "You can vote" << endl; // if the condition is true, this statement will be executed
    }

    // 2. if else
    cout << "This is if else block" << endl;
    // int age;
    cin >> age;

    if (age >= 18)
    {
        cout << "You can vote" << endl; // if the condition is true, this statement will be executed
    }
    else
    {
        cout << "You cannot vote" << endl; // if the condition is false, this statement will be executed
    }

    // 3. if else if Ladder
    // The if else if Ladder statements allow us to include additional situations after the preliminary if condition. The 'else if' condition is checked only if the above condition is not true, and the 'else' condition is the statement that will be executed if none of the above conditions is true. If some condition is true, then not only the associated block is executed.
    cout << "This is if else if ladder block" << endl;
    // int age;
    cin >> age;

    if (age >= 18)
    {
        cout << "You can vote" << endl; // if the condition is true, this statement will be executed
    }
    else if (age >= 13)
    {
        cout << "You can vote" << endl; // if the condition is true, this statement will be executed
    }
    else
    {
        cout << "You cannot vote" << endl; // if the condition is false, this statement will be executed
    }

    // 4. Nested if else ->  avoid this due to complexity
    cout << "This is nested if else block" << endl;
    // int age;
    cin >> age;

    if (age >= 18)
    {
        cout << "You can vote" << endl; // if the condition is true, this statement will be executed
    }
    else
    {
        cout << "You cannot vote" << endl; // if the condition is false, this statement will be executed
        if (age >= 13)
        {
            cout << "You can vote" << endl; // if the condition is true, this statement will be executed
        }
        else
        {
            cout << "You cannot vote" << endl; // if the condition is false, this statement will be executed
        }
    }

    // 5. Switch Statement
    //     switch (expression) {
    //     case constant1: /* code */ break;
    //     case constant2: /* code */ break;
    //     default: /* code */ break;
    // }
    cout << "This is switch block" << endl;
    // Variable to the used as switch expression
    char x = 'A';

    // Switch statement with three cases
    switch (x)
    {
    case 'A':
        cout << "A" << endl;
        break;
    case 'B':
        cout << "B" << endl;
        break;
    default:
        cout << "Other than A and B" << endl;
        break;
    }

    // Another example
    int dayNumber = 4;
    // cin >> dayNumber;

    // determine the day number using switch case
    switch (dayNumber)
    {
    case 1:
        cout << "Monday"<<endl;
        break;
    case 2:
        cout << "Tuesday"<<endl;
        break;
    case 3:
        cout << "Wednesday"<<endl;
        break;
    case 4:
        cout << "Thursday"<<endl;
        break;
    case 5:
        cout << "Friday"<<endl;
        break;
    case 6:
        cout << "Saturday"<<endl;
        break;
    case 7:
        cout << "Sunday";
        break;
    default:
        cout << "no such day exist"<<endl;
        break;
    }
    // 6. Ternary Operator ( ? : )
    // expression ? statement_1 : statement_2;
    cout << "This is ternary operator block" << endl;
    int a = 10, b = 20;
    int max = (a > b) ? a : b; // if the condition is true, then a is assigned to max, else b is assigned to max
    cout << max << endl;

    // 7. Jump Statements
    cout << "This is jump statements block" << endl;
    // continue, break, goto, return

    // contiune
    for (int i = 0; i < 10; i++)
    {
        // if i become 5 then continue will skip the current iteration
        if (i == 5)
        {
            continue; // continue will skip the current iteration and move to the next iteration
        }
        cout << i << endl;
    }

    // break
    for (int i = 0; i < 10; i++)
    {
        // if i become 5 then then break will terminate the loop
        if (i == 5)
        {
            break; // break will terminate the loop;
        }
        cout << i << endl;
    }

    // goto
    int i = 0;
    goto label; // goto will jump to the label
label:
    cout << i << endl;

    // return
    // int res = add(3,5);
    int res = add(3, 5);
    cout << res << endl;

    int resAgain = add(3, 50);
    cout << resAgain << endl;
}
