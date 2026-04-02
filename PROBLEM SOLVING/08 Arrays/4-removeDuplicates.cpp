#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
int removeDuplicatesBrute(vector<int> &arr)
{
  // Check if the array is empty
  if (arr.empty())
    return 0;

  // Create a result vector to store unique elements
  vector<int> result;

  // Add the first element to the result vector as it is always unique
  result.push_back(arr[0]);

  // Iterate through the array and add unique elements to the result vector
  for (int i = 1; i < arr.size(); i++)
  {
    // If the current element is different from the previous element, it is a unique element
    if (arr[i] != arr[i - 1])
    {
      // Add the unique element to the result vector
      result.push_back(arr[i]);
    }
  }

  // Copy the unique elements back to the original array
  for (int i = 0; i < result.size(); i++)
  {
    arr[i] = result[i];
  }

  // Return the number of unique elements
  return result.size();
}
// ⭐ Approach 2:
int removeDuplicatesOptimalTwoPointers(vector<int> &arr)
{
  int uniqueIndex = 0; // Pointer to track the position of the last unique element

  for (int i = 1; i < arr.size(); i++)
  {
    if (arr[i] != arr[uniqueIndex])
    {
      uniqueIndex++;             // Move the unique index forward
      arr[uniqueIndex] = arr[i]; // Update the position with the new unique element
    }
  }
  // Return the number of unique elements
  return uniqueIndex + 1;
}

int main()
{
  vector<int> arr = {1, 1, 2, 2, 3, 4, 4, 5};

  int newLengthBrute = removeDuplicatesBrute(arr);
  cout << "Brute Approach: New Length: " << newLengthBrute << ", Unique Elements: ";
  for (int i = 0; i < newLengthBrute; i++)
  {
    cout << arr[i] << " ";
  }
  cout << endl;

  // Reset the array for the optimal approach
  arr = {1, 1, 2, 2, 3, 4, 4, 5};

  int newLengthOptimal = removeDuplicatesOptimalTwoPointers(arr);
  cout << "Optimal Two Pointers Approach: New Length: " << newLengthOptimal << ", Unique Elements: ";
  for (int i = 0; i < newLengthOptimal; i++)
  {
    cout << arr[i] << " ";
  }
  cout << endl;
}