#include <iostream>
using namespace std;

int main() {

  	// basics
    int int_datatypes= 10;
    float float_datatypes= 10.0;
    char char_datatypes= 'A';
    bool bool_datatypes= true;
    double double_datatypes= 1.1000000001;
    // void void_datatypes = NULL;

    cout<<int_datatypes<<endl;
    cout<<float_datatypes<<endl;
    cout<<char_datatypes<<endl;
    cout<<bool_datatypes<<endl;
    cout<<double_datatypes<<endl;
    
    // size of each datat types -> depends on compiler and operating system
    // Printing the size of each data type
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of char: " << sizeof(char) << " byte" << endl;
    cout << "Size of float: " << sizeof(float) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes";
    return 0;
}