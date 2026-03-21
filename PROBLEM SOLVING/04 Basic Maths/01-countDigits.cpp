#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int countDigits(int n)
{
  int count = 0;
  while (n > 0)
  {
    n = n / 10;
    count++;
  }
  return count;
}
int countDigits2(int n)
{
  if (n == 0)
    return 0;
  return floor(log10(n)) + 1;
}
// ⭐ Approach 2:
// ⭐ Approach 3:

int main()
{
  int n;
  cin >> n;
  cout << countDigits(n) << endl;
  cout << countDigits2(n) << endl;
  return 0;
}