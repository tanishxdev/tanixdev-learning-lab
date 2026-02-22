#include <bits/stdc++.h>
using namespace std;

// ⭐ 1: Problem 1: Reverse a String Using Stack
void reverseString(vector<string> &str)
{
  stack<string> st;

  for (const auto &s : str)
    st.push(s); // Push each string onto the stack

  for (size_t i = 0; i < str.size(); ++i)
  {
    str[i] = st.top(); // Pop the top string from the stack and assign it back to the original vector
    st.pop();
  }

  return;
}

// ⭐ 2: Problem 2: Insert at Bottom of Stack

void insertAtBottom(stack<int> &st, int x)
{

  stack<int> tempStack;

  while (!st.empty())
  {
    tempStack.push(st.top());
    st.pop();
  }

  st.push(x);

  while (!tempStack.empty())
  {
    st.push(tempStack.top());
    tempStack.pop();
  }
}

// ⭐ Problem 3: Make Array Beautiful (Adjacent Number Removal)
#include <iostream>
#include <stack>
#include <vector>
using namespace std;

vector<int> makeBeautiful(vector<int> &arr)
{
  stack<int> st;

  for (int i = 0; i < arr.size(); i++)
  {
    if (st.empty())
    {
      st.push(arr[i]);
    }
    else
    {
      // Check if both are same sign
      if ((arr[i] >= 0 && st.top() >= 0) || (arr[i] < 0 && st.top() < 0))
      {
        st.push(arr[i]);
      }
      else
      {
        st.pop(); // Both destroyed
      }
    }
  }

  // Convert stack to vector
  vector<int> result(st.size());
  int index = st.size() - 1;
  while (!st.empty())
  {
    result[index--] = st.top();
    st.pop();
  }

  return result;
}

// Problem 4: Remove Adjacent Duplicates in String

int removeDuplicates(vector<string> &v)
{
  stack<string> st;

  for (int i = 0; i < v.size(); i++)
  {
    if (st.empty())
    {
      st.push(v[i]);
    }
    else
    {
      if (st.top() == v[i])
      {
        st.pop();
      }
      else
      {
        st.push(v[i]);
      }
    }
  }
  return st.size();
}

// valid parentheses
bool isValid(string s)
{
  stack<char> st;
  for (int i = 0; i < s.length(); i++)
  {
    if (s[i] == '(')
    {
      st.push(s[i]);
    }
    else
    {
      if (st.empty())
      {
        return false;
      }
      else
      {
        st.pop();
      }
    }
  }
  return st.empty();
}

bool isValidParenthesesOptimized(string s)
{
  int left = 0;
  for (int i = 0; i < s.length(); i++)
  {
    if (s[i] == '(')
    {
      left++;
    }
    else
    {
      if (left == 0)
      {
        return false;
      }
      else
      {
        left--;
      }
    }
  }
  return left == 0;
}

// Problem 6: Minimum Add to Make Parentheses Valid
int minAddToMakeValid(string s)
{
  stack<char> st;

  int count = 0;

  for (int i = 0; i < s.length(); i++)
  {
    if (s[i] == '(')
    {
      st.push(s[i]);
    }
    else
    {
      if (st.empty())
      {
        count++;
      }
      else
      {
        st.pop();
      }
    }
  }
  return count + st.size();
}

bool isValidMixed(string s)
{
  stack<char> st;

  for (int i = 0; i < s.length(); i++)
  {
    // Opening brackets - push
    if (s[i] == '(' || s[i] == '{' || s[i] == '[')
    {
      st.push(s[i]);
    }
    else
    {
      // Closing brackets - check match
      if (st.empty())
        return false;

      if (s[i] == ')')
      {
        if (st.top() != '(')
          return false;
        st.pop();
      }
      else if (s[i] == '}')
      {
        if (st.top() != '{')
          return false;
        st.pop();
      }
      else if (s[i] == ']')
      {
        if (st.top() != '[')
          return false;
        st.pop();
      }
    }
  }

  return st.empty();
}
// main function to test the above implementations
int main()
{
}