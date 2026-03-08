#include <bits/stdc++.h>
using namespace std;

// PP
void drive(string brand, int speed)
{
  cout << brand << " is driving at " << speed << " km/h" << endl;
}

// OOP
class Car
{
private:
  string brand;
  int speed;

public:
  Car(string b, int s)
  {
    brand = b;
    speed = s;
  }

  void drive()
  {
    cout << brand << " is driving at " << speed << " km/h" << endl;
  }
};

int main()
{
  // PP
  string brand = "BMW";
  int speed = 150;

  drive(brand, speed);

  // OOP
  Car c1("BMW", 120);
  c1.drive();
  return 0;
}