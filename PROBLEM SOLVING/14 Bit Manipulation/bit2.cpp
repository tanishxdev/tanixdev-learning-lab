#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
// ⭐ Approach 2:
// ⭐ Approach 3:
bool checkIthBit(int n, int i)
{

  string binary = "";

  while (n > 0)
  {
    binary += *(n % 2 == 0 ? "0" : "1");
    n /= 2;
  }

  if (i >= binary.size())
    return false;

  return binary[i] == '1';
}
int main()
{
  int n = 5;
  int i = 2;

  if (checkIthBit(n, i))
    cout << "Bit is SET\n";
  else
    cout << "Bit is NOT SET\n";
}