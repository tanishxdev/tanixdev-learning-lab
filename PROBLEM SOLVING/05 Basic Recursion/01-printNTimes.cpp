#include <bits/stdc++.h>
using namespace std;

int printNTimes(int n)
{
  if (n == 0)
    return 0;
  cout << "Hello World" << endl;
  return printNTimes(n - 1);
}
int main()
{
  int n;
  cin >> n;
  printNTimes(n);
  return 0;
}