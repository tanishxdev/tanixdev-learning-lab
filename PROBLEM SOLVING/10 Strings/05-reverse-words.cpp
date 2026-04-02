#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:

string reverseWords(string s)
{
  vector<string> words; // to store the individual words
  string word = "";     // to store the current word being processed

  // traverse the string character by character
  for (int i = 0; i < s.size(); i++)
  {
    // if the current character is not a space, add it to the current word
    if (s[i] != ' ')
    {
      word += s[i]; // add the current character to the word
    }
    else
    {
      // if the current character is a space and the word is not empty, add the word to the words vector and reset the word
      if (!word.empty())
      {
        words.push_back(word);
        word = "";
      }
    }
  }

  // after the loop, if there is a word that has not been added to the words vector, add it
  if (!word.empty())
  {
    words.push_back(word);
  }

  // reverse the order of the words in the vector
  reverse(words.begin(), words.end());

  // construct the result string by concatenating the words in the reversed order
  string result = "";

  // traverse the words vector and add each word to the result string, adding a space between words
  for (int i = 0; i < words.size(); i++)
  {
    // add the current word to the result string
    result += words[i];

    // add a space to the result string if it is not the last word
    if (i < words.size() - 1)
    {
      result += " ";
    }
  }

  return result;
}
// ⭐ Approach 2:
// ⭐ Approach 3:

int main()
{
  string s = "Hello World from C++";
  cout << reverseWords(s) << endl; // Output: "C++ from World Hello"
  return 0;
}