#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int printDivisors(int n)
{
  for (int i = 1; i <= n; i++)
  {
    if (n % i == 0)
    {
      cout << i << " ";
    }
  }
  return 0;
}
// ⭐ Approach 2:
int printDivisors2(int n)
{
  for (int i = 1; i <= sqrt(n); i++)
  {
    if (n % i == 0)
    {
      cout << i << " ";
      if (i != n / i)
      {
        cout << n / i << " ";
      }
    }
  }
  return 0;
}
// ⭐ Approach 3:

int main()
{
  int n;
  cin >> n;

  printDivisors(n);
  cout << endl;
  printDivisors2(n);
  cout << endl;

  return 0;
}