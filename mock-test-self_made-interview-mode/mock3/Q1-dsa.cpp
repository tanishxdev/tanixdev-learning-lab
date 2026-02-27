#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
void longestSubstringWithoutRepeatingCharacters(string s)
{
  int n = s.size();
  int ans = 0;
  int left = 0;
  int right = n - 1;
  unordered_set<char> st;

  while (left <= right)
  {
    if (st.find(s[left]) == st.end())
    {
      st.insert(s[left]);
      ans = max(ans, (int)st.size());
      left++;
    }
    else
    {
      st.erase(s[right]);
      right--;
    }
  }
}
// ⭐ Approach 2:
// ⭐ Approach 3:

int main()
{
}