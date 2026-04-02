#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
#include <bits/stdc++.h>
using namespace std;

string longestCommonPrefix(vector<string> &str)
{
  // If input is empty
  if (str.empty())
    return "";

  // Sort strings
  sort(str.begin(), str.end());

  // Get first and last strings
  string first = str[0];
  string last = str[str.size() - 1];

  string ans = "";

  // Compare characters
  int minLength = min(first.size(), last.size());

  for (int i = 0; i < minLength; i++)
  {
    if (first[i] != last[i])
      break;

    ans += first[i];
  }

  return ans;
}

// ⭐ Approach 2:
string longestCommonPrefixBetter(vector<string> &str)
{
  if (str.empty())
    return "";

  string prefix = str[0];

  for (int i = 1; i < str.size(); i++)
  {

    // Check if current string starts with prefix
    while (str[i].find(prefix) != 0)
    {
      prefix.pop_back(); // Remove last character from prefix
      if (prefix.empty())
        return "";
    }
  }
  return prefix;
}

// ⭐ Approach 3:
int main()
{

  vector<string> input = {"interview", "internet", "internal", "interval"};

  string result = longestCommonPrefix(input);

  cout << "Longest Common Prefix: " << result << endl;

  // Testing Approach 2
  string resultBetter = longestCommonPrefixBetter(input);

  cout << "Longest Common Prefix: " << resultBetter << endl;

  return 0;
}