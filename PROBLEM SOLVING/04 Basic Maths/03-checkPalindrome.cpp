#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
bool isPalindrome(int n)
{
  int original = n;
  int rev = 0;
  while (n > 0)
  {
    int digit = n % 10;
    rev = rev * 10 + digit;
    n = n / 10;
  }
  return original == rev;
}
// ⭐ Approach 2:
// ⭐ Approach 3:

int main()
{
  int n;
  cin >> n;

  bool result = isPalindrome(n);
  if (result)
    cout << n << " is a palindrome number." << endl;
  else
    cout << n << " is not a palindrome number." << endl;

  return 0;
}