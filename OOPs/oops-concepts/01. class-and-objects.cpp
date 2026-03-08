#include <bits/stdc++.h>
using namespace std;
class Employee{
    public:
    string name;
    int age;
    int salary;

public:
    Employee(string name, int age, int salary){
        this->name = name;
        this->age = age;
        this->salary = salary;
    }

    void displayDetais(){
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Salary: " << salary << endl;
    }
};
int main()
{
    Employee emp("Tanish", 20, 10000);
    emp.displayDetais();
    return 0;
}