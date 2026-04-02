#include <bits/stdc++.h>
using namespace std;

// Reverse a string

// ⭐ Approach 1: BRUTE FORCE
void reverseString(string &s)
{
  string ans = ""; // to store the reversed string

  // traverse the string from the end and add each character to the ans string
  for (int i = s.size() - 1; i >= 0; i--)
  {
    // add the current character to the ans string
    ans += s[i];
  }
  // assign the ans string to the original string s
  s = ans;
}

// ⭐ Approach 2: TWO POINTERS
void reverseStringTwoPointers(string &s)
{
  int start = 0;          // pointer to the start of the string
  int end = s.size() - 1; // pointer to the end of the string

  // loop until the start pointer is less than the end pointer
  while (start < end)
  {
    // swap the characters at the start and end pointers
    swap(s[start], s[end]);
    // move the start pointer to the right and the end pointer to the left
    start++;
    end--;
  }
}
int main()
{
  string s = "Hello, World!";
  reverseString(s);
  cout << s << endl; // Output: "!dlroW ,olleH"

  s = "Hello, World!"; // reset the string
  reverseStringTwoPointers(s);
  cout << s << endl; // Output: "!dlroW ,olleH"
  return 0;
}
