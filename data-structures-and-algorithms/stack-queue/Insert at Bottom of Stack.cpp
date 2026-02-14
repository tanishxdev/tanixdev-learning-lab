#include <bits/stdc++.h>
using namespace std;

/*
=========================================================
INSERT ELEMENT AT BOTTOM OF STACK (Using Extra Stack)
=========================================================

Problem:
--------
Given a stack, insert an element at the bottom
without disturbing the order of other elements.

Concept Used:
-------------
Stack (LIFO - Last In First Out)

Since stack only allows:
- push (top)
- pop (top)

We cannot directly access bottom.

So we:
1) Remove all elements into temp stack
2) Push new element into original stack
3) Push back all removed elements

This makes new element go to bottom.

---------------------------------------------------------

Time Complexity:
----------------
Let N = number of elements in stack

Step 1: Move N elements to temp → O(N)
Step 2: Push 1 element → O(1)
Step 3: Move N elements back → O(N)

Total TC = O(2N) = O(N)

---------------------------------------------------------

Space Complexity:
-----------------
Extra stack stores N elements

SC = O(N)

=========================================================
*/

void insertAtBottom(stack<int> &st, int x)
{
  stack<int> temp; // Temporary stack to hold elements

  /*
  ------------------------------------------------------
  STEP 1: Move all elements from st → temp
  ------------------------------------------------------
  This empties original stack.
  */
  while (!st.empty())
  {
    temp.push(st.top()); // Move top element to temp
    st.pop();            // Remove from original stack
  }

  /*
  Now original stack is empty.
  So pushing x means it goes to bottom.
  */
  st.push(x);

  /*
  ------------------------------------------------------
  STEP 2: Move elements back from temp → st
  ------------------------------------------------------
  Order gets restored.
  */
  while (!temp.empty())
  {
    st.push(temp.top());
    temp.pop();
  }
}

/*
=========================================================
MAIN FUNCTION (Testing + Dry Run Example)
=========================================================
*/
int main()
{
  stack<int> st;

  st.push(10);
  st.push(20);
  st.push(30);

  insertAtBottom(st, 5);

  cout << "Stack elements after inserting at bottom:\n";

  while (!st.empty())
  {
    cout << st.top() << " ";
    st.pop();
  }

  return 0;
}

/*
  Let's push elements:
  Push order: 10, 20, 30

  Stack (top at right):

  Bottom → 10 20 30 ← Top
  */

/*
Output order (top to bottom):
30 20 10 5

But internally stack structure is:
Bottom → 5 10 20 30 ← Top
*/

/*
DRY RUN EXPLANATION:

Initial stack:
[10, 20, 30] (top = 30)

Step 1: Move to temp
temp: [30, 20, 10]
st: empty

Step 2: Push x
st: [5]

Step 3: Move back
st: [5,10,20,30]

Correct bottom insertion.
*/

/*
Now insert 5 at bottom.

Expected final stack:

Bottom → 5 10 20 30 ← Top
*/