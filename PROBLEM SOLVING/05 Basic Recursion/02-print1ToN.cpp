#include <bits/stdc++.h>
using namespace std;

int print1ToN(int n)
{
  if (n == 0)
    return 0;
  print1ToN(n - 1);
  cout << n << " ";
  return 0;
}
int main()
{
  int n;
  cin >> n;
  print1ToN(n);
  return 0;
}