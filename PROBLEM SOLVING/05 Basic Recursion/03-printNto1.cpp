#include <bits/stdc++.h>
using namespace std;

int printNTo1(int n)
{
  if (n == 0)
    return 0;
  cout << n << " ";
  printNTo1(n - 1);
  return 0;
}
int main()
{
  int n;
  cin >> n;
  printNTo1(n);
  return 0;
}