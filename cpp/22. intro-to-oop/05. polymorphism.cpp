#include <iostream>
using namespace std;

class Parent {
public:
    void func() {
        cout << "Parent.func()" << endl;
    }

    virtual void func(int a) {
        cout << "Parent.func(int): " << a << endl;
    }
};

class Child : public Parent {
public:
    void func(int a) override {
        cout << "Child.func(int): " << a << endl;
    }
};

int main() {
    Parent parent;
    Child child;
    Parent* ptr = new Child();

    parent.func();      // Overloaded
    parent.func(10);    // Parent version
    child.func(20);     // Overridden
    ptr->func(30);      // Runtime polymorphism

    delete ptr;
    return 0;
}
