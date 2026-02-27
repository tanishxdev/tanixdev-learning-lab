#include <bits/stdc++.h>
using namespace std;

class Car
{
private:
  // data
  string brand;
  int speed;

public:
  // constructor
  Car(string b, int s)
  {
    brand = b;
    speed = s;
  }

  // behaviour
  void drive()
  {
    cout << brand << " is driving at " << speed << "km /h";
  }
};
int main()
{
  Car c1("BMW", 120);

  c1.drive();
}