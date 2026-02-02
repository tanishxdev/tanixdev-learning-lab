#include <bits/stdc++.h>
using namespace std;


int main()
{
    // 1. What is a Lambda?.
    // A lambda expression is like a mini anonymous function (function without a name)
    // You write it inline (inside another function, like main()), usually when you don’t need to reuse it again.
    // It’s very useful in STL algorithms (like sort, for_each) where you just need a small piece of logic.

    // 2. Syntax
    // [capture-clause] (parameters) -> return-type {
    // // body
    // };

    // define a lambda
    auto add = [](int a, int b) { 
        return a + b;
    };

    cout << "Sum using lambda: " << add(2, 3) << endl;

    // 3. Why "Capture Clause"? (Very Important)
    // Normally, a lambda is inside another function, so it can capture/use variables from outside.

    // Case 1: [] (no capture)
    int x = 10, y = 20;
    auto noCapture = [](int a, int b) { 
        // cout << a + b + x; // ❌ Error! x is not captured
        return a + b; 
    };
    cout << "Sum using lambda: " << noCapture(x, y) << endl;

    // Case 2: [=] (capture by value → makes a copy)
    auto captureByValue = [=](int a) { 
        // can use x, y as copies
        cout << "Inside captureByValue: " << a + x + y << endl; 
        // x++; ❌ Not allowed (read-only)
    };
    captureByValue(30);
    cout << "Outside after captureByValue, x: " << x << ", y: " << y << endl;

    // Case 3: [&] (capture by reference → use original variable)
    auto captureByRef = [&](int a) { 
        // can use and modify x, y directly
        x += a; 
        y += a; 
        cout << "Inside captureByRef: " << x + y << endl; 
    };
    captureByRef(10);
    cout << "Outside after captureByRef, x: " << x << ", y: " << y << endl;

    // Case 4: [a, &b] (mix capture → some by value, some by reference)
    int a = 5, b = 15;
    auto mixCapture = [a, &b]() mutable {
        // a is captured by value (copy), b by reference
        cout << "Inside mixCapture before: a = " << a << ", b = " << b << endl;
        // a++; // ❌ Not allowed (read-only)
        b++; // allowed (modifies original b)
        cout << "Inside mixCapture after: a = " << a << ", b = " << b << endl;
    };
    mixCapture();

    // 4. Specifying Return Type
    // Mostly compiler guesses it.
    // But if you have complex conditions, specify manually:
    auto conditional = [](int x, int y) -> double {
        if (y == 0) return 0.0; // avoid division by zero
        return (double)x / y;
    };
    cout << "Conditional result: " << conditional(10, 2) << endl;
    cout << "Conditional result: " << conditional(10, 0) << endl;

    // Real Use Case (STL with Lambda)
    vector<int> nums = {1, 2, 3, 4, 5, 6};
    cout << "Even numbers: ";
    for_each(nums.begin(), nums.end(), [](int n) {
        if (n % 2 == 0) cout << n << " ";
    });
    cout << endl;

    // ✅ Summary in One Line:
    // Lambda = inline, anonymous mini function.
    // [] decides how to use variables from outside scope (=, &, or specific ones).

    // Examples : Sort Vector in Descending Order
    vector<int> v = {5, 1, 8, 3, 9, 2};
    

	// Sort in descending order
	sort(v.begin(), v.end(), [] (const int& a, const int&b) {
		return a > b;
	});

    cout <<"sorted vector: ";
	for (int x : v)
		cout << x << " ";
	cout << endl;
    // Find First Number Divisible by 3
    auto it  = find_if(v.begin(), v.end(), [] (int n) {
        return n % 3 == 0;
    });

    if(it != v.end())
        cout<<"First number divisible by 3: " << *it << endl;
    else
        cout<<"No number divisible by 3 found"<<endl;
}