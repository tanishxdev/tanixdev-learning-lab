#include <bits/stdc++.h>
using namespace std;

// 1. global variable
int globalVar = 5;


// global function
void display(){
    cout<<globalVar<<endl;
}

// 2. local varible
void localVar(){
     // This variable is local to function localVar() and
  	// cannot be accessed outside this function
    int localVar = 20;
    cout<<localVar<<endl;
}

// 3. Variable Shadowing
int variableShadowing = 5;

// 4. specialized variations of these scopes that divides the declared variable based on its accessibility and visibility.

// Instance Scope

// static scope
class instanceScope{
public:
    int instanceVar = 10;

    instanceScope(int val){
        instanceVar = val;
    }

    void display(){
        // accessing instance variable
        instanceVar += 10;
        cout<<"instanceVar: "<<instanceVar<<endl;
    }
};
class staticFunction{
public:
    static int staticVar;
};
int staticFunction::staticVar = 10;

// Instance Scope
namespace nameSpaceFuntion{
    int namespaceVar = 10;
}
int main()
{
    // 1. 🎯 Global Scope

    // global variable
    display();
    
    // changing value of gloable from main
    globalVar = 10;

    // // function before calling display()
    display();

    // 2. Local Scope
    cout<<"this is local scope"<<endl;
    localVar();

    // 3. Variable Shadowing
    // Local variable inside a function with the same name as that of a global variable

    // precedence is given to the local variable. This is called variable shadowing.
    cout<<"variableShadowing: "<<variableShadowing<<endl; 
    
    int variableShadowing = 10; // local variable with the same name as the global variable
    cout<<"variableShadowing: "<<variableShadowing<<endl; 

    // Access Global Variable in Variable Shadowing
    cout<<"Access globalValue using scope resolution: "<<::variableShadowing<<endl;


    // 🎯 4. specialized variations of these scopes that divides the declared variable based on its accessibility and visibility. 

    // Instance Scope - instance scope refers to the region inside a class but outside any member function of the class. The variable declared here are called instance variables and are accessible to whole class. They can be accessed by the objects of the class.

    // Static Member Scope  - The static scope applies to variables and functions declared with the static keyword within the class. These variables are shared across all instances of a class and can be accessed using the class name without creating the instance.

    // create object of class
    instanceScope obj(5);
    obj.display(); // access instance variable

    // create object of class
    instanceScope obj2(20);
    obj2.display(); // access instance variable

    
    // access static variable
    cout<<"staticVar:"<<staticFunction::staticVar<<endl;
    // Namespace Scope - A namespace in C++ is a container that allows users to create a separate scope where the given variables are defined. It is used to avoid name conflicts and group related code together. These variables can be then accessed using their namespace name and scope resolution operator.
    
    // access variable using namespace
    cout<<"namespaceVar: "<<nameSpaceFuntion::namespaceVar<<endl;
    return 0;
}