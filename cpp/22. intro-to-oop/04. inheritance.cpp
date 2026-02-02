#include <bits/stdc++.h>
using namespace std;

class Animal {
public :
    void eat() {
        cout << "Eating..." << endl;
    }
    void sleep() {
        cout << "Sleeping..." << endl;
    }
};

class Dog : public Animal {
public :
    void bark() {
        cout << "Barking..." << endl;
    }
};
class Lion : public Animal {
public :
    void roar() {
        cout << "Roaring..." << endl;
    }
};
int main()
{
    Dog myDog;

    cout << "🐕 Dog: " << endl;
    myDog.eat();
    myDog.sleep();
    myDog.bark();

    Lion myLion;

    cout << "🦁 Lion: " << endl;
    myLion.eat();
    myLion.sleep();
    myLion.roar();
    return 0;
}