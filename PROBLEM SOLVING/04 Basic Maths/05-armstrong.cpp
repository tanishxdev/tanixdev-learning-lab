#include <bits/stdc++.h>
using namespace std;

bool isArmstrong(int n)
{
  int original = n;
  int sum = 0;

  while (n > 0)
  {
    int digit = n % 10;
    sum += pow(digit, 3);
    n = n / 10;
  }
  return sum == original;
}

int main()
{
  int n;
  cin >> n;
  if (isArmstrong(n))
    cout << "Yes, it is an Armstrong number." << endl;
  else
    cout << "No, it is not an Armstrong number." << endl;
  return 0;
}