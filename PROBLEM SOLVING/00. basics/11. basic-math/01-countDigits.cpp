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

// ⭐ Approach 2:
int countDigitsFloor(int n)
{
  if (n == 0)
    return 1;
  else
    return floor(log10(n)) + 1;
}

// ⭐ Approach 3:
int countDigitsLog(int n)
{
  if (n == 0)
    return 1;
  else
    return log10(n) + 1;
}
int main()
{
  int n;
  cin >> n;
  int result = countDigits(n);
  cout << "Number of digits in " << n << " is: " << result << endl;

  result = countDigitsFloor(n);
  cout << "Number of digits in " << n << " is: " << result << endl;

  result = countDigitsLog(n);
  cout << "Number of digits in " << n << " is: " << result << endl;
  return 0;
}