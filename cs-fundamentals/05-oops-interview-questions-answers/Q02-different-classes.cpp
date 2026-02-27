#include <bits/stdc++.h>
using namespace std;

// 1. Concrete Class
class Car
{
public:
  void start()
  {
    cout << "Car Start" << endl;
  }
};

// 2. Virtual Function

class Animal
{
public:
  virtual void sound()
  {
    cout << "Animal Sound" << endl;
  }
};

class Dog : public Animal
{
  void sound() override
  {
    cout << "Animal Sound" << endl;
  }
};

// Pure Virtual Function
int main()
{
  Car c;
  c.start();

  Animal *ptr = new Dog();
  ptr->sound();
}