#include <bits/stdc++.h>
using namespace std;

/*
=========================================================
REVERSE A STRING USING STACK
=========================================================

Problem:
--------
Given a vector of characters, reverse it using stack.

Concept Used:
-------------
Stack (LIFO - Last In First Out)

Why Stack Works?
----------------
If we push characters in order:
a b c d

Stack top becomes:
d

When we pop:
d c b a

Which is reverse order.

Time Complexity:
O(N)  (push N + pop N)

Space Complexity:
O(N)  (extra stack used)

=========================================================
*/

void reverseString(vector<char> &s)
{
  stack<char> st; // Create empty stack

  /*
  ------------------------------------------------------
  STEP 1: Push all characters into stack
  ------------------------------------------------------
  Stack stores characters in same order.
  Top will contain last character.
  */
  for (int i = 0; i < s.size(); i++)
  {
    st.push(s[i]);
  }

  /*
  ------------------------------------------------------
  STEP 2: Pop from stack and overwrite vector
  ------------------------------------------------------
  Since stack is LIFO,
  popping gives reversed order.
  */
  int i = 0;

  while (!st.empty())
  {
    s[i] = st.top(); // Get top element
    st.pop();        // Remove it
    i++;             // Move to next index
  }
}

/*
=========================================================
MAIN FUNCTION (Testing)
=========================================================
*/
int main()
{
  vector<char> str = {'h', 'e', 'l', 'l', 'o'};

  cout << "Original string: ";
  for (char ch : str)
    cout << ch;
  cout << endl;

  reverseString(str);

  cout << "Reversed string: ";
  for (char ch : str)
    cout << ch;
  cout << endl;

  return 0;
}

// TC: O(N)
// SC: O(N)

// Note: In real systems, we should also consider edge cases like empty string, single character, etc.

/*

Example:
Input:
[h, e, l, l, o]

// Dry Run:

Initial vector:
[h, e, l, l, o]

Push all → stack: top = o

Pop sequence:
1st pop → o → s[0] = o
2nd pop → l → s[1] = l
3rd pop → l → s[2] = l
4th pop → e → s[3] = e
5th pop → h → s[4] = h

Final:
[o, l, l, e, h]
*/