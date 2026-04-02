#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int stringLength(string &s)
{
  int length = 0; // to store the length of the string

  // traverse the string until we reach the null character
  while (s[length] != '\0')
  {
    length++; // increment the length for each character
  }
  return length; // return the length of the string
}

int main()
{
  string s = "TANISHXDEV";
  cout << "Length of the string: " << stringLength(s) << endl; // Output: 10
  return 0;
}