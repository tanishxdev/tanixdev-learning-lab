# basic example 

def greet():
    print("Hello, welcome to Python")

greet()

# example with parameters
def greetWithParameters(name):
    return f"Hello, {name}!"

print(greetWithParameters("Alice"))  # Output: Hello, Alice!

# function with return value

def add(a, b):
    return a + b

result = add(5, 3)
print(f"The sum is: {result}")  # Output: The sum is: 8

# default parameters
def greetWithDefault(name="Guest"):
    return f"Hello, {name}!"

print(greetWithDefault())          # Output: Hello, Guest!
print(greetWithDefault("Bob"))     # Output: Hello, Bob!

# keyword arguments
def describePerson(name, age):
    return f"{name} is {age} years old."

print(describePerson(age=30, name="Charlie"))  # Output: Charlie is 30 years old.

# variable-length arguments
def sumAll(*args):
    return sum(args)
print(sumAll(1, 2, 3, 4, 5))  # Output: 15

# variable scope

def testLocalScope():
    localVar = "I am local"
    print(localVar)

testLocalScope()  # Output: I am local
# print(localVar)  # This would raise an error

globalVar = "I am global"
def testGlobalScope():
    print(globalVar)

testGlobalScope()  # Output: I am global

# function calling another function

def square(x):
    return x * x

def sumOfSquares(a, b):
    return square(a) + square(b)

print(sumOfSquares(3, 4))  # Output: 25