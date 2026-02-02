#include <bits/stdc++.h>
using namespace std;

// Pass Array to Function
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}
int main()
{
    // Initialize the Array 

    int arr[5] = {1, 2, 3, 4, 5};

    // Traverse  the array
    for(int i=0; i<5; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;

    // accessing the array
    cout<<arr[2]<<endl; // Output : 3
    
    // update the array
    arr[2] = 10;
    cout<<arr[2]<<endl; // Output : 3

    // size of array
    cout<<sizeof(arr)<<endl; // Output : 20
    cout<<sizeof(arr)/sizeof(arr[0])<<endl; // Output : 5
    
    // Arrays and Pointers
    int arr2[5] = {1, 2, 3, 4, 5};
    cout << arr2 << endl; // Output: 0x7fff5fbff6e0 (address of the first element in the array)

    int* ptr = arr2;
    cout << ptr << endl; // Output: 0x7fff5fbff6e0

    cout << &arr2[0] << endl; // Output: 0x7fff5fbff6e0

    // Pass Array to Function
    int arr3[5] = {1, 2, 3, 4, 5};
    printArray(arr3, 5);    

    return 0;

}