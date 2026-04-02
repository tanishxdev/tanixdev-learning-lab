#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1:
pair<int, int> secondLargestSecondSmallestSort(vector<int> &arr)
{
  if (arr.size() < 2)
  {
    return {-1, -1}; // Not enough elements for second largest and second smallest
  }

  // Sort the array to find the second largest and second smallest elements
  sort(arr.begin(), arr.end());

  // Return the second largest and second smallest elements
  return {arr[arr.size() - 2], arr[1]};
}

// ⭐ Approach 2:
pair<int, int> secondLargestSecondSmallestTwoPass(vector<int> &arr)
{
  int n = arr.size();
  if (n < 2)
  {
    return {-1, -1}; // Not enough elements for second largest and second smallest
  }

  // Initialize variables to store the smallest, second smallest, largest, and second largest elements
  int smallest = INT_MAX, secondSmallest = INT_MAX;
  int largest = INT_MIN, secondLargest = INT_MIN;

  // First pass to find the smallest and largest elements
  for (int x : arr)
  {
    // Update smallest and largest values
    smallest = min(smallest, x);
    largest = max(largest, x);
  }

  // Second pass to find the second smallest and second largest elements
  for (int x : arr)
  {

    // Update second smallest if current element is greater than smallest and less than second smallest
    if (x > smallest)
      secondSmallest = min(secondSmallest, x);

    // Update second largest if current element is less than largest and greater than second largest
    if (x < largest)
      secondLargest = max(secondLargest, x);
  }

  // Check if second smallest and second largest were found
  if (secondSmallest == INT_MAX)
    secondSmallest = -1; // No second smallest element found
  if (secondLargest == INT_MIN)
    secondLargest = -1; // No second largest element found

  // Return the second largest and second smallest elements
  return {secondLargest, secondSmallest};
}

// ⭐ Approach 3:
pair<int, int> secondLargestSecondSmallestOnePass(vector<int> &arr)
{
  int n = arr.size();
  if (n < 2)
  {
    return {-1, -1}; // Not enough elements for second largest and second smallest
  }

  // Initialize variables to store the smallest, second smallest, largest, and second largest elements
  int smallest = INT_MAX, secondSmallest = INT_MAX;
  int largest = INT_MIN, secondLargest = INT_MIN;

  // Single pass to find the smallest, second smallest, largest, and second largest elements
  for (int x : arr)
  {
    // Update smallest and second smallest values
    if (x < smallest)
    {
      secondSmallest = smallest;
      smallest = x;
    }
    // Check if current element is greater than smallest and less than second smallest to update second smallest
    else if (x > smallest && x < secondSmallest)
    {
      secondSmallest = x;
    }

    // Update largest and second largest values
    if (x > largest)
    {
      secondLargest = largest;
      largest = x;
    }
    // Check if current element is less than largest and greater than second largest to update second largest
    else if (x < largest && x > secondLargest)
    {
      secondLargest = x;
    }
  }

  // Check if second smallest and second largest were found
  if (secondSmallest == INT_MAX)
    secondSmallest = -1; // No second smallest element found
  if (secondLargest == INT_MIN)
    secondLargest = -1; // No second largest element found

  // Return the second largest and second smallest elements
  return {secondLargest, secondSmallest};
}
int main()
{
  vector<int> arr = {10, 20, -5, 500, 2};

  auto result1 = secondLargestSecondSmallestSort(arr);
  cout << "Approach 1 (Sort): Second Largest: " << result1.first << ", Second Smallest: " << result1.second << endl;

  auto result2 = secondLargestSecondSmallestTwoPass(arr);
  cout << "Approach 2 (Two Pass): Second Largest: " << result2.first << ", Second Smallest: " << result2.second << endl;

  auto result3 = secondLargestSecondSmallestOnePass(arr);
  cout << "Approach 3 (One Pass): Second Largest: " << result3.first << ", Second Smallest: " << result3.second << endl;
}