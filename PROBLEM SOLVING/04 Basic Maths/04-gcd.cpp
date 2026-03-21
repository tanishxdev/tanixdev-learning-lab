#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int gcd(int a, int b)
{
  int gcd = 1;

  for (int i = 1; i <= min(a, b); i++)
  {
    if (a % i == 0 && b % i == 0)
    {
      gcd = i;
    }
  }
  return gcd;
}
// ⭐ Approach 2:
int gcd2(int a, int b)
{
  int gcd = 1;

  for (int i = 1; i <= sqrt(min(a, b)); i++)
  {
    if (a % i == 0 && b % i == 0)
    {
      gcd = i;
    }
  }
  return gcd;
}
// ⭐ Approach 3:
int gcd3(int a, int b)
{
  if (b == 0)
    return a;
  return gcd3(b, a % b);
}

// ⭐ Approach 4: Alternative to Approach 3 (iterative version of Euclidean algorithm):
int gcd4(int a, int b)
{
  if (b == 0)
    return a;
  return gcd4(b, a - b);
}
int main()
{
  int a, b;
  cin >> a >> b;

  int result = gcd(a, b);
  cout << "GCD of " << a << " and " << b << " is: " << result << endl;

  int result2 = gcd2(a, b);
  cout << "GCD of " << a << " and " << b << " is: " << result2 << endl;

  int result3 = gcd3(a, b);
  cout << "GCD of " << a << " and " << b << " is: " << result3 << endl;

  int result4 = gcd4(a, b);
  cout << "GCD of " << a << " and " << b << " is: " << result4 << endl;

  return 0;
}