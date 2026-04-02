#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
bool isPalindrome(string &s)
{
  int start = 0;          // pointer to the start of the string
  int end = s.size() - 1; // pointer to the end of the string

  // loop until the start pointer is less than the end pointer
  while (start < end)
  {
    // if the characters at the start and end pointers are not the same, return false
    if (s[start] != s[end])
    {
      return false;
    }
    // move the start pointer to the right and the end pointer to the left
    start++;
    end--;
  }
  // if the loop completes without returning false, return true
  return true;
}
// ⭐ Approach 2:
// ⭐ Approach 3:

int main()
{
  string s = "TANISHXDEV";
  if (isPalindrome(s))
  {
    cout << s << " is a palindrome." << endl; // Output: "TANISHXDEV is a palindrome."
  }
  else
  {
    cout << s << " is not a palindrome." << endl;
  }
  return 0;
}