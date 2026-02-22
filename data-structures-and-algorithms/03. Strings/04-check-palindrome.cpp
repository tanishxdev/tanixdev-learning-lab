#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
void checkPalindrome(const string &s)
{
  int left = 0, right = s.size() - 1;
  while (left < right)
  {
    if (s[left] != s[right])
    {
      cout << "Not a palindrome" << endl;
      return;
    }
    left++;
    right--;
  }
  cout << "Palindrome" << endl;
}
// ⭐ Approach 2:
// ⭐ Approach 3:
int main()
{
  string s;
  getline(cin, s);
  checkPalindrome(s);
}