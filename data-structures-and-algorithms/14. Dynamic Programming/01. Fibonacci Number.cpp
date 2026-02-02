#include <bits/stdc++.h>
using namespace std;

// ⭐ Approach 1: Recursive
int fibRecursive(int n)
{
    if (n <= 1)
        return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}
// ⭐ Approach 2: Recursive + Top-Down DP (Memoization)
int fibMemoHelper(int n, vector<int> &memo)
{
    // Base Case
    if (n <= 1)
        return n;

    // Check if already computed
    if (memo[n] != -1)
        return memo[n];

    // Compute and store in memo
    memo[n] = fibMemoHelper(n - 1, memo) + fibMemoHelper(n - 2, memo);
    return memo[n];
}
int fibMemoization(int n)
{
    // Base Case
    if (n <= 1)
        return n;

    // Memoization
    vector<int> memo(n + 1, -1);

    return fibMemoHelper(n, memo);
}
// ⭐ Approach 3: OPTIMAL APPROACH (Bottom-Up DP / Space Optimized)
int fibBottomUp(int n)
{
    if (n <= 1)
        return n;

    vector<int> dp(n + 1, 0);

    dp[1] = 1;
    
    for (int i = 2; i <= n; i++)
    {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];

    // Space Optimized
    /*
    if (n <= 1)
        return n;
    int prev2 = 0; // F(0)
    int prev1 = 1; // F(1)
    for (int i = 2; i <= n; i++)
    {
        int curr = prev1 + prev2; // F(n) = F(n-1) + F(n-2)
        prev2 = prev1;            // Update F(n-2)
        prev1 = curr;             // Update F(n-1)
    }
    return prev1;
    */
}
int main()
{
}