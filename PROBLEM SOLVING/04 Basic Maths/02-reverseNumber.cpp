#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int reverseNumber(int n)
{
  int rev = 0;

  while (n > 0)
  {
    int digit = n % 10;
    rev = rev * 10 + digit;
    n = n / 10;
  }

  return rev;
}
// ⭐ Approach 2:
// ⭐ Approach 3:

int main()
{
  int n;
  cin >> n;

  int result = reverseNumber(n);
  cout << "Reversed number of " << n << " is: " << result << endl;

  return 0;
}