#include <iostream>
#include <unordered_set>
using namespace std;

int lengthOfLongestSubstring(string s)
{
  int n = s.length();
  int maxLength = 0;

  // Fix starting point
  for (int i = 0; i < n; i++)
  {
    unordered_set<char> seen; // To check duplicates

    // Extend substring
    for (int j = i; j < n; j++)
    {
      // If character already exists, break
      if (seen.find(s[j]) != seen.end())
        break;

      seen.insert(s[j]); // Insert character
      maxLength = max(maxLength, j - i + 1);
    }
  }

  return maxLength;
}
